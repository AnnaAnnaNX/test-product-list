<script setup lang="ts">
import { useProductStore } from '@/stores/product'
const { products, getFavorites } = useProductStore()
import Product from './Product.vue'
</script>

<template>
  <div>
    <h3>Список всех товаров</h3>
    <Product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>
