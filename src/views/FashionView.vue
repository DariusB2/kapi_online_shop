<script setup>
import { useShopStore } from "@/store/shop";
import {computed, ref} from "vue";

const shop = useShopStore();
let filter = ref("fashion")

const filteredForSale = computed(() => {
  return shop.forSale.filter(product => product.type === filter.value)
})
</script>

<template>
  <div class="main">
    <div
        class="w-100 d-flex"
    >
      <RouterLink
          class="d-flex w-100"
          v-for="item in filteredForSale"
          v-bind:key="item.id"
          :to="`/item/${item.id}`"
      >
        <img
            class="w-50"
            :src="item.photo"
            alt="280 by 320 pixel placeholder"
        />
        <div class="">
          <div>{{ item.title }}</div>
          <div class="font-bold">${{ item.price / 100 }}</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.main {
  padding: 5%;
}
</style>