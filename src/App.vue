<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Search, ShoppingCart, UserRound, X } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { cart } from '@/stores/cart'
import logo from '@/assets/shopco.svg'

const router = useRouter()
const mobileOpen = ref(false)
const search = ref('')
const footerGroups = [
  { title: 'Company', links: [{ label: 'About', slug: 'about' }, { label: 'Features', slug: 'features' }, { label: 'Works', slug: 'works' }, { label: 'Career', slug: 'career' }] },
  { title: 'Help', links: [{ label: 'Customer Support', slug: 'support' }, { label: 'Delivery Details', slug: 'delivery' }, { label: 'Terms & Conditions', slug: 'terms' }, { label: 'Privacy Policy', slug: 'privacy' }] },
  { title: 'FAQ', links: [{ label: 'Account', slug: 'account' }, { label: 'Manage Deliveries', slug: 'deliveries' }, { label: 'Orders', slug: 'orders' }, { label: 'Payments', slug: 'payments' }] },
  { title: 'Resources', links: [{ label: 'Free eBooks', slug: 'ebooks' }, { label: 'Development Tutorial', slug: 'tutorial' }, { label: 'How to — Blog', slug: 'blog' }, { label: 'YouTube Playlist', slug: 'youtube' }] },
]
const submitSearch = () => {
  if (!search.value.trim()) return
  router.push({ path: '/search', query: { q: search.value } })
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="bg-black py-2.5 text-center text-xs text-white sm:text-sm">
      Sign up and get 20% off your first order.
      <button class="ml-1 font-medium underline underline-offset-2">Sign Up Now</button>
    </div>

    <header class="border-b border-black/10 bg-white">
      <div class="page-shell flex h-[72px] items-center gap-4 lg:h-24 lg:gap-10">
        <button class="lg:hidden" aria-label="Open menu" @click="mobileOpen = true"><Menu :size="23" /></button>
        <RouterLink to="/" aria-label="SHOP.CO home"><img :src="logo" alt="SHOP.CO" class="h-6 w-auto lg:h-7" /></RouterLink>
        <nav class="hidden items-center gap-7 text-sm lg:flex">
          <RouterLink to="/category/casual" class="hover:opacity-55">Shop⌄</RouterLink>
          <RouterLink to="/category/sale" class="hover:opacity-55">On Sale</RouterLink>
          <a href="/#new-arrivals" class="hover:opacity-55">New Arrivals</a>
          <a href="/#brands" class="hover:opacity-55">Brands</a>
        </nav>
        <form class="ml-auto hidden flex-1 items-center gap-3 rounded-full bg-[#f0f0f0] px-5 py-3 text-black/40 md:flex lg:max-w-[540px]" @submit.prevent="submitSearch">
          <Search :size="21" />
          <input v-model="search" class="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/40" placeholder="Search for products..." />
        </form>
        <div class="ml-auto flex items-center gap-4 md:ml-0">
          <button class="md:hidden" aria-label="Search" @click="router.push('/search')"><Search :size="23" /></button>
          <RouterLink to="/cart" class="relative" aria-label="Cart">
            <ShoppingCart :size="23" />
            <span v-if="cart.count.value" class="absolute -right-2.5 -top-2.5 grid h-4 min-w-4 place-items-center rounded-full bg-black px-1 text-[9px] text-white">{{ cart.count.value }}</span>
          </RouterLink>
          <button aria-label="Account"><UserRound :size="23" /></button>
        </div>
      </div>
    </header>

    <div v-if="mobileOpen" class="fixed inset-0 z-50 bg-black/35" @click.self="mobileOpen = false">
      <aside class="h-full w-[82%] max-w-sm bg-white p-6 shadow-2xl">
        <div class="mb-10 flex items-center justify-between">
          <img :src="logo" alt="SHOP.CO" class="h-6" />
          <button @click="mobileOpen = false"><X /></button>
        </div>
        <nav class="flex flex-col gap-6 text-lg" @click="mobileOpen = false">
          <RouterLink to="/">Home</RouterLink><RouterLink to="/category/casual">Shop</RouterLink>
          <RouterLink to="/category/sale">On Sale</RouterLink><a href="/#new-arrivals">New Arrivals</a>
          <a href="/#brands">Brands</a><RouterLink to="/cart">Cart</RouterLink>
        </nav>
      </aside>
    </div>

    <main><RouterView /></main>

    <footer class="mt-20 bg-[#f0f0f0] pb-8 pt-28">
      <div class="page-shell relative">
        <section class="absolute -top-48 left-0 right-0 flex flex-col gap-7 rounded-[20px] bg-black px-6 py-8 text-white md:-top-44 md:flex-row md:items-center md:justify-between md:px-14">
          <h2 class="display-font max-w-xl text-3xl md:text-[40px]">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
          <div class="w-full max-w-sm space-y-3">
            <label class="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-black/40"><span>✉</span><input class="w-full outline-none" placeholder="Enter your email address" /></label>
            <button class="w-full rounded-full bg-white py-3 font-medium text-black">Subscribe to Newsletter</button>
          </div>
        </section>
        <div class="grid gap-10 border-b border-black/10 pb-12 pt-8 sm:grid-cols-2 lg:grid-cols-5">
          <div class="lg:pr-8"><img :src="logo" alt="SHOP.CO" class="mb-6 h-7" /><p class="text-sm leading-6 text-black/60">We have clothes that suit your style and which you’re proud to wear. From women to men.</p></div>
          <div v-for="group in footerGroups" :key="group.title">
            <h3 class="mb-5 font-medium uppercase tracking-[.16em]">{{ group.title }}</h3>
            <RouterLink v-for="link in group.links" :key="link.slug" class="mb-3 block text-sm text-black/60 transition hover:text-black" :to="`/info/${link.slug}`">{{ link.label }}</RouterLink>
          </div>
        </div>
        <div class="flex flex-col gap-4 pt-5 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between"><p>Shop.co © 2000–2026, All Rights Reserved</p><p class="text-xl">▣ VISA · ◉ MasterCard · PayPal · Pay</p></div>
      </div>
    </footer>
  </div>
</template>
