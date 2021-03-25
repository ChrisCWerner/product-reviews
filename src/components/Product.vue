<template>
  <v-card tile>
    <v-row no-gutters>
      <v-col class="pa-4" cols="12" sm="3" xl="2">
        <v-row no-gutters>
          <v-col cols="9" sm="12">
            <v-img :src="image"></v-img>
          </v-col>
          <v-col cols="3" sm="12">
            <div class="">
              <span>{{ review_count }} reviews</span>
            </div>
            <div class="">
              <span>{{ star_rating }}/5 rating</span>
            </div>
            <div class="">
              <span>{{ available_count }} available</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="0" sm="9">
        <v-sheet>
          <v-card-title v-text="name" />
          <v-card-subtitle class="pb-0 pt-4">Description</v-card-subtitle>
          <v-card-text v-text="description" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    description: String,
    last_updated: String,
    available_count: Number,
    price: String,
    location: String,
    image: String,
    seller_name: String,
    star_rating: [String, Number],
    review_count: Number,
  },
};
</script>
