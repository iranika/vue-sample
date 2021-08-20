<template>
  <div style="text-align:center">
    <v-btn color="primary" rounded x-small depressed :href="link">
      <v-icon x-small>mdi-twitter</v-icon>
      シェア
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String
    }
  }
};
</script>

<style></style>
