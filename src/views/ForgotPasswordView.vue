<script setup lang="ts">
import { ref } from 'vue'
import { ApiError, authService, type ValidationErrors } from '@/services/auth'
import BrandLogo from '@/components/BrandLogo.vue'

const email = ref('')
const submitting = ref(false)
const sent = ref(false)
const errors = ref<ValidationErrors>({})
const message = ref('')

const submit = async () => {
  submitting.value = true
  errors.value = {}
  message.value = ''

  try {
    const response = await authService.forgotPassword(email.value)
    message.value = response.message
    sent.value = true
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      errors.value = error.errors
      message.value = error.message
    } else {
      message.value = 'Something went wrong. Please try again.'
    }
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="page-shell fade-up flex min-h-[560px] items-center justify-center py-12">
    <div class="w-full max-w-md">
      <RouterLink to="/" class="mb-10 block w-fit" aria-label="DRAPÉ home"><BrandLogo /></RouterLink>
      <h1 class="display-font text-4xl sm:text-5xl">RESET PASSWORD</h1>
      <p class="mt-3 text-sm leading-6 text-black/60">Enter your email and we’ll send instructions if it matches a DRAPÉ account.</p>
      <form class="mt-9 space-y-5" novalidate @submit.prevent="submit">
        <div>
          <label for="forgot-email" class="mb-2 block text-sm font-medium">Email address</label>
          <input id="forgot-email" v-model="email" type="email" autocomplete="email" required class="auth-input" :disabled="sent" />
          <p v-if="errors.email?.[0]" class="mt-2 text-sm text-red-700">{{ errors.email[0] }}</p>
        </div>
        <p v-if="message" role="status" class="rounded-xl bg-[#f0f0f0] px-4 py-3 text-sm">{{ message }}</p>
        <button v-if="!sent" type="submit" class="auth-primary-button" :disabled="submitting">
          {{ submitting ? 'Sending…' : 'Send reset link' }}
        </button>
      </form>
      <RouterLink to="/login" class="mt-7 block text-center text-sm font-medium underline underline-offset-4">Back to login</RouterLink>
    </div>
  </section>
</template>
