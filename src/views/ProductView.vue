<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChevronRight, Minus, Plus, BadgeCheck } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { getProduct, products } from '@/data/products'
import { cart } from '@/stores/cart'
import RatingStars from '@/components/RatingStars.vue'
import ProductSection from '@/components/ProductSection.vue'

const route = useRoute()
const product = computed(() => getProduct(String(route.params.id)))
const size = ref('Large')
const color = ref('')
const quantity = ref(1)
const added = ref(false)
const addToCart = () => {
  cart.add(product.value.id, size.value, color.value || product.value.colors[0], quantity.value)
  added.value = true
  window.setTimeout(() => added.value = false, 1800)
}
</script>

<template>
  <div class="fade-up">
    <div class="page-shell flex items-center gap-2 py-6 text-sm text-black/60"><RouterLink to="/">Home</RouterLink><ChevronRight :size="14" /><RouterLink to="/category/casual">Shop</RouterLink><ChevronRight :size="14" /><span>{{ product.name }}</span></div>
    <section class="page-shell grid min-w-0 gap-8 lg:grid-cols-2">
      <div class="grid min-w-0 gap-3 sm:grid-cols-[120px_minmax(0,1fr)]">
        <div class="order-2 flex min-w-0 gap-3 sm:order-1 sm:flex-col">
          <button v-for="n in 3" :key="n" :class="['aspect-square min-w-0 flex-1 overflow-hidden rounded-[16px] bg-[#f0eeed] sm:w-full sm:flex-none', n===1 ? 'ring-2 ring-black' : '']"><img :src="product.image" :alt="`${product.name} view ${n}`" class="h-full w-full object-cover" :style="{objectPosition: n===2 ? 'center' : n===3 ? 'bottom' : 'top'}" /></button>
        </div>
        <div class="order-1 aspect-square overflow-hidden rounded-[20px] bg-[#f0eeed] sm:order-2"><img :src="product.image" :alt="product.name" class="h-full w-full object-cover" /></div>
      </div>
      <div class="flex min-w-0 flex-col justify-center">
        <h1 class="display-font text-4xl uppercase md:text-5xl">{{ product.name }}</h1>
        <RatingStars class="mt-4" :rating="product.rating" />
        <div class="mt-4 flex items-center gap-3"><span class="text-3xl font-bold">${{ product.price }}</span><span v-if="product.oldPrice" class="text-3xl font-bold text-black/30 line-through">${{ product.oldPrice }}</span></div>
        <p class="border-b border-black/10 py-5 text-sm leading-6 text-black/60 md:text-base">{{ product.description }}</p>
        <div class="border-b border-black/10 py-5"><p class="mb-4 text-black/60">Select Colors</p><div class="flex gap-3"><button v-for="item in product.colors" :key="item" class="grid h-10 w-10 place-items-center rounded-full text-white" :style="{background:item}" @click="color=item"><span v-if="color === item || (!color && item === product.colors[0])">✓</span></button></div></div>
        <div class="border-b border-black/10 py-5"><p class="mb-4 text-black/60">Choose Size</p><div class="flex flex-wrap gap-3"><button v-for="item in ['Small','Medium','Large','X-Large']" :key="item" :class="['rounded-full px-5 py-3 text-sm', size===item ? 'bg-black text-white' : 'bg-[#f0f0f0] text-black/60']" @click="size=item">{{ item }}</button></div></div>
        <div class="mt-5 flex gap-3">
          <div class="flex items-center gap-4 rounded-full bg-[#f0f0f0] px-4"><button @click="quantity=Math.max(1,quantity-1)"><Minus :size="18" /></button><span>{{ quantity }}</span><button @click="quantity++"><Plus :size="18" /></button></div>
          <button class="flex-1 rounded-full bg-black py-4 text-sm font-medium text-white" @click="addToCart">{{ added ? 'Added to Cart ✓' : 'Add to Cart' }}</button>
        </div>
      </div>
    </section>

    <section class="page-shell py-16">
      <div class="grid grid-cols-3 border-b border-black/10 text-center text-sm text-black/60 md:text-lg"><button class="py-5">Product Details</button><button class="border-b-2 border-black py-5 font-medium text-black">Rating & Reviews</button><button class="py-5">FAQs</button></div>
      <div class="mb-8 mt-8 flex items-center justify-between"><h2 class="text-xl font-bold">All Reviews <span class="text-sm font-normal text-black/50">(451)</span></h2><button class="rounded-full bg-black px-5 py-3 text-sm text-white">Write a Review</button></div>
      <div class="grid gap-5 md:grid-cols-2">
        <article v-for="review in [['Sarah M.','I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.'],['Alex K.','The shirt exceeded my expectations. The colors are vibrant and the print quality is top-notch.'],['James L.','A great fit and very comfortable. It has quickly become one of my favorite pieces.'],['Emily R.','Exactly as pictured. The quality is wonderful and it arrived quickly.']]" :key="review[0]" class="rounded-[20px] border border-black/10 p-6">
          <div class="mb-3 text-[#FFC633]">★★★★★</div><h3 class="mb-3 flex items-center gap-1 font-bold">{{ review[0] }} <BadgeCheck :size="17" fill="#01ab31" color="white" /></h3><p class="text-sm leading-6 text-black/60">“{{ review[1] }}”</p><p class="mt-5 text-sm font-medium text-black/50">Posted on June 14, 2026</p>
        </article>
      </div>
    </section>
    <ProductSection title="You Might Also Like" :items="products.slice(4,8)" />
  </div>
</template>
