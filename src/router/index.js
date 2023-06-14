import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from "../views/HelpView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import TermsAndConditions from "../views/TermsAndCondtions.vue";

import AboutUs from '../views/AboutUs.vue'
import ContactView from "../views/ContactView.vue";
import SupportView from "../views/SupportView.vue";

import ItemView from "../views/ItemView.vue";
import CartView from "../views/CartView.vue";
import CheckoutView from '../views/CheckoutView.vue'

import LaptopsView from "../views/LaptopsView.vue";
import PhonesView from "../views/PhonesView.vue";
import VideoView from "../views/VideoView.vue";
import ElectronicsView from "../views/ElectronicsView.vue";
import GamingView from "../views/GamingView.vue";
import FashionView from "../views/FashionView.vue";
import CareView from "../views/CareView.vue";
import PetsView from "../views/PetsView.vue";
import FurnitureView from "../views/FurnitureView.vue";
import AutoView from "../views/AutoView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: TermsAndConditions,
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs,
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/support',
    name: 'support',
    component: SupportView,
  },
  {
    path: "/item/:id",
    name: "item",
    component: ItemView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
  },
  {
    path: '/laptops-and-computers',
    name: 'laptops-and-computers',
    component: LaptopsView,
  },
  {
    path: '/phones-and-tablets',
    name: 'phones-and-tablets',
    component: PhonesView,
  },
  {
    path: '/cameras-and-video',
    name: 'cameras-and-video',
    component: VideoView,
  },
  {
    path: '/electronics',
    name: 'electronics',
    component: ElectronicsView,
  },
  {
    path: '/gaming',
    name: 'gaming',
    component: GamingView,
  },  {
    path: '/fashion',
    name: 'fashion',
    component: FashionView,
  },
  {
    path: '/personal-care',
    name: 'personal-care',
    component: CareView,
  },
  {
    path: '/pets',
    name: 'pets',
    component: PetsView,
  },
  {
    path: '/furniture',
    name: 'furniture',
    component: FurnitureView,
  },
  {
    path: '/auto',
    name: 'auto',
    component: AutoView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
