<script setup lang="ts">
import { useProductStore } from '@/stores/product'
const productStore = useProductStore()
import Product from './Product.vue'
</script>

<template>
  <div>
    <h3>Избранные товары</h3>
    <div v-if="!productStore.getFavorites.length">Нет избранных товаров</div>
    <div v-else>
      <Product v-for="product in productStore.getFavorites" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>
