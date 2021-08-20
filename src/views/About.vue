<template>
  <div class="about">
    <v-card max-width="90%" align-center class="mx-auto my-10">
      <v-card-title>みちくさびゅあーについて</v-card-title>
      <v-card-text>
        <div>
          <p>
            桃鳥さんが描いている「<a href="http://momoirocode.web.fc2.com/">ばっくやーど数コマ</a>」をスマホで読みやすくするアプリです。
          </p>
          <p>
            桃鳥さんの許諾を得て、<a href="https://twitter.com/happy_packet"
              >いらにか</a
            >がアプリを公開・メンテしています。画像等の著作権は桃鳥さんにあり、アプリの著作権はいらにかにあります。
            アプリに関するお問い合わせは<a
              href="https://twitter.com/happy_packet"
              >いらにか(twitter)</a
            >までお願いします。
          </p>
          <p>
            漫画の更新情報はTwitterのハッシュタグ『<a href="https://twitter.com/hashtag/%E6%A1%83%E8%89%B2CODE%E6%9B%B4%E6%96%B0%E6%83%85%E5%A0%B1">#桃色CODE更新情報</a>』でつぶやいています。
            <a href="https://mo4koma.iranika.info/feed.atom">RSS/Atom</a>でも配信しています。
          </p>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-title>いろいろな機能</v-card-title>
      <v-card-text>
        <ol>
          <li>
            スクロールして読み進めると自動で次の話をロードしてくれます。とっても便利！！
          </li>
          <li>
            シェアボタンでボタンの上にある話数をTwitterでシェアできます。布教しやすい便利設計‼
          </li>
          <li>
            右上のメニューボタンから好きな話数にジャンプできます。話数表示で便利！！
          </li>
          <li>トップのLATESTタブで最新話にジャンプできます。地味に便利！！</li>
          <li>
            URLで指定話数にジャンプできます。数字の代わりにlatestと記載すると最新話にジャンプできます。こいつのおかげで、好きな話数をシェアできる！！
          </li>
          https://movue.iranika.info/#/?page=100<br />
          https://movue.iranika.info/#/?page=latest<br />
        </ol>
      </v-card-text>
    </v-card>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  data: () => ({}),
  components: {
    Footer
  }
};
</script>

<style scoped>
p {
  text-indent: 1em;
}
</style>
