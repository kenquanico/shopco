<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  ArrowRight, BadgeCheck, BookOpen, Box, BriefcaseBusiness, Check, ChevronDown,
  ChevronRight, CircleDollarSign, Clock3, Code2, CreditCard, Download, FileText,
  Globe2, Headphones, Heart, LockKeyhole, Mail, MapPin, MessageCircle, PackageCheck,
  PackageOpen, Play, ReceiptText, RefreshCcw, Search, ShieldCheck, ShoppingBag,
  Smartphone, Sparkles, Star, Truck, UserRound, Video, WalletCards, Zap,
} from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { footerPages } from '@/data/footerPages'

const route = useRoute()
const slug = computed(() => String(route.params.slug || 'about'))
const page = computed(() => footerPages[slug.value] ?? footerPages.about)
const expandedFaq = ref(0)
const messageSent = ref(false)
const tracking = ref('')
const trackingChecked = ref(false)
const privacySaved = ref(false)
const preferences = ref([true, true, false])
const activeTutorial = ref(0)

const iconMap = [Sparkles, ShieldCheck, Heart, Zap]
const togglePreference = (index: number) => {
  preferences.value[index] = !preferences.value[index]
  privacySaved.value = false
}
</script>

<template>
  <div class="fade-up">
    <div class="page-shell flex items-center gap-2 py-6 text-sm text-black/60">
      <RouterLink to="/">Home</RouterLink><ChevronRight :size="14" /><span>{{ page.title }}</span>
    </div>

    <!-- ABOUT: editorial story -->
    <template v-if="slug === 'about'">
      <section class="page-shell grid overflow-hidden rounded-[32px] bg-black text-white lg:grid-cols-2">
        <div class="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p class="mb-5 text-xs font-bold uppercase tracking-[.24em] text-white/45">{{ page.eyebrow }}</p>
          <h1 class="display-font text-5xl uppercase sm:text-7xl">STYLE IS<br />PERSONAL.</h1>
          <p class="mt-7 max-w-lg leading-7 text-white/60">{{ page.intro }}</p>
          <div class="mt-10 flex gap-10"><div><b class="block text-3xl">30K+</b><span class="text-xs text-white/45">customers</span></div><div><b class="block text-3xl">200+</b><span class="text-xs text-white/45">brands</span></div></div>
        </div>
        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85" alt="SHOP.CO fashion community" class="min-h-[420px] h-full w-full object-cover grayscale" />
      </section>
      <section class="page-shell grid gap-5 py-16 md:grid-cols-3">
        <article v-for="(section,index) in page.sections" :key="section.title" class="border-t-2 border-black pt-6">
          <span class="text-xs font-bold text-black/30">OUR STORY / 0{{ index+1 }}</span><h2 class="mt-8 text-2xl font-bold">{{ section.title }}</h2><p class="mt-4 leading-7 text-black/60">{{ section.body }}</p>
        </article>
      </section>
    </template>

    <!-- FEATURES: bento product showcase -->
    <template v-else-if="slug === 'features'">
      <section class="page-shell text-center py-10 md:py-16"><p class="text-xs font-bold uppercase tracking-[.22em] text-black/40">{{ page.eyebrow }}</p><h1 class="display-font mx-auto mt-5 max-w-4xl text-5xl uppercase sm:text-7xl">SHOP SMARTER.<br />DRESS BETTER.</h1><p class="mx-auto mt-6 max-w-xl text-black/60">{{ page.intro }}</p></section>
      <section class="page-shell grid gap-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
        <article class="rounded-[28px] bg-[#f0f0f0] p-8 lg:col-span-2"><Search :size="38" /><h2 class="mt-20 text-3xl font-bold">Find it faster</h2><div class="mt-5 flex rounded-full bg-white p-2"><span class="flex-1 px-4 py-3 text-black/35">Try “black oversized shirt”</span><span class="grid h-12 w-12 place-items-center rounded-full bg-black text-white"><ArrowRight /></span></div></article>
        <article class="rounded-[28px] bg-[#d6ff38] p-8"><Heart :size="38" /><h2 class="mt-20 text-3xl font-bold">Keep favorites close</h2><p class="mt-4 text-black/60">{{ page.sections[1].body }}</p></article>
        <article class="rounded-[28px] bg-black p-8 text-white"><ShieldCheck :size="38" /><h2 class="mt-20 text-3xl font-bold">Buy confidently</h2><p class="mt-4 text-white/60">Verified reviews, clear sizing, and honest product details.</p></article>
        <article class="relative min-h-72 overflow-hidden rounded-[28px] lg:col-span-2"><img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85" alt="Curated clothing rail" class="absolute inset-0 h-full w-full object-cover" /><div class="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent"></div><div class="relative max-w-md p-8 text-white"><Smartphone :size="38" /><h2 class="mt-20 text-3xl font-bold">One seamless cart</h2><p class="mt-4 text-white/70">{{ page.sections[2].body }}</p></div></article>
      </section>
    </template>

    <!-- WORKS: vertical numbered journey -->
    <template v-else-if="slug === 'works'">
      <section class="page-shell rounded-[32px] bg-[#f0f0f0] px-7 py-12 md:px-14 md:py-16"><p class="text-xs font-bold uppercase tracking-[.22em] text-black/40">{{ page.eyebrow }}</p><h1 class="display-font mt-5 max-w-3xl text-5xl uppercase sm:text-7xl">{{ page.title }}</h1></section>
      <section class="page-shell py-16">
        <article v-for="(section,index) in page.sections" :key="section.title" class="grid border-t border-black/15 py-10 md:grid-cols-[120px_1fr_1fr] md:items-center">
          <span class="display-font text-6xl text-black/15">0{{ index+1 }}</span><h2 class="mt-5 text-3xl font-bold md:mt-0">{{ section.title.replace(/^\d+\.\s*/, '') }}</h2><p class="mt-4 leading-7 text-black/60 md:mt-0">{{ section.body }}</p>
        </article>
        <div class="rounded-[24px] bg-black p-7 text-white md:flex md:items-center md:justify-between"><p class="text-xl font-bold">Ready to find your next favorite?</p><RouterLink to="/category/casual" class="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black md:mt-0">Start shopping <ArrowRight :size="17" /></RouterLink></div>
      </section>
    </template>

    <!-- CAREERS: recruitment board -->
    <template v-else-if="slug === 'career'">
      <section class="page-shell grid gap-8 rounded-[32px] bg-[#d6ff38] p-8 md:p-14 lg:grid-cols-[1fr_.8fr]"><div><BriefcaseBusiness :size="40" /><h1 class="display-font mt-16 text-5xl uppercase sm:text-7xl">DO YOUR BEST WORK.</h1><p class="mt-6 max-w-xl text-black/65">{{ page.intro }}</p></div><div class="grid grid-cols-2 gap-3 self-end"><div class="rounded-2xl bg-black p-5 text-white"><b class="text-3xl">12</b><p class="text-xs text-white/50">teams worldwide</p></div><div class="rounded-2xl bg-white p-5"><b class="text-3xl">4.9</b><p class="text-xs text-black/50">team rating</p></div></div></section>
      <section class="page-shell py-16"><div class="mb-8 flex items-end justify-between"><div><p class="text-xs font-bold uppercase tracking-widest text-black/40">Open positions</p><h2 class="mt-2 text-3xl font-bold">Find your place</h2></div><span class="rounded-full bg-[#f0f0f0] px-4 py-2 text-sm">3 roles</span></div>
        <RouterLink v-for="job in [['Senior Product Designer','Design · New York'],['Frontend Engineer','Technology · Remote'],['Brand Partnerships Lead','Merchandising · London']]" :key="job[0]" to="/info/support" class="group flex items-center justify-between border-t border-black/15 py-7"><div><h3 class="text-xl font-bold">{{ job[0] }}</h3><p class="mt-1 text-sm text-black/50">{{ job[1] }}</p></div><span class="grid h-12 w-12 place-items-center rounded-full border border-black/15 transition group-hover:bg-black group-hover:text-white"><ArrowRight /></span></RouterLink>
      </section>
    </template>

    <!-- SUPPORT: contact center -->
    <template v-else-if="slug === 'support'">
      <section class="page-shell grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div class="rounded-[32px] bg-black p-8 text-white md:p-12"><Headphones :size="42" /><h1 class="display-font mt-20 text-5xl uppercase sm:text-6xl">HOW CAN WE HELP?</h1><p class="mt-5 text-white/60">{{ page.intro }}</p><div class="mt-10 space-y-3 text-sm"><p class="flex items-center gap-3"><Clock3 :size="17" /> Mon–Sat, 9AM–6PM</p><p class="flex items-center gap-3"><Mail :size="17" /> support@shop.co</p></div></div>
        <form class="rounded-[32px] border border-black/10 p-7 md:p-10" @submit.prevent="messageSent=true"><p class="text-xs font-bold uppercase tracking-widest text-black/40">Send a message</p><h2 class="mt-3 text-3xl font-bold">{{ messageSent ? 'Message received.' : 'Tell us what happened.' }}</h2><template v-if="!messageSent"><div class="mt-8 grid gap-4 sm:grid-cols-2"><input required class="rounded-xl bg-[#f0f0f0] px-4 py-4 outline-none" placeholder="Your name" /><input required type="email" class="rounded-xl bg-[#f0f0f0] px-4 py-4 outline-none" placeholder="Email address" /><select class="rounded-xl bg-[#f0f0f0] px-4 py-4 outline-none sm:col-span-2"><option>Order question</option><option>Return or exchange</option><option>Product help</option></select><textarea required class="min-h-32 rounded-xl bg-[#f0f0f0] px-4 py-4 outline-none sm:col-span-2" placeholder="How can we help?"></textarea></div><button class="mt-4 w-full rounded-full bg-black py-4 text-white">Send message</button></template><p v-else class="mt-5 text-black/60">Our team will reply within one business day. A confirmation has been prepared for your inbox.</p></form>
      </section>
      <section class="page-shell grid gap-4 py-14 sm:grid-cols-3"><article v-for="(item,index) in [[MessageCircle,'Live chat','Fast help while you shop'],[RefreshCcw,'Returns','Start a return or exchange'],[PackageOpen,'Order help','Changes and cancellations']]" :key="item[1] as string" class="rounded-[20px] bg-[#f0f0f0] p-6"><component :is="item[0]" /><h3 class="mt-8 text-xl font-bold">{{ item[1] }}</h3><p class="mt-2 text-sm text-black/50">{{ item[2] }}</p></article></section>
    </template>

    <!-- DELIVERY: shipping dashboard -->
    <template v-else-if="slug === 'delivery'">
      <section class="page-shell rounded-[32px] bg-[#f0f0f0] p-8 md:p-14"><div class="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-end"><div class="min-w-0"><Truck :size="42" /><h1 class="display-font mt-12 text-5xl uppercase sm:text-7xl">DELIVERED,<br />YOUR WAY.</h1><p class="mt-6 text-black/60">{{ page.intro }}</p></div><form class="min-w-0 rounded-[24px] bg-white p-5 shadow-sm" @submit.prevent="trackingChecked=true"><label class="text-sm font-bold">Track a package</label><div class="mt-3 flex min-w-0 flex-col gap-2 sm:flex-row"><input v-model="tracking" required class="min-w-0 flex-1 rounded-full bg-[#f0f0f0] px-5 py-4 outline-none" placeholder="Enter tracking number" /><button class="rounded-full bg-black px-6 py-4 text-white">Track</button></div><p v-if="trackingChecked" class="mt-4 flex items-center gap-2 text-sm text-green-700"><PackageCheck :size="18" /> Tracking request ready for {{ tracking }}.</p></form></div></section>
      <section class="page-shell py-16"><div class="relative grid gap-6 md:grid-cols-3"><div class="absolute left-[16%] right-[16%] top-8 hidden border-t border-dashed border-black/20 md:block"></div><article v-for="(step,index) in page.sections" :key="step.title" class="relative text-center"><span class="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-black text-white"><component :is="[Box,Truck,MapPin][index]" /></span><h2 class="mt-6 text-xl font-bold">{{ step.title }}</h2><p class="mt-3 text-sm leading-6 text-black/55">{{ step.body }}</p></article></div></section>
    </template>

    <!-- TERMS: document layout -->
    <template v-else-if="slug === 'terms'">
      <section class="page-shell grid gap-10 lg:grid-cols-[280px_1fr]">
        <aside class="h-fit rounded-[24px] bg-black p-6 text-white lg:sticky lg:top-6"><FileText :size="34" /><h1 class="display-font mt-12 text-4xl uppercase">TERMS & CONDITIONS</h1><p class="mt-5 text-sm text-white/45">{{ page.eyebrow }}</p><nav class="mt-10 space-y-1"><a v-for="(section,index) in page.sections" :key="section.title" :href="`#term-${index}`" class="block rounded-xl px-3 py-3 text-sm text-white/60 hover:bg-white/10 hover:text-white">0{{ index+1 }} · {{ section.title }}</a></nav></aside>
        <div class="pb-20"><p class="mb-12 max-w-2xl text-xl leading-8 text-black/60">{{ page.intro }}</p><article v-for="(section,index) in page.sections" :id="`term-${index}`" :key="section.title" class="border-t border-black/15 py-10"><p class="text-xs font-bold uppercase tracking-widest text-black/35">Section 0{{ index+1 }}</p><h2 class="mt-3 text-3xl font-bold">{{ section.title }}</h2><p class="mt-5 max-w-3xl leading-8 text-black/60">{{ section.body }}</p></article></div>
      </section>
    </template>

    <!-- PRIVACY: control center -->
    <template v-else-if="slug === 'privacy'">
      <section class="page-shell grid gap-5 lg:grid-cols-[1fr_.8fr]"><div class="rounded-[32px] bg-[#1b2559] p-8 text-white md:p-14"><LockKeyhole :size="42" /><p class="mt-16 text-xs font-bold uppercase tracking-widest text-white/40">{{ page.eyebrow }}</p><h1 class="display-font mt-4 text-5xl uppercase sm:text-7xl">YOUR DATA.<br />YOUR CALL.</h1><p class="mt-6 max-w-lg text-white/60">{{ page.intro }}</p></div>
        <div class="rounded-[32px] bg-[#f0f0f0] p-7 md:p-10"><p class="text-xs font-bold uppercase tracking-widest text-black/40">Privacy controls</p><h2 class="mt-3 text-2xl font-bold">Choose what works for you</h2><div class="mt-7 space-y-3"><div v-for="(label,index) in ['Essential store data','Personalized shopping','Marketing insights']" :key="label" class="flex items-center justify-between rounded-2xl bg-white p-4"><div><b class="text-sm">{{ label }}</b><p class="text-xs text-black/45">{{ index===0 ? 'Required for the store to function' : 'You can change this anytime' }}</p></div><button :class="['relative h-7 w-12 rounded-full transition', preferences[index] ? 'bg-black' : 'bg-black/15']" :disabled="index===0" @click="togglePreference(index)"><span :class="['absolute top-1 h-5 w-5 rounded-full bg-white transition', preferences[index] ? 'left-6' : 'left-1']"></span></button></div></div><button class="mt-5 w-full rounded-full bg-black py-4 text-white" @click="privacySaved=true">{{ privacySaved ? 'Preferences saved ✓' : 'Save preferences' }}</button></div></section>
      <section class="page-shell grid gap-4 py-14 md:grid-cols-4"><article v-for="(section,index) in page.sections" :key="section.title" class="rounded-[20px] border border-black/10 p-6"><component :is="iconMap[index]" :size="25" /><h2 class="mt-12 font-bold">{{ section.title }}</h2><p class="mt-3 text-sm leading-6 text-black/55">{{ section.body }}</p></article></section>
    </template>

    <!-- ACCOUNT: member dashboard -->
    <template v-else-if="slug === 'account'">
      <section class="page-shell grid gap-5 lg:grid-cols-[320px_1fr]"><aside class="rounded-[28px] bg-black p-7 text-white"><div class="grid h-16 w-16 place-items-center rounded-full bg-white/10"><UserRound :size="30" /></div><h1 class="mt-8 text-3xl font-bold">Welcome back.</h1><p class="mt-2 text-sm text-white/45">Sign in to unlock your SHOP.CO space.</p><button class="mt-8 w-full rounded-full bg-white py-3.5 font-medium text-black">Sign in</button><p class="mt-4 text-center text-xs text-white/35">Demo membership experience</p></aside>
        <div class="grid gap-4 sm:grid-cols-2"><article v-for="item in [[ShoppingBag,'Orders','Track, return, or buy again'],[Heart,'Saved styles','Your personal shortlist'],[MapPin,'Addresses','Faster checkout next time'],[Star,'Member rewards','Offers picked for you']]" :key="item[1] as string" class="rounded-[24px] bg-[#f0f0f0] p-7"><component :is="item[0]" :size="30" /><h2 class="mt-16 text-2xl font-bold">{{ item[1] }}</h2><p class="mt-2 text-black/50">{{ item[2] }}</p><button class="mt-6 flex items-center gap-2 text-sm font-medium">Explore <ArrowRight :size="16" /></button></article></div></section>
      <section class="page-shell my-14 rounded-[24px] bg-[#d6ff38] p-8 md:flex md:items-center md:justify-between"><div><p class="text-xs font-bold uppercase tracking-widest">Member benefit</p><h2 class="mt-2 text-2xl font-bold">Get 20% off your first signed-in order.</h2></div><button class="mt-5 rounded-full bg-black px-7 py-3 text-white md:mt-0">Create free account</button></section>
    </template>

    <!-- MANAGE DELIVERIES: live tracking -->
    <template v-else-if="slug === 'deliveries'">
      <section class="page-shell"><div class="flex flex-col justify-between gap-6 pb-10 md:flex-row md:items-end"><div><p class="text-xs font-bold uppercase tracking-widest text-black/40">{{ page.eyebrow }}</p><h1 class="display-font mt-4 text-5xl uppercase sm:text-7xl">TRACK EVERY STEP.</h1></div><button class="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white"><RefreshCcw :size="17" /> Refresh status</button></div>
        <div class="rounded-[28px] border border-black/10 p-6 md:p-10"><div class="flex flex-col justify-between gap-5 sm:flex-row"><div><span class="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">IN TRANSIT</span><h2 class="mt-4 text-2xl font-bold">Order #SC-20418</h2><p class="mt-1 text-sm text-black/45">Expected Friday, June 27</p></div><PackageCheck :size="46" /></div><div class="mt-10 grid gap-7 md:grid-cols-4"><div v-for="(step,index) in ['Order placed','Packed','In transit','Delivered']" :key="step"><div :class="['mb-4 h-2 rounded-full', index<3 ? 'bg-black' : 'bg-black/10']"></div><p class="font-bold">{{ step }}</p><span class="text-xs text-black/40">{{ index<3 ? 'Completed' : 'Next step' }}</span></div></div><div class="mt-10 rounded-2xl bg-[#f0f0f0] p-5"><p class="flex items-center gap-2 font-bold"><MapPin :size="18" /> Latest update</p><p class="mt-2 text-sm text-black/55">Package departed the regional distribution center at 8:42 AM.</p></div></div></section>
      <section class="page-shell grid gap-4 py-14 md:grid-cols-3"><article v-for="section in page.sections" :key="section.title" class="rounded-[20px] bg-black p-6 text-white"><h2 class="font-bold">{{ section.title }}</h2><p class="mt-3 text-sm leading-6 text-white/50">{{ section.body }}</p></article></section>
    </template>

    <!-- ORDERS: order history -->
    <template v-else-if="slug === 'orders'">
      <section class="page-shell"><div class="rounded-[32px] bg-[#f0f0f0] px-7 py-12 md:px-12"><ReceiptText :size="38" /><h1 class="display-font mt-10 text-5xl uppercase sm:text-7xl">YOUR ORDERS,<br />ORGANIZED.</h1><p class="mt-5 max-w-xl text-black/55">{{ page.intro }}</p></div>
        <div class="py-12"><div class="mb-6 flex gap-2 overflow-x-auto"><button v-for="(tab,index) in ['All orders','Processing','Delivered','Returns']" :key="tab" :class="['whitespace-nowrap rounded-full px-5 py-2.5 text-sm', index===0 ? 'bg-black text-white' : 'bg-[#f0f0f0]']">{{ tab }}</button></div><article class="rounded-[24px] border border-black/10 p-5 md:p-7"><div class="flex flex-wrap justify-between gap-4 border-b border-black/10 pb-5"><div><b>Order #SC-20418</b><p class="text-xs text-black/45">Placed June 23, 2026</p></div><span class="h-fit rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">SHIPPED</span></div><div class="flex items-center gap-4 py-6"><img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80" alt="Order item" class="h-24 w-24 rounded-xl object-cover" /><div class="min-w-0"><h2 class="truncate font-bold">T-shirt with Tape Details</h2><p class="text-sm text-black/45">Large · Brown · Qty 1</p><b class="mt-3 block">$120</b></div></div><div class="flex flex-col gap-3 sm:flex-row"><RouterLink to="/info/deliveries" class="rounded-full bg-black px-6 py-3 text-center text-sm text-white">Track order</RouterLink><button class="rounded-full border border-black/15 px-6 py-3 text-sm">View details</button></div></article></div></section>
    </template>

    <!-- PAYMENTS: wallet UI -->
    <template v-else-if="slug === 'payments'">
      <section class="page-shell grid gap-5 lg:grid-cols-2"><div class="rounded-[32px] bg-black p-8 text-white md:p-12"><WalletCards :size="42" /><h1 class="display-font mt-20 text-5xl uppercase sm:text-7xl">PAY YOUR WAY.</h1><p class="mt-6 max-w-lg text-white/55">{{ page.intro }}</p></div><div class="relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#d6ff38] p-8"><div class="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[40px] border-black/5"></div><p class="text-xs font-bold uppercase tracking-widest">SHOP.CO WALLET</p><div class="mt-12 rounded-[24px] bg-black p-6 text-white shadow-2xl"><div class="flex justify-between"><CreditCard /><span class="font-bold">VISA</span></div><p class="mt-20 tracking-[.25em]">•••• •••• •••• 2048</p><div class="mt-5 flex justify-between text-xs text-white/50"><span>SHOP.CO MEMBER</span><span>09/29</span></div></div><p class="mt-7 flex items-center gap-2 text-sm font-medium"><ShieldCheck :size="18" /> Protected checkout on every order</p></div></section>
      <section class="page-shell grid gap-4 py-14 md:grid-cols-3"><article v-for="(section,index) in page.sections" :key="section.title" class="rounded-[20px] border border-black/10 p-6"><component :is="[CreditCard,CircleDollarSign,RefreshCcw][index]" /><h2 class="mt-12 text-xl font-bold">{{ section.title }}</h2><p class="mt-3 text-sm leading-6 text-black/55">{{ section.body }}</p></article></section>
    </template>

    <!-- EBOOKS: downloadable library -->
    <template v-else-if="slug === 'ebooks'">
      <section class="page-shell text-center py-8"><BookOpen class="mx-auto" :size="42" /><p class="mt-6 text-xs font-bold uppercase tracking-widest text-black/40">{{ page.eyebrow }}</p><h1 class="display-font mx-auto mt-4 max-w-4xl text-5xl uppercase sm:text-7xl">YOUR STYLE,<br />BETTER INFORMED.</h1><p class="mx-auto mt-6 max-w-xl text-black/55">{{ page.intro }}</p></section>
      <section class="page-shell grid gap-5 py-12 md:grid-cols-3"><article v-for="(section,index) in page.sections" :key="section.title" :class="['group overflow-hidden rounded-[24px] border border-black/10', ['bg-[#e9ded1]','bg-[#d7e2d0]','bg-[#d9d9e6]'][index]]"><div class="flex aspect-[4/3] items-center justify-center p-8"><div class="grid h-full w-2/3 place-items-center bg-white p-5 text-center shadow-xl transition group-hover:-rotate-3 group-hover:scale-105"><span class="display-font text-2xl uppercase">{{ section.title }}</span></div></div><div class="bg-white p-6"><p class="text-sm leading-6 text-black/55">{{ section.body }}</p><button class="mt-5 flex items-center gap-2 font-bold">Download PDF <Download :size="17" /></button></div></article></section>
    </template>

    <!-- TUTORIAL: interactive curriculum -->
    <template v-else-if="slug === 'tutorial'">
      <section class="page-shell grid overflow-hidden rounded-[32px] bg-[#111] text-white lg:grid-cols-[.8fr_1.2fr]"><div class="p-8 md:p-12"><Code2 :size="42" /><h1 class="display-font mt-20 text-5xl uppercase sm:text-6xl">BUILD THE<br />STOREFRONT.</h1><p class="mt-5 text-white/50">{{ page.intro }}</p></div><div class="bg-[#1c1c1c] p-6 md:p-10"><div class="mb-7 flex items-center gap-2 text-xs text-white/40"><span class="h-3 w-3 rounded-full bg-red-400"></span><span class="h-3 w-3 rounded-full bg-yellow-400"></span><span class="h-3 w-3 rounded-full bg-green-400"></span><span class="ml-3">shopco/course.vue</span></div><pre class="overflow-x-auto text-sm leading-7 text-green-300"><code>&lt;template&gt;
  &lt;Storefront :products="catalog" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
  const experience = "delightful"
