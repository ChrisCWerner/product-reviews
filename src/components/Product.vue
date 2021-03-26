<template>
  <v-card tile>
    <v-card-title v-text="name" />
    <v-row no-gutters>
      <v-col class="px-4" cols="12" sm="3" xl="2">
        <v-img :src="image">
          <div class="fill-height d-flex">
            <div class="review-container elevation-10">
              <StarRating :stars="Number(star_rating)" />
              <div class="px-1 mt-n2">
                <i class="text-caption">from {{ review_count }} reviews</i>
              </div>
            </div>
          </div>
        </v-img>
      </v-col>
      <v-col cols="0" sm="9">
        <v-card-text class="pt-0" v-text="description" />
        <span class="text-h4 ml-4 mr-2">{{ price }}</span>
        <i class="text--secondary text--lighten-3"
          >{{ available_count }} available</i
        >
      </v-col>
    </v-row>
    <div class="footnotes px-1 d-flex flex-wrap align-center justify-end">
      <div class="mr-3">
        <v-icon size="14" class="mr-1">mdi-map-marker</v-icon>
        <span class="text-caption font-italic" v-text="location" />
      </div>
      <div class="">
        <v-icon size="14" class="mr-1">mdi-clock</v-icon>
        <span class="text-caption font-italic" v-text="last_updated" />
      </div>
    </div>
  </v-card>
</template>

<script>
import StarRating from "./StarRating";

export default {
  props: {
    id: String,
    name: String, // OK
    description: String, // OK
    last_updated: String, // OK
    available_count: Number, // ~~
    price: String, // ~~
    location: String,
    image: String, // OK
    seller_name: String,
    star_rating: [String, Number], // OK
    review_count: Number, // ~~
  },
  components: {
    StarRating,
  },
};
</script>

<style scoped>
.review-container {
  background: #0003;
  color: #fffd;
  width: 100%;
  align-self: flex-end;
  text-align: end;
}
</style>
