/////////////DEFAULT//////////////
import { createWebHistory, createRouter } from "vue-router";
import Login from "../src/components/Login.vue"
import Account from "../src/components/Account.vue"


const routes = [
  /////////////DEFAULT//////////////

  {
    path: "/",
    name: "Login",
    component:
      Login,
  },

  {
    path: "/cuenta",
    name: "Account",
    component:
      Account,
  },
];

const _router = createRouter({
  history: createWebHistory(),
  routes,
});

export default _router;
