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
        <button
            class="tools"
            type="button"
            id="dropdownProduct"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
          <Bars3Icon size=10000 />
          <i class="fa-solid fa-bars"></i>
        </button>
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
        <a href="/" class="categoryLink">Kapi Online Store</a>
      </div>
    </div>
    <div class="tools">
      <RouterLink class="flex gap-2 text-gray-500 hover:text-black" to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <ShoppingBagIcon/>
        <span class="text-black">{{ shop.cartQuantity }}</span>
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
}
.categoryLink:hover {
  color: var(--carbonLight);
}
.tools {
  display: flex;
  align-items: center;
}
.dropdown {
  background-color: transparent;
}
.dropdown-toggle::after {
  content: none;
}
.product {
  display: flex;
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
@media screen and (max-width: 500px) {
  .product {
    width: 90%;
  }
}
.fa-solid {
  font-size: 1rem;
}
.fa-solid:hover {
  color: grey;
  transition: 0.4s;
}
.fa-solid {
  color: var(--carbon);
  font-size: 1.5rem;
  transition: 0.6s;
}
.search .fa-solid {
  font-size: 1rem;
}
</style>
