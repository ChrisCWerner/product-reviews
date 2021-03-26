<template>
  <v-container class="products">
    <v-card-title class="d-flex">
      <span class="text-h5 flex-grow-1">Products</span>
      <v-pagination
        class="d-none d-sm-block"
        :value="pagination._page"
        :length="pagination.last"
        :total-visible="5"
        :disabled="loading || searching"
        @input="handlePagination"
      />
    </v-card-title>
    <!-- products list -->
    <Product
      class="mb-2"
      :class="{ fade: loading || searching }"
      v-for="product in products"
      :key="product.id"
      v-bind="product"
    />
    <!-- pagination control -->
    <div class="text-center">
      <v-pagination
        :value="pagination._page"
        :length="pagination.last"
        :total-visible="10"
        :disabled="loading || searching"
        @input="handlePagination"
      />
    </div>
  </v-container>
</template>

<script>
import Product from "../components/Product";
import { mapGetters } from "vuex";

export default {
  name: "Products",
  components: {
    Product,
  },
  computed: {
    ...mapGetters("Product", [
      "products",
      "loading",
      "searching",
      "pagination",
    ]),
  },
  created() {
    this.$store.dispatch("Product/fetchProducts");
  },
  methods: {
    handlePagination(page) {
      this.$store.dispatch("Product/fetchProducts", { page });
    },
  },
};
</script>

<style scoped>
.fade {
  opacity: 0.7;
}
</style>
