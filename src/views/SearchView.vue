<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Search } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'

const route = useRoute(), router = useRouter()
const query = ref(String(route.query.q || ''))
watch(() => route.query.q, (q) => query.value = String(q || ''))
const results = computed(() => products.filter((p) => p.name.toLowerCase().includes(query.value.toLowerCase())))
const submit = () => router.replace({ path:'/search', query:{ q:query.value } })
</script>

<template>
  <div class="page-shell fade-up py-10">
    <h1 class="display-font mb-8 text-4xl md:text-5xl">SEARCH</h1>
    <form class="mb-10 flex items-center gap-3 rounded-full bg-[#f0f0f0] px-5" @submit.prevent="submit"><Search class="text-black/40" /><input v-model="query" autofocus class="w-full bg-transparent py-4 outline-none" placeholder="Search for products..." /><button class="rounded-full bg-black px-6 py-2 text-sm text-white">Search</button></form>
    <p class="mb-6 text-black/60">{{ results.length }} results <span v-if="query">for “{{ query }}”</span></p>
    <div class="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-5"><ProductCard v-for="product in results" :key="product.id" :product="product" /></div>
  </div>
</template>
