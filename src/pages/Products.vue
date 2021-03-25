<template>
  <v-container class="products">
    <strong class="text-h4">Products</strong>
    <!-- products list -->
    <Product v-for="product in products" :key="product.id" v-bind="product" />
    <!-- pagination control -->
  </v-container>
</template>

<script>
import Product from "../components/Product";
export default {
  name: "Products",
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  async created() {
    // TODO control api calls with vuex module
    const res = await this.$store.dispatch("client", {
      service: "reviews/all",
      query: "?_page=3&_limit=5",
    });
    this.products = res.data;
    this.pagination = {
      _page: 1,
      _limit: 5,
    };
  },
};
</script>
