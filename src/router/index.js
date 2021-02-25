import { createRouter, createWebHistory } from "vue-router";
import BecomeaMentor from "../views/BecomeaMentor.vue";
import JoinUs from "../views/JoinUs.vue";
import Home from "../components/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/become-a-mentor",
    name: "BecomeaMentor",
    component: BecomeaMentor
  },
  {
    path: "/join-us",
    name: "JoinUs",
    component: JoinUs
  },
  {
    path: "/about",
    name: "About",
    component: Home
  },
  {
    path: "/privacy-policy",
    name: "privacypolicy",
    component: Home
  },
  {
    path: "/terms-and-conditions",
    name: "termsandconditions",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
