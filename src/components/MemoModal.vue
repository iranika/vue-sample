<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slo:activator="{ on, attrs }">
      <v-btn
        rounded
        x-small
        depressed
        color="orange"
        style="color: white"
        ><v-icon x-small>mdi-book</v-icon>
        Memo
      </v-btn>
    </template>
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          ひとくちMEMO
        </v-card-title>
        <v-html v-model="contents"></v-html>
      </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    contents: {}
  },
  data () {
      return {
        dialog: false,
      }
    },
};
</script>

<style>
</style>