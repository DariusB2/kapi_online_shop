<template>
  <div class="HomeView">
    <LandingScreen />
    <ProductsOverview />
  </div>
</template>

<script>
import LandingScreen from "@/components/LandingScreen.vue";
import ProductsOverview from "@/components/ProductsLine.vue";

export default {
  components: {
    LandingScreen,
    ProductsOverview,
  },
};
</script>

<style scoped>
.HomeView {
  background-color: var(--grey);
}
</style>
