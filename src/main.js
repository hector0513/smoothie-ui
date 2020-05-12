import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apolloClient from "./apollo";
import VueApollo from "vue-apollo";
import vuetify from './plugins/vuetify';

Vue.use(VueApollo);
Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
