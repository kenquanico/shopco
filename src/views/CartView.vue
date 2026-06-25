<script setup lang="ts">
import { ChevronRight, Minus, Plus, Trash2, Tag } from 'lucide-vue-next'
import { cart } from '@/stores/cart'
import { getProduct } from '@/data/products'
</script>

<template>
  <div class="page-shell fade-up pb-16">
    <div class="flex items-center gap-2 py-6 text-sm text-black/60"><RouterLink to="/">Home</RouterLink><ChevronRight :size="14" /><span>Cart</span></div>
    <h1 class="display-font mb-8 text-4xl md:text-5xl">YOUR CART</h1>
    <div v-if="cart.items.length" class="grid gap-5 lg:grid-cols-[1.4fr_.8fr]">
      <section class="rounded-[20px] border border-black/10 p-4 md:p-6">
        <article v-for="(item,index) in cart.items" :key="`${item.productId}-${item.size}-${item.color}`" class="flex gap-4 border-b border-black/10 py-5 first:pt-0 last:border-0 last:pb-0">
          <img :src="getProduct(item.productId).image" :alt="getProduct(item.productId).name" class="h-28 w-28 rounded-xl object-cover sm:h-32 sm:w-32" />
          <div class="flex min-w-0 flex-1 flex-col">
            <div class="flex justify-between gap-2"><div><h2 class="truncate font-bold sm:text-lg">{{ getProduct(item.productId).name }}</h2><p class="mt-1 text-xs">Size: <span class="text-black/60">{{ item.size }}</span></p><p class="text-xs">Color: <span class="text-black/60">Selected</span></p></div><button class="self-start text-red-500" @click="cart.remove(index)"><Trash2 :size="20" /></button></div>
            <div class="mt-auto flex items-center justify-between"><strong class="text-xl sm:text-2xl">${{ getProduct(item.productId).price }}</strong><div class="flex items-center gap-3 rounded-full bg-[#f0f0f0] px-3 py-2"><button @click="cart.update(index,item.quantity-1)"><Minus :size="15" /></button><span class="text-sm">{{ item.quantity }}</span><button @click="cart.update(index,item.quantity+1)"><Plus :size="15" /></button></div></div>
          </div>
        </article>
      </section>
      <aside class="h-fit rounded-[20px] border border-black/10 p-5 md:p-6">
        <h2 class="mb-6 text-xl font-bold md:text-2xl">Order Summary</h2>
        <div class="space-y-4 text-black/60"><p class="flex justify-between">Subtotal <strong class="text-black">${{ cart.subtotal.value }}</strong></p><p class="flex justify-between">Discount (-20%) <strong class="text-red-500">-${{ Math.round(cart.subtotal.value*.2) }}</strong></p><p class="flex justify-between">Delivery Fee <strong class="text-black">$15</strong></p></div>
        <p class="my-5 flex justify-between border-t border-black/10 pt-5 text-xl">Total <strong>${{ Math.round(cart.subtotal.value*.8+15) }}</strong></p>
        <div class="mb-5 flex gap-3"><label class="flex flex-1 items-center gap-2 rounded-full bg-[#f0f0f0] px-4 text-black/40"><Tag :size="18" /><input class="min-w-0 bg-transparent py-3 outline-none" placeholder="Add promo code" /></label><button class="rounded-full bg-black px-6 text-white">Apply</button></div>
        <RouterLink to="/checkout" class="block rounded-full bg-black py-4 text-center text-sm font-medium text-white">Go to Checkout →</RouterLink>
      </aside>
    </div>
    <div v-else class="rounded-[20px] bg-[#f0f0f0] py-20 text-center"><h2 class="text-2xl font-bold">Your cart is empty</h2><RouterLink to="/category/casual" class="mt-6 inline-block rounded-full bg-black px-8 py-4 text-white">Start Shopping</RouterLink></div>
  </div>
</template>
