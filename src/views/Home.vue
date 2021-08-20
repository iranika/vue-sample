<template>
  <div class="home">
    <ViewerContent :page="page" :lang="lang"></ViewerContent>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewerContent from "../components/ViewerContent.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    ViewerContent,
    Footer,
  },
  props: {
    page: String,
    lang: String,
  },
  data: () => ({}),
};
</script>
