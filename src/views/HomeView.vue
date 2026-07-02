<script setup lang="ts">
import { ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-vue-next'
import ProductSection from '@/components/ProductSection.vue'
import { products } from '@/data/products'
import versaceLogo from '@/assets/brands/versace.svg'
import zaraLogo from '@/assets/brands/zara.svg'
import gucciLogo from '@/assets/brands/gucci.svg'
import pradaLogo from '@/assets/brands/prada.svg'
import calvinKleinLogo from '@/assets/brands/calvin-klein.svg'

const testimonials = [
  ['Sarah M.', 'I’m blown away by the quality and style of the clothes I received from DRAPÉ. From casual wear to elegant dresses, every piece has exceeded my expectations.'],
  ['Alex K.', 'Finding clothes that align with my personal style used to be a challenge until I discovered DRAPÉ. The range is truly remarkable.'],
  ['James L.', 'The selection is excellent and the checkout was effortless. Everything arrived looking just like the photos.'],
]
const brandLogos = [
  { src: versaceLogo, alt: 'Versace' },
  { src: zaraLogo, alt: 'Zara' },
  { src: gucciLogo, alt: 'Gucci' },
  { src: pradaLogo, alt: 'Prada' },
  { src: calvinKleinLogo, alt: 'Calvin Klein' },
]
</script>

<template>
  <div class="fade-up">
    <section class="overflow-hidden bg-[#f2f0f1]">
      <div class="page-shell grid min-h-[650px] lg:grid-cols-[55%_45%]">
        <div class="z-10 flex flex-col justify-center py-12 lg:py-20">
          <h1 class="display-font max-w-[650px] text-[44px] sm:text-6xl lg:text-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p class="mt-6 max-w-[560px] text-sm leading-6 text-black/60 md:text-base">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <RouterLink to="/category/casual" class="mt-7 w-full rounded-full bg-black py-4 text-center text-sm font-medium text-white sm:w-52">Shop Now</RouterLink>
          <div class="mt-12 flex flex-wrap justify-center divide-x divide-black/10 sm:justify-start">
            <div v-for="(stat, index) in [['200+','International Brands'],['2,000+','High-Quality Products'],['30,000+','Happy Customers']]" :key="stat[0]" :class="['px-5 first:pl-0', index === 2 ? 'mt-5 border-l-0 sm:mt-0 sm:border-l' : '']">
              <strong class="block text-2xl sm:text-4xl">{{ stat[0] }}</strong><span class="text-xs text-black/60 sm:text-sm">{{ stat[1] }}</span>
            </div>
          </div>
        </div>
        <div class="relative min-h-[440px] lg:min-h-0">
          <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=90" alt="Fashion model wearing a black denim outfit" class="absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply" />
          <span class="absolute left-4 top-24 text-5xl lg:-left-7 lg:top-[46%]">✦</span><span class="absolute right-2 top-7 text-8xl">✦</span>
        </div>
      </div>
    </section>

    <section id="brands" class="bg-black py-9 text-white">
      <div class="page-shell flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:justify-between">
        <img v-for="brand in brandLogos" :key="brand.alt" :src="brand.src" :alt="brand.alt" class="h-7 w-auto max-w-[145px] object-contain sm:h-8 md:max-w-[180px]" />
      </div>
    </section>

    <ProductSection title="New Arrivals" :items="products.slice(0,4)" anchor="new-arrivals" />
    <div class="page-shell border-t border-black/10"></div>
    <ProductSection title="Top Selling" :items="products.slice(4,8)" />

    <section class="page-shell rounded-[24px] bg-[#f0f0f0] px-5 py-10 md:rounded-[40px] md:px-16 md:py-16">
      <h2 class="display-font mb-10 text-center text-[32px] md:text-5xl">BROWSE BY DRESS STYLE</h2>
      <div class="grid gap-4 md:grid-cols-5">
        <RouterLink to="/category/casual" class="relative col-span-2 h-48 overflow-hidden rounded-[20px] bg-white md:h-72">
          <span class="absolute left-7 top-6 z-10 text-2xl font-bold md:text-4xl">Casual</span><img src="https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=85" alt="Casual fashion" class="h-full w-full object-cover object-center" />
        </RouterLink>
        <RouterLink to="/category/formal" class="relative col-span-3 h-48 overflow-hidden rounded-[20px] bg-white md:h-72">
          <span class="absolute left-7 top-6 z-10 text-2xl font-bold md:text-4xl">Formal</span><img src="https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=1000&q=85" alt="Formal fashion" class="h-full w-full object-cover object-top" />
        </RouterLink>
        <RouterLink to="/category/party" class="relative col-span-3 h-48 overflow-hidden rounded-[20px] bg-white md:h-72">
          <span class="absolute left-7 top-6 z-10 text-2xl font-bold text-white md:text-4xl">Party</span><img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=85" alt="Party style" class="h-full w-full object-cover" />
        </RouterLink>
        <RouterLink to="/category/gym" class="relative col-span-2 h-48 overflow-hidden rounded-[20px] bg-white md:h-72">
          <span class="absolute left-7 top-6 z-10 text-2xl font-bold md:text-4xl">Gym</span><img src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85" alt="Gym style" class="h-full w-full object-cover" />
        </RouterLink>
      </div>
    </section>

    <section class="page-shell py-20 md:py-24">
      <div class="mb-10 flex items-end justify-between">
        <h2 class="display-font max-w-xl text-[32px] md:text-5xl">OUR HAPPY CUSTOMERS</h2>
        <div class="flex gap-4"><button aria-label="Previous"><ArrowLeft /></button><button aria-label="Next"><ArrowRight /></button></div>
      </div>
      <div class="no-scrollbar flex gap-5 overflow-x-auto">
        <article v-for="item in testimonials" :key="item[0]" class="w-[88vw] max-w-[400px] shrink-0 rounded-[20px] border border-black/10 p-6 md:p-8">
          <div class="mb-3 text-xl text-[#FFC633]">★★★★★</div>
          <h3 class="mb-3 flex items-center gap-1 text-lg font-bold">{{ item[0] }} <BadgeCheck :size="18" fill="#01ab31" color="white" /></h3>
          <p class="text-sm leading-6 text-black/60">“{{ item[1] }}”</p>
        </article>
      </div>
    </section>
  </div>
</template>
