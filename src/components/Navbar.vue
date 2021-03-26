<template>
  <v-app-bar app color="background">
    <strong class="text-h4 d-none d-sm-flex white--text">Shop X</strong>
    <v-text-field
      :value="search"
      @input="debounceSearch"
      class="mx-auto search-bar"
      color="background"
      placeholder="Type here to search..."
      append-icon="mdi-magnify"
      hide-details
      clearable
      filled
      dense
      solo
    />
    <nav class="d-none d-sm-flex">
      <router-link to="/" :disabled="$route.name === 'Home'" class="mr-2"
        >Home</router-link
      >
      <router-link to="/products" :disabled="$route.name === 'Products'"
        >Products</router-link
      >
    </nav>
  </v-app-bar>
</template>
<script>
import { debounce, clear } from "@/utils/debouncer";
export default {
  name: "Navbar",
  computed: {
    search() {
      return this.$store.getters["Product/query"].q;
    },
  },
  methods: {
    handleSearch(search) {
      this.$store.dispatch("Product/fetchProducts", { search, page: 1 });
    },
    debounceSearch(search) {
      if (search === null) return this.clearSearch();
      this.$store.commit("Product/SET_SEARCHING", true);
      debounce("search", () => {
        this.handleSearch(search);
        if (this.$route.name !== "Products") this.$router.push("/products");
        this.$store.commit("Product/SET_SEARCHING", false);
      });
    },
    clearSearch() {
      clear("search");
      this.handleSearch("");
      this.$store.commit("Product/SET_SEARCHING", false);
    },
  },
};
</script>

<style scoped>
.search-bar {
  max-width: 260px;
  position: relative;
  background: #fff;
}
a {
  color: #eee !important;
}
a:not([disabled]) {
  color: #ddd !important;
  text-decoration: none;
}
</style>
