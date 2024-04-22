<script setup lang="ts">
import FavoriteProductsList from '../components/FavoriteProductsList.vue'
import ProductsList from '../components/ProductsList.vue'
</script>

<template>
  <main>
    <div class="wrap">
      <FavoriteProductsList />
      <ProductsList />
    </div>
  </main>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between; 
}
</style>