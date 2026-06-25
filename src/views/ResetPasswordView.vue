<script setup lang="ts">
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import { ApiError, authService, type ValidationErrors } from '@/services/auth'
import logo from '@/assets/shopco.svg'

const route = useRoute()
const router = useRouter()
const email = ref(typeof route.query.email === 'string' ? route.query.email : '')
const token = ref(typeof route.query.token === 'string' ? route.query.token : '')
const password = ref('')
const passwordConfirmation = ref('')
const showPassword = ref(false)
const submitting = ref(false)
const errors = ref<ValidationErrors>({})
const message = ref('')

const submit = async () => {
  submitting.value = true
  errors.value = {}
  message.value = ''

  try {
    await authService.resetPassword({
      token: token.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    })
    await router.replace({ path: '/login', query: { reset: 'success' } })
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      errors.value = error.errors
      message.value = Object.keys(error.errors).length ? '' : error.message
    } else {
      message.value = 'Something went wrong. Please try again.'
    }
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="page-shell fade-up flex min-h-[650px] items-center justify-center py-12">
    <div class="w-full max-w-md">
      <RouterLink to="/" class="mb-10 block w-fit"><img :src="logo" alt="SHOP.CO" class="h-7" /></RouterLink>
      <h1 class="display-font text-4xl sm:text-5xl">CHOOSE A NEW PASSWORD</h1>
      <p class="mt-3 text-sm text-black/60">Use at least eight characters for your new password.</p>
      <p v-if="!token" class="mt-6 rounded-xl bg-[#f0f0f0] px-4 py-3 text-sm">This reset link is missing its token. Request a new password reset email.</p>
      <form class="mt-9 space-y-5" novalidate @submit.prevent="submit">
        <div>
          <label for="reset-email" class="mb-2 block text-sm font-medium">Email address</label>
          <input id="reset-email" v-model="email" type="email" autocomplete="email" required class="auth-input" />
          <p v-if="errors.email?.[0]" class="mt-2 text-sm text-red-700">{{ errors.email[0] }}</p>
        </div>
        <div>
          <label for="reset-password" class="mb-2 block text-sm font-medium">New password</label>
          <div class="relative">
            <input id="reset-password" v-model="password" :type="showPassword ? 'text' : 'password'" autocomplete="new-password" required class="auth-input pr-12" />
            <button type="button" class="auth-password-toggle" :aria-label="showPassword ? 'Hide password' : 'Show password'" @click="showPassword = !showPassword">
              <EyeOff v-if="showPassword" :size="20" /><Eye v-else :size="20" />
            </button>
          </div>
          <p v-if="errors.password?.[0]" class="mt-2 text-sm text-red-700">{{ errors.password[0] }}</p>
        </div>
        <div>
          <label for="reset-confirmation" class="mb-2 block text-sm font-medium">Confirm new password</label>
          <input id="reset-confirmation" v-model="passwordConfirmation" :type="showPassword ? 'text' : 'password'" autocomplete="new-password" required class="auth-input" />
        </div>
        <p v-if="message" role="alert" class="rounded-xl bg-[#f0f0f0] px-4 py-3 text-sm">{{ message }}</p>
        <button type="submit" class="auth-primary-button" :disabled="submitting || !token">
          {{ submitting ? 'Updating password…' : 'Update password' }}
        </button>
      </form>
    </div>
  </section>
</template>
