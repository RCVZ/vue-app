import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faAlignJustify,
  faListUl,
  faPlusSquare,
  faTh
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faAlignJustify, faListUl, faPlusSquare, faTh);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
