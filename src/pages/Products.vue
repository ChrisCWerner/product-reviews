<template>
  <v-container class="products">
    <strong class="text-h4">Products</strong>
    <!-- products list -->
    <Product
      class="mb-2"
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
    ...mapGetters("Product", ["products", "loading", "pagination"]),
  },
  created() {
    this.$store.dispatch("Product/fetchProducts");
  },
  methods: {
    handlePagination(page) {
      this.$store.commit("Product/SET_PAGE", page);
      this.$store.dispatch("Product/fetchProducts");
    },
  },
};
</script>
