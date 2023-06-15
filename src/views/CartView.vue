<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useShopStore } from "@/store/shop";

const shop = useShopStore();
</script>

<template>
  <div>
    <h2 class="text-2xl">Shopping Cart</h2>
    <div
        v-if="shop.cartQuantity > 0"
        class="d-inline-flex pb-5 p-5"
    >
      <div class="">
        <div v-for="item in shop.cart" :key="item.id" class="d-flex p-5">
          <img class="w-25" :src="item.photo" alt="item photo"/>
          <div class="w-75">
            <div class="w-50">
              <div>{{ item.title }}</div>
              <div class="">${{ item.price / 100 }}</div>
            </div>

            <div class="">
              <select
                  class="d-inline-flex w-10"
                  v-model.number="item.quantity"
              >
                <option v-for="i in item.quantity > 10 ? item.quantity : 10"
                v-bind:key="i.id">
                  {{ i }}
                </option>
              </select>
            </div>

            <div>
              <XMarkIcon
                  class="d-inline-flex w-10"
                  @click="shop.removeItem(item)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 rounded-md p-6 lg:w-1/3 flex flex-col gap-6">
        <h3 class="text-lg">Order summary</h3>

        <div class="divide-y divide-gray-300">
          <div class="py-3 flex justify-between">
            <div>Subtotal</div>
            <div>${{ shop.cartSubtotal / 100 }}</div>
          </div>

          <div class="py-3 flex justify-between">
            <div>Shipping</div>
            <div>${{ shop.cartShipping / 100 }}</div>
          </div>

          <div class="py-3 flex justify-between">
            <div>Tax</div>
            <div>${{ (shop.cartTax / 100).toFixed(2) }}</div>
          </div>

          <div class="py-3 flex justify-between font-bold">
            <div>Order total</div>
            <div>${{ (shop.cartTotal / 100).toFixed(2) }}</div>
          </div>
        </div>

        <a href="/checkout">
          <button
              class="flex justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 text-black rounded-md p-3 w-full"
          >
            Checkout
          </button>
        </a>
      </div>
    </div>

    <div v-else class="mt-10">Nothing here, yet!</div>
  </div>
</template>

<style>
.w-10 {
  width: 10%;
  justify-content: center;
}
.text-2xl {
  padding: 1%;
}
</style>
