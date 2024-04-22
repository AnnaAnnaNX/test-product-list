import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const productsList:  {
  id: Number,
  name: String,
  description: String,
  price: Number,
  isFavorite?: Boolean
}[] = [
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
  const getFavorites = computed(() => products.value.filter(el => el.isFavorite))
  function removeFromFavorites(id: number) {
    products.value.forEach(el => {
      if (el.id === id) {
        el.isFavorite = false
      }
    })
  }
  function addToFavorites(id: number) {
    products.value.forEach(el => {
      if (el.id === id) {
        el.isFavorite = true
      }
    })
  }

  return { products, getFavorites, removeFromFavorites, addToFavorites }
})
