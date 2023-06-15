<script setup>
import { useRoute } from "vue-router";
import { CheckIcon } from "@heroicons/vue/24/outline";
import { useShopStore } from "@/store/shop";

const route = useRoute();
const shop = useShopStore();
const item = shop.forSale.find((item) => item.id === route.params.id);

const addToCart = () => {
  shop.addToCart(item);
};
</script>

<template>
  <div class="d-flex">
    <img class="h-25 w-25" :src="item.photo"  alt="image description"/>
    <div class="">
      <div class="">
        <h2 class="">{{ item.title }}</h2>
        <div class="text-2xl">${{ item.price / 100 }}</div>
        <div>{{ item.description }}</div>
      </div>
      <button
          class="d-flex p-3"
          @click="addToCart"
      >
        <transition mode="out-in">
          <div v-if="shop.addedMessageShown" class="d-flex gap-2">
            <CheckIcon class="w-2 h-2" />
            Added to cart!
          </div>
          <div v-else>Add to cart</div>
        </transition>
      </button>
      <button
          class="d-flex p-3"
          @click="$router.go(-1)"
      >
        Go back
      </button>
    </div>
  </div>
</template>

<style scoped>
.h-25 {
  height: 5%;
}
.w-25 {
  width: 5%;
}
</style>
