<script setup lang="ts">
  import {defineProps, ref} from 'vue'
  const {product} = defineProps({
    product: Object
  })
  const showMore = ref(false)
  import { useProductStore } from '@/stores/product'
  const { removeFromFavorites, addToFavorites } = useProductStore()
</script>

<template>
  <div class="product">
    <div class="product-header">
      <span class="title">{{product.name}}</span>
      <span>Цена: {{product.price}}</span>
      </div>
    <div v-show="showMore">{{product.description}}</div>
    <div class="product-footer">
      <a href="#" @click="showMore = !showMore">{{!showMore ? 'Развернуть' : 'Свернуть'}}</a>
      <a href="#" @click="product.isFavorite ? removeFromFavorites(product.id) : addToFavorites(product.id)">
        {{product.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}}
      </a>
    </div>
  </div>
</template>

<style scoped>
  .title {
    font-weight: bold;
  }
  .product {
    border: 1px solid;
    border-radius: 20px;
    padding: 10px 20px;
    margin-bottom: 20px;
    min-width: 400px;
  }
  .product-header {
    display: flex;
    justify-content: space-between;
  }
  .product-footer {
    display: flex;
    justify-content: space-between;
  }
</style>
