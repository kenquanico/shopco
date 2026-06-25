<script setup lang="ts">
import { ref } from 'vue'
import { cart } from '@/stores/cart'
const placed = ref(false)
</script>

<template>
  <div class="page-shell fade-up py-10">
    <div v-if="placed" class="mx-auto max-w-2xl rounded-[24px] bg-[#f0f0f0] px-6 py-20 text-center"><div class="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-black text-2xl text-white">✓</div><h1 class="display-font text-4xl">ORDER CONFIRMED</h1><p class="mt-4 text-black/60">Thanks for shopping with us. Your order is being prepared.</p><RouterLink to="/" class="mt-8 inline-block rounded-full bg-black px-8 py-4 text-white">Back to Home</RouterLink></div>
    <template v-else>
      <h1 class="display-font mb-8 text-4xl md:text-5xl">CHECKOUT</h1>
      <form class="grid gap-6 lg:grid-cols-[1.2fr_.8fr]" @submit.prevent="placed=true; cart.clear()">
        <section class="space-y-6">
          <div class="rounded-[20px] border border-black/10 p-6"><h2 class="mb-5 text-xl font-bold">Contact Information</h2><div class="grid gap-4 sm:grid-cols-2"><input required class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none" placeholder="First name" /><input required class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none" placeholder="Last name" /><input required type="email" class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none sm:col-span-2" placeholder="Email address" /></div></div>
          <div class="rounded-[20px] border border-black/10 p-6"><h2 class="mb-5 text-xl font-bold">Shipping Address</h2><div class="grid gap-4 sm:grid-cols-2"><input required class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none sm:col-span-2" placeholder="Street address" /><input required class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none" placeholder="City" /><input required class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none" placeholder="Postal code" /></div></div>
          <div class="rounded-[20px] border border-black/10 p-6"><h2 class="mb-5 text-xl font-bold">Payment</h2><input required class="mb-4 w-full rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none" placeholder="Card number" /><div class="grid grid-cols-2 gap-4"><input required class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none" placeholder="MM / YY" /><input required class="rounded-xl bg-[#f0f0f0] px-4 py-3 outline-none" placeholder="CVC" /></div></div>
        </section>
        <aside class="h-fit rounded-[20px] bg-[#f0f0f0] p-6"><h2 class="mb-5 text-xl font-bold">Your Order</h2><p class="flex justify-between border-b border-black/10 py-4">Items <span>{{ cart.count.value }}</span></p><p class="flex justify-between border-b border-black/10 py-4">Shipping <span>$15</span></p><p class="flex justify-between py-5 text-xl font-bold">Total <span>${{ Math.round(cart.subtotal.value*.8+15) }}</span></p><button class="w-full rounded-full bg-black py-4 text-white">Place Order</button><p class="mt-4 text-center text-xs text-black/50">This is a demo checkout. No payment is processed.</p></aside>
      </form>
    </template>
  </div>
</template>
