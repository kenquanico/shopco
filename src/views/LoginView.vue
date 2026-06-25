<script setup lang="ts">
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import { ApiError, type ValidationErrors } from '@/services/auth'
import { auth } from '@/stores/auth'
import logo from '@/assets/shopco.svg'

const route = useRoute()
const router = useRouter()
const email = ref('')
const password = ref('')
const remember = ref(false)
const showPassword = ref(false)
const submitting = ref(false)
const errors = ref<ValidationErrors>({})
const message = ref(route.query.reset === 'success' ? 'Your password has been updated. You can sign in now.' : '')

const firstError = (field: string) => errors.value[field]?.[0]

const submit = async () => {
  submitting.value = true
  errors.value = {}
  message.value = ''

  try {
    await auth.login({ email: email.value, password: password.value, remember: remember.value })
    const redirect = typeof route.query.redirect === 'string' && route.query.redirect.startsWith('/')
      ? route.query.redirect
      : '/account'
    await router.replace(redirect)
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      errors.value = error.errors
      message.value = error.status === 401 ? 'Email or password is incorrect.' : error.message
    } else {
      message.value = 'Something went wrong. Please try again.'
    }
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="page-shell fade-up flex min-h-[620px] items-center justify-center py-12">
    <div class="w-full max-w-md">
      <RouterLink to="/" class="mb-10 block w-fit" aria-label="SHOP.CO home">
        <img :src="logo" alt="SHOP.CO" class="h-7" />
      </RouterLink>
      <h1 class="display-font text-4xl sm:text-5xl">WELCOME BACK</h1>
      <p class="mt-3 text-sm text-black/60">Sign in to manage your account and continue shopping.</p>

      <form class="mt-9 space-y-5" novalidate @submit.prevent="submit">
        <div>
          <label for="login-email" class="mb-2 block text-sm font-medium">Email address</label>
          <input id="login-email" v-model="email" type="email" autocomplete="email" required class="auth-input" :aria-invalid="Boolean(firstError('email'))" />
          <p v-if="firstError('email')" class="mt-2 text-sm text-red-700">{{ firstError('email') }}</p>
        </div>
        <div>
          <label for="login-password" class="mb-2 block text-sm font-medium">Password</label>
          <div class="relative">
            <input id="login-password" v-model="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" required class="auth-input pr-12" :aria-invalid="Boolean(firstError('password'))" />
            <button type="button" class="auth-password-toggle" :aria-label="showPassword ? 'Hide password' : 'Show password'" @click="showPassword = !showPassword">
              <EyeOff v-if="showPassword" :size="20" /><Eye v-else :size="20" />
            </button>
          </div>
          <p v-if="firstError('password')" class="mt-2 text-sm text-red-700">{{ firstError('password') }}</p>
        </div>
        <div class="flex items-center justify-between gap-4 text-sm">
          <label class="flex cursor-pointer items-center gap-2">
            <input v-model="remember" type="checkbox" class="h-4 w-4 rounded border-black/30 accent-black focus-visible:outline-2 focus-visible:outline-offset-2" />
            Remember me
          </label>
          <RouterLink to="/forgot-password" class="underline underline-offset-4 hover:opacity-60">Forgot password?</RouterLink>
        </div>
        <p v-if="message" role="alert" class="rounded-xl bg-[#f0f0f0] px-4 py-3 text-sm">{{ message }}</p>
        <button type="submit" class="auth-primary-button" :disabled="submitting">
          {{ submitting ? 'Signing in…' : 'Login' }}
        </button>
      </form>

      <p class="mt-7 text-center text-sm text-black/60">
        New to SHOP.CO?
        <RouterLink to="/register" class="font-medium text-black underline underline-offset-4">Create an account</RouterLink>
      </p>
    </div>
  </section>
</template>
