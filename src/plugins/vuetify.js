import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#05ACC2",
        "primary-variant": "#206CF5",
        accent: "#C96238",
        background: "#273A5C",
      },
      light: {
        primary: "#05ACC2",
        "primary-variant": "#206CF5",
        accent: "#C96238",
        background: "#EEEEEE",
      },
    },
  },
});
