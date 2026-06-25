<script setup lang="ts">
import type { Product } from '@/data/products'
import RatingStars from './RatingStars.vue'

defineProps<{ product: Product }>()
</script>

<template>
  <RouterLink :to="`/product/${product.id}`" class="group block min-w-0">
    <div class="mb-4 aspect-square overflow-hidden rounded-[20px] bg-[#f0eeed]">
      <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
    </div>
    <h3 class="mb-2 truncate text-base font-bold capitalize sm:text-lg">{{ product.name }}</h3>
    <RatingStars :rating="product.rating" />
    <div class="mt-2 flex items-center gap-2">
      <span class="text-xl font-bold sm:text-2xl">${{ product.price }}</span>
      <span v-if="product.oldPrice" class="text-xl font-bold text-black/35 line-through sm:text-2xl">${{ product.oldPrice }}</span>
      <span v-if="product.oldPrice" class="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-500">-{{ Math.round((1 - product.price / product.oldPrice) * 100) }}%</span>
    </div>
  </RouterLink>
</template>
