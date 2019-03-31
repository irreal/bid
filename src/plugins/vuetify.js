import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import colors from "vuetify/es5/util/colors";
// import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: colors.blueGrey.base,
    secondary: colors.amber.base,
    accent: colors.orange.base,
    error: colors.deepOrange.base,
    warning: colors.purple.base,
    info: colors.lightBlue.base,
    success: colors.green.base
  }
});
