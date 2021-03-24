<template>
  <v-app>
    <v-app-bar app color="primary"> </v-app-bar>

    <v-main>
      <!-- router -->
      {{ res }}
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      res: null,
    };
  },
  async created() {
    this.res = await this.$store.dispatch("client", {
      service: "reviews/all",
      query: "?_page=3&_limit=5",
    });
  },
};
</script>
