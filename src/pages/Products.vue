<template>
  <v-container class="products">
    <v-card-title class="d-flex">
      <span class="text-h5 flex-grow-1">Products</span>
      <!-- quick pagination -->
      <v-pagination
        class="d-none d-sm-block"
        v-bind="paginationProps(5)"
        @input="handlePagination"
      />
    </v-card-title>
    <!-- products list -->
    <template v-if="products.length">
      <Product
        class="mb-2"
        :class="{ fade: loading || searching }"
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </template>
    <div v-else class="text-center text--secondary font-italic mb-4">
      No products found
    </div>
    <!-- pagination control -->
    <div class="text-center">
      <v-pagination v-bind="paginationProps()" @input="handlePagination" />
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
    paginationProps(totalVisible = 10) {
      return {
        value: this.pagination._page,
        length: this.pagination.last,
        disabled: this.loading || this.searching,
        totalVisible,
      };
    },
  },
};
</script>

<style scoped>
.fade {
  opacity: 0.7;
}
</style>
