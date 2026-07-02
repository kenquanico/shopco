<script setup lang="ts">
import logoMark from '@/assets/drape.svg'

withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
</script>

<template>
  <span class="inline-flex items-center">
    <img :src="logoMark" alt="DRAPÉ" :class="compact ? 'h-10 w-10' : 'h-12 w-12'" class="object-contain" />
  </span>
</template>
