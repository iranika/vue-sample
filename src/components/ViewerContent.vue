<template>
  <div>
    <div
      centered
      style="text-align:center; padding:10px"
      v-if="Math.min.apply(null, show) > 0"
    >
      <v-btn small v-on:click="BeforeContent()" rounded>▲前のお話▲</v-btn>
    </div>
    <div v-for="i in show" :key="i" :id="'page-' + i">
      <img
        v-for="(_, j) in pages[i].ImagesUrl"
        :key="j"
        :src="pages[i].ImagesUrl[j].replace('/ja/','/ja/webp/').replace('.jpg','.webp')"
        alt=""
        width="100%"
      />
      <div style="display: flex; justify-content: center;">
        <ShareTwitterButton
          :link="CreateShareLinkTwitter(i + 1, pages[i].Title)"
        ></ShareTwitterButton>
        <div style="text-align: center">
          <v-btn rounded x-small v-on:click="scrollTop()" depressed
            >トップに戻る</v-btn
          >
          <v-btn
            rounded
            x-small
            depressed
            color="orange"
            style="color: white"
            v-if="memos[i] && memos[i] != null"
            v-on:click="memo=memos[i]; dialog = !dialog"
            ><v-icon x-small>mdi-book</v-icon>
            Memo
          </v-btn>
        </div> 
               
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
          <v-card-title class="text-h5 lighten-2">
            ひとくちメモ<v-icon >mdi-book</v-icon>
            <v-spacer></v-spacer>
            <v-btn text color="primary" v-on:click="dialog = !dialog">とじる</v-btn>
          </v-card-title>
          <v-card-text v-html="memo" class="memo-content"></v-card-text>
        </v-card>
    </v-dialog>

    <div centered style="text-align:center; padding:10px">
      <v-btn
        rounded
        small
        v-on:click="addContent()"
        v-if="pages.length - 1 > Math.max.apply(null, show)"
        >▼続きを表示▼</v-btn
      >
    </div>
  </div>
</template>

<script>
import ShareTwitterButton from "../components/ShareTwitterButton.vue";
//import MemoModal from "../components/MemoModal.vue";
import axios from "axios";


export default {
  components: {
    ShareTwitterButton,
    //MemoModal
  },
  props: {
    page: {
      type: String,
      default: "1"
    },
    lang:{
      type: String,
      default: "ja"
    }
  },
  data: () => ({
    show: [],
    enableBack: false,
    pages: window.pageData,
    memos: [""],
    memo: "",
    bottom: false,
    dialog: false,
  }),
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY + 2 >= pageHeight; // +2 is margin
      //console.log("bottomVisible is fired", {scrollY, visible, pageHeight, bottomOfPage})
      return bottomOfPage || pageHeight < visible;
    },
    addContent(addnum = 1) {
      if (this.pages.length - 1 > Math.max.apply(null, this.show)) {
        this.show.push(Math.max.apply(null, this.show) + addnum);
      } else {
        console.log("viewerContent info: show.length is over pages.length");
      }
    },
    BeforeContent() {
      if (Math.min.apply(null, this.show) > 0) {
        this.show.unshift(Math.min.apply(null, this.show) - 1);
      } else {
        console.log("viewerContent info: can not show page under 0");
      }
    },
    scrollTop() {
      scrollTo(0, 0);
    },
    onScroll() {
      this.bottom = this.bottomVisible();
    },
    setShow() {
      const pageInt = parseInt(this.page);
      console.log(pageInt);
      if (this.page === "latest") {
        this.show.push(this.pages.length - 1);
      } else if (pageInt > 0 && pageInt <= this.pages.length) {
        this.show.push(pageInt - 1);
      } else if (pageInt <= 0) {
        this.show.push(0);
      } else {
        this.show.push(0);
        console.log("?page query is unknown value");
      }
    },
    InitShow() {
      this.show = [];
      this.setShow();
      //this.addContent()
    },
    CreateShareLinkTwitter(num, title) {
      const tw_text = encodeURI(`第${num}話「${title}」`);
      return `https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=${tw_text}&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2F%23%2F%3Fpage%3D${num}`;
      //`<a class="tweetbtn hidden-image" href="https://twitter.com/intent/tweet?hashtags=%E9%81%93%E8%8D%89%E5%B1%8B&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonText%3D%25E3%2581%2593%25E3%2581%2593%25E3%2581%2599%25E3%2581%258D%25EF%25BC%2581%25EF%25BC%2581%2523%25E3%2581%25BF%25E3%2581%25A1%25E3%2581%258F%25E3%2581%2595%25E3%2581%25B3%25E3%2582%2585%25E3%2581%2582%25E3%2583%25BC%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fmovue.iranika.info%252Fmo-code%252F%252310%26dnt%3D1%26lang%3Dja%26widget%3DButton&ref_src=twsrc%5Etfw&text=${tw_text}&tw_p=tweetbutton&url=https%3A%2F%2Fmovue.iranika.info%2Fmo-code%2F%23${pageNum +1}"><span class="label">ツイートする</span></a>`
    }
  },
  watch: {
    bottom() {
      if (this.bottom) {
        this.addContent();
      }
    },
    page() {
      this.InitShow();
    }
  },
  mounted(){
    //check language.
    if (this.lang == "en"){
      axios.get("https://mo4koma.iranika.info/4komaData.en.json").then((res)=>{
        if (res.data[0]){
          this.pages = res.data;
        }
      });
    }else if(this.lang == "zh-tw"){
      axios.get("https://mo4koma.iranika.info/4komaData.zh.json").then((res)=>{
        if (res.data[0]){
          this.pages = res.data;
        }
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
    this.setShow();
    this.addContent();
    axios.post("https://script.google.com/macros/s/AKfycbyqELM2mm3J58BLXIjxKxIYN64x6iF6I6ctJU_Vdui6gx331Pz5R5FpuL3s-aM8nsgn/exec").then(
      (res)=>{
        if (res.data[0]){
          this.memos = res.data
          //console.log("got memos", this.memos);  
        }
      }
    ).catch((e)=>{
      console.log("cannot get memos.", e);
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>

</style>
