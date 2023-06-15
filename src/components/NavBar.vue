<script setup>
 import {ShoppingBagIcon, Bars3Icon} from "@heroicons/vue/24/outline";
import { useShopStore } from "@/store/shop";
const shop = useShopStore();
</script>

<template>
  <section class="userLinks">
    <router-link class="link" to="/help">Help</router-link>|
    <router-link class="link" to="/register">Join Us</router-link>|
    <router-link class="link" to="/login">Sign In</router-link>
  </section>
  <nav class="navbar">
    <div class="burger-menu">
      <div class="dropdown">
        <a
            class="tools"
            type="button"
            id="dropdownProduct"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
          <Bars3Icon class="h-5 w-5-bar"/>
        </a>
<!--        <button-->
<!--            class="tools"-->
<!--            type="button"-->
<!--            id="dropdownProduct"-->
<!--            data-bs-toggle="dropdown"-->
<!--            aria-expanded="false"-->
<!--        >-->
<!--          <Bars3Icon size=10000 />-->
<!--          <i class="fa-solid fa-bars"></i>-->
<!--        </button>-->
        <div class="dropdown-menu" aria-labelledby="dropdownProduct">
          <div class="productCategories">
            <ul class="categories">
              <li class="category">
                <a href="laptops-and-computers" class="categoryLink"
                >Laptops & Computers</a
                >
              </li>
              <li class="category">
                <a href="phones-and-tablets" class="categoryLink"
                >Phones & Tablets</a
                >
              </li>
              <li class="category">
                <a href="cameras-and-video" class="categoryLink">Cameras & Video</a>
              </li>
              <li class="category">
                <a href="electronics" class="categoryLink">Electronics</a>
              </li>
              <li class="category">
                <a href="gaming" class="categoryLink">Gaming</a>
              </li>
              <li class="category">
                <a href="fashion" class="categoryLink">Fashion</a>
              </li>
              <li class="category">
                <a href="personal-care" class="categoryLink">Personal Care</a>
              </li>
              <li class="category">
                <a href="pets" class="categoryLink">Pets</a>
              </li>
              <li class="category">
                <a href="furniture" class="categoryLink">Furniture</a>
              </li>
              <li class="category">
                <a href="auto" class="categoryLink">Auto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="category">
        <a href="/" class="title">Kapi Online Store</a>
      </div>
    </div>
    <div class="">
      <RouterLink class="d-flex" to="/cart">
        <ShoppingBagIcon class="w-5"/>
        <span class="w-5-bar">{{ shop.cartQuantity }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.userLinks {
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  background-color: var(--grey);
  width: 100%;
  padding: 0.5rem 2rem;
  gap: 0.7rem;
  height: 2rem;
}
.userLinks .link {
  color: var(--carbon);
  text-decoration: none;
  transition: 0.2s;
}
.userLinks .link:hover {
  color: var(--carbonLight);
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  top: 0;
  position: sticky;
  background-color: white;
  z-index: 2;
}
.dropdown-menu {
  padding: 1rem 1rem 0 1rem;
}
.categories {
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
}
.category,
.categoryLink {
  list-style: none;
  text-decoration: none;
  color: black;
  transition: 0.2s;
  font-size: large;
}
.categoryLink:hover {
  color: var(--carbonLight);
}
.title {
  list-style: none;
  text-decoration: none;
  color: black;
  transition: 0.2s;
  font-size: xx-large;
}
.title:hover {
  color: var(--carbonLight);
}
.tools {
  display: flex;
  align-items: center;
}
.dropdown {
  background-color: transparent;
}
.info h4 {
  font-size: 0.9rem;
  font-weight: 300;
}
.qty span {
  font-size: 0.7rem;
  color: var(--carbon);
}
@media screen and (max-width: 900px) {
  .navbar {
    padding: 0.4rem 1rem;
  }
}
.h-5 {
  height: 10%;
}
.w-5 {
  width: 100%;
  padding-left: 80%;
  color: black;
}
.w-5-bar {
  width: 20%;
  color: black;
}
.w-5:hover {
  color: var(--carbonLight);
}
.w-5-bar:hover {
  color: var(--carbonLight);
}
</style>