&lt;/script&gt;</code></pre></div></section>
      <section class="page-shell grid gap-8 py-16 lg:grid-cols-[300px_1fr]"><nav class="space-y-2"><button v-for="(section,index) in page.sections" :key="section.title" :class="['w-full rounded-2xl p-4 text-left', activeTutorial===index ? 'bg-black text-white' : 'bg-[#f0f0f0]']" @click="activeTutorial=index"><span class="text-xs opacity-50">MODULE 0{{ index+1 }}</span><b class="mt-1 block">{{ section.title }}</b></button></nav><article class="rounded-[24px] border border-black/10 p-7 md:p-10"><span class="grid h-12 w-12 place-items-center rounded-full bg-[#d6ff38]"><Check /></span><h2 class="mt-10 text-3xl font-bold">{{ page.sections[activeTutorial].title }}</h2><p class="mt-5 max-w-2xl leading-8 text-black/60">{{ page.sections[activeTutorial].body }}</p><button class="mt-8 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white">Continue lesson <ArrowRight :size="17" /></button></article></section>
    </template>

    <!-- BLOG: editorial magazine -->
    <template v-else-if="slug === 'blog'">
      <section class="page-shell border-y border-black py-10 text-center"><p class="text-xs font-bold uppercase tracking-[.35em]">The SHOP.CO Journal</p><h1 class="display-font mt-5 text-6xl uppercase sm:text-8xl">HOW TO</h1><p class="mt-4 text-black/50">Ideas for getting dressed with more intention.</p></section>
      <section class="page-shell grid gap-6 py-12 lg:grid-cols-2"><article class="group"><div class="overflow-hidden rounded-[24px]"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&q=85" alt="Fashion styling editorial" class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div><p class="mt-5 text-xs font-bold uppercase tracking-widest text-black/40">Style school · 6 min</p><h2 class="mt-3 text-3xl font-bold">{{ page.sections[0].title }}</h2><p class="mt-3 text-black/55">{{ page.sections[0].body }}</p></article><div class="divide-y divide-black/15"><article v-for="(section,index) in page.sections.slice(1)" :key="section.title" class="py-8 first:pt-0"><span class="text-xs font-bold uppercase tracking-widest text-black/35">Guide 0{{ index+2 }}</span><h2 class="mt-3 text-2xl font-bold">{{ section.title }}</h2><p class="mt-3 leading-7 text-black/55">{{ section.body }}</p><button class="mt-5 flex items-center gap-2 text-sm font-bold">Read article <ArrowRight :size="16" /></button></article><div class="py-8"><p class="text-xs font-bold uppercase tracking-widest">Weekly edit</p><h3 class="mt-3 text-2xl font-bold">Good taste, delivered.</h3><div class="mt-5 flex rounded-full bg-[#f0f0f0] p-1"><input class="min-w-0 flex-1 bg-transparent px-4 outline-none" placeholder="Email address" /><button class="rounded-full bg-black px-5 py-3 text-white">Join</button></div></div></div></section>
    </template>

    <!-- VIDEO: streaming library -->
    <template v-else-if="slug === 'youtube'">
      <section class="bg-black py-12 text-white"><div class="page-shell"><p class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/45"><Video :size="17" /> SHOP.CO Studio</p><h1 class="display-font mt-5 text-5xl uppercase sm:text-7xl">WATCH. LEARN.<br />WEAR IT YOUR WAY.</h1><p class="mt-6 max-w-xl text-white/55">{{ page.intro }}</p></div></section>
      <section class="page-shell py-12"><article class="group relative aspect-video overflow-hidden rounded-[28px]"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85" alt="Featured styling video" class="h-full w-full object-cover" /><div class="absolute inset-0 bg-black/30"></div><button class="absolute inset-0 m-auto grid h-20 w-20 place-items-center rounded-full bg-white text-black transition group-hover:scale-110" aria-label="Play featured video"><Play fill="black" /></button><div class="absolute bottom-0 left-0 p-7 text-white"><p class="text-xs font-bold uppercase tracking-widest">Featured lesson · 08:42</p><h2 class="mt-2 text-2xl font-bold md:text-4xl">The foundations of personal style</h2></div></article><div class="mt-8 grid gap-5 md:grid-cols-3"><article v-for="(section,index) in page.sections" :key="section.title"><div :class="['relative aspect-video rounded-[18px]', ['bg-[#d6ff38]','bg-[#e2d8cc]','bg-[#d9d9e6]'][index]]"><button class="absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full bg-black text-white" :aria-label="`Play ${section.title}`"><Play :size="18" fill="white" /></button><span class="absolute bottom-3 right-3 rounded bg-black px-2 py-1 text-xs text-white">0{{ index+4 }}:2{{ index }}</span></div><h3 class="mt-4 text-lg font-bold">{{ section.title }}</h3><p class="mt-2 text-sm text-black/50">{{ section.body }}</p></article></div></section>
    </template>

    <!-- Generic fallback -->
    <template v-else>
      <section class="page-shell overflow-hidden rounded-[32px] bg-[#f0f0f0] px-7 py-12 md:px-14 md:py-20"><p class="text-xs font-bold uppercase tracking-[.22em] text-black/40">{{ page.eyebrow }}</p><h1 class="display-font mt-5 max-w-4xl text-5xl uppercase sm:text-7xl">{{ page.title }}</h1><p class="mt-6 max-w-2xl leading-7 text-black/60">{{ page.intro }}</p></section>
      <section class="page-shell grid gap-5 py-14 md:grid-cols-3"><article v-for="section in page.sections" :key="section.title" class="rounded-[22px] border border-black/10 p-7"><h2 class="text-xl font-bold">{{ section.title }}</h2><p class="mt-4 leading-7 text-black/55">{{ section.body }}</p></article></section>
    </template>
  </div>
</template>
