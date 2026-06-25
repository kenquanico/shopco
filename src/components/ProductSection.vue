<script setup lang="ts">
import type { Product } from '@/data/products'
import ProductCard from './ProductCard.vue'

defineProps<{ title: string; items: Product[]; anchor?: string }>()
</script>

<template>
  <section :id="anchor" class="page-shell py-16 md:py-20">
    <h2 class="display-font mb-10 text-center text-[32px] uppercase md:text-5xl">{{ title }}</h2>
    <div class="no-scrollbar flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 md:grid-cols-4 md:gap-5">
      <ProductCard v-for="product in items" :key="product.id" :product="product" class="w-[70vw] shrink-0 sm:w-auto" />
    </div>
    <RouterLink to="/category/casual" class="mx-auto mt-9 block w-full max-w-56 rounded-full border border-black/10 py-3.5 text-center text-sm font-medium hover:bg-black hover:text-white">View All</RouterLink>
  </section>
</template>
