<script setup lang="ts">
defineProps<{ rating: number }>()
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex text-[17px] text-[#FFC633]">
      <span v-for="n in 5" :key="n">{{ rating >= n ? '★' : rating >= n - .5 ? '★' : '☆' }}</span>
    </div>
    <span class="text-xs text-black/60">{{ rating }}/5</span>
  </div>
</template>
