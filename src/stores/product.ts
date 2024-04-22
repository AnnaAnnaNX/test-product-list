import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const productsList = [
  {
    id: 1,
    name: 'Post 1',
    description: 'Description 1',
    price: 100
  },
  {
    id: 2,
    name: 'Post 2',
    description: 'Description 2',
    price: 200
  },
  {
    id: 3,
    name: 'Post 3',
    description: 'Description 3',
    price: 300
  }
]

export const useProductStore = defineStore('post', () => {
  const products = ref(productsList)
  const favorites = ref([])
  const getPosts = computed(() => products.value)
  const getFavorites = computed(() => favorites.value)
  function removeFromFavorites(id: number) {
    favorites.value = favorites.value.filter(el => (el === id))
  }
  function addToFavorites(id: number) {
    favorites.value.push(id)
  }

  return { products, getFavorites, removeFromFavorites, addToFavorites }
})
