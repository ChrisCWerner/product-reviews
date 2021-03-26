<template>
  <div :title="stars + '/5'" class="d-inline stars">
    <v-icon
      class="star-icon"
      color="accent"
      v-for="(star, i) in starArray"
      :key="i"
      >{{ star }}</v-icon
    >
  </div>
</template>
<script>
export default {
  name: "StarRating",
  props: {
    totalStars: {
      type: Number,
      default: 5,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
  computed: {
    starArray() {
      const stars = [];
      let starControl = this.stars;
      for (let i = 0; i < this.totalStars; i++) {
        if (starControl >= 1) {
          stars.push("mdi-star");
        } else if (starControl > 0) {
          stars.push("mdi-star-half-full");
        } else {
          stars.push("mdi-star-outline");
        }
        starControl--;
      }
      return stars;
    },
  },
};
</script>
<style scoped>
.stars {
  padding: 0 3px;
}
.star-icon {
  margin: 0 -3px;
}
</style>
