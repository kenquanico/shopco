<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ChevronRight, SlidersHorizontal, X } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'

const route = useRoute()
const mobileFilters = ref(false)
const maxPrice = ref(250)
const selectedSize = ref('')
const page = ref(1)
watch(() => route.params.slug, () => page.value = 1)
const title = computed(() => String(route.params.slug || 'casual').replace(/^\w/, (c) => c.toUpperCase()))
const filtered = computed(() => products.filter((p) => p.price <= maxPrice.value && (route.params.slug === 'sale' ? p.oldPrice : true)))
</script>

<template>
  <div class="page-shell fade-up">
    <div class="flex items-center gap-2 py-6 text-sm text-black/60"><RouterLink to="/">Home</RouterLink><ChevronRight :size="14" /><span>{{ title }}</span></div>
    <div class="flex gap-5">
      <aside :class="['fixed inset-y-0 left-0 z-50 w-[90%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl lg:static lg:block lg:w-72 lg:shrink-0 lg:rounded-[20px] lg:border lg:border-black/10 lg:p-6 lg:shadow-none', mobileFilters ? 'block' : 'hidden lg:block']">
        <div class="flex items-center justify-between border-b border-black/10 pb-5"><h2 class="text-xl font-bold">Filters</h2><button class="lg:hidden" @click="mobileFilters=false"><X /></button><SlidersHorizontal class="hidden text-black/40 lg:block" :size="20" /></div>
        <div class="border-b border-black/10 py-5 text-black/60">
          <p v-for="cat in ['T-shirts','Shorts','Shirts','Hoodie','Jeans']" :key="cat" class="mb-4 flex justify-between">{{ cat }}<ChevronRight :size="16" /></p>
        </div>
        <div class="border-b border-black/10 py-5"><h3 class="mb-5 text-xl font-bold">Price</h3><input v-model="maxPrice" type="range" min="50" max="300" class="w-full accent-black" /><div class="flex justify-between text-sm"><span>$50</span><span>${{ maxPrice }}</span></div></div>
        <div class="border-b border-black/10 py-5"><h3 class="mb-5 text-xl font-bold">Colors</h3><div class="grid grid-cols-5 gap-3"><button v-for="color in ['#00c12b','#f50606','#f5dd06','#f57906','#06caf5','#063af5','#7d06f5','#f506a4','#fff','#000']" :key="color" class="aspect-square rounded-full border border-black/15" :style="{background:color}"></button></div></div>
        <div class="py-5"><h3 class="mb-5 text-xl font-bold">Size</h3><div class="flex flex-wrap gap-2"><button v-for="size in ['Small','Medium','Large','X-Large']" :key="size" :class="['rounded-full px-5 py-2 text-sm', selectedSize === size ? 'bg-black text-white' : 'bg-[#f0f0f0] text-black/60']" @click="selectedSize=size">{{ size }}</button></div></div>
        <button class="w-full rounded-full bg-black py-3.5 text-sm text-white" @click="mobileFilters=false">Apply Filter</button>
      </aside>

      <section class="min-w-0 flex-1">
        <div class="mb-6 flex items-end justify-between">
          <div><h1 class="text-3xl font-bold">{{ title }}</h1><p class="mt-1 text-sm text-black/60">Showing 1–{{ filtered.length }} of {{ filtered.length }} products</p></div>
          <button class="rounded-full bg-[#f0f0f0] p-3 lg:hidden" aria-label="Filters" @click="mobileFilters=true"><SlidersHorizontal :size="20" /></button>
          <label class="hidden text-sm md:block">Sort by: <select class="font-medium outline-none"><option>Most Popular</option><option>Price: Low to High</option><option>Newest</option></select></label>
        </div>
        <div class="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-5">
          <ProductCard v-for="product in filtered" :key="product.id" :product="product" />
        </div>
        <div class="my-12 flex items-center justify-between border-t border-black/10 pt-5 text-sm"><button class="rounded-lg border border-black/10 px-4 py-2">← Previous</button><div class="hidden gap-1 sm:flex"><button v-for="n in [1,2,3,'…',8,9,10]" :key="n" :class="['h-9 w-9 rounded-lg', n === 1 ? 'bg-black/5 font-medium' : 'text-black/50']">{{ n }}</button></div><span class="text-black/50 sm:hidden">Page 1 of 10</span><button class="rounded-lg border border-black/10 px-4 py-2">Next →</button></div>
      </section>
    </div>
  </div>
</template>
