<script setup lang="ts">
import logoMark from '@/assets/drape.svg'

withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
</script>

<template>
  <span class="inline-flex items-center gap-2">
    <img :src="logoMark" alt="" :class="compact ? 'h-8 w-8' : 'h-9 w-9'" class="rounded-full bg-black p-1.5" />
    <span class="brand-name" :class="compact ? 'text-xl' : 'text-2xl'">DRAPÉ</span>
  </span>
</template>

<style scoped>
.brand-name {
  font-family: "Bodoni Moda", Didot, "Times New Roman", serif;
  font-weight: 600;
  letter-spacing: .08em;
}
</style>
