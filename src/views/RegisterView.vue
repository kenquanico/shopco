<script setup lang="ts">
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { ApiError, type ValidationErrors } from '@/services/auth'
import { auth } from '@/stores/auth'
import BrandLogo from '@/components/BrandLogo.vue'

const router = useRouter()
const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
})
const showPassword = ref(false)
const showConfirmation = ref(false)
const submitting = ref(false)
const errors = ref<ValidationErrors>({})
const message = ref('')
const firstError = (field: string) => errors.value[field]?.[0]

const submit = async () => {
  submitting.value = true
  errors.value = {}
  message.value = ''

  try {
    await auth.register(form.value)
    await router.replace('/account')
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
  <section class="page-shell fade-up flex min-h-[700px] items-center justify-center py-12">
    <div class="w-full max-w-lg">
      <RouterLink to="/" class="mb-10 block w-fit" aria-label="DRAPÉ home"><BrandLogo /></RouterLink>
      <h1 class="display-font text-4xl sm:text-5xl">CREATE ACCOUNT</h1>
      <p class="mt-3 text-sm text-black/60">Join DRAPÉ to make checkout and account management easier.</p>

      <form class="mt-9 grid gap-5 sm:grid-cols-2" novalidate @submit.prevent="submit">
        <div>
          <label for="first-name" class="mb-2 block text-sm font-medium">First name</label>
          <input id="first-name" v-model="form.first_name" autocomplete="given-name" required class="auth-input" />
          <p v-if="firstError('first_name')" class="mt-2 text-sm text-red-700">{{ firstError('first_name') }}</p>
        </div>
        <div>
          <label for="last-name" class="mb-2 block text-sm font-medium">Last name</label>
          <input id="last-name" v-model="form.last_name" autocomplete="family-name" required class="auth-input" />
          <p v-if="firstError('last_name')" class="mt-2 text-sm text-red-700">{{ firstError('last_name') }}</p>
        </div>
        <div class="sm:col-span-2">
          <label for="register-email" class="mb-2 block text-sm font-medium">Email address</label>
          <input id="register-email" v-model="form.email" type="email" autocomplete="email" required class="auth-input" />
          <p v-if="firstError('email')" class="mt-2 text-sm text-red-700">{{ firstError('email') }}</p>
        </div>
        <div class="sm:col-span-2">
          <label for="register-password" class="mb-2 block text-sm font-medium">Password</label>
          <div class="relative">
            <input id="register-password" v-model="form.password" :type="showPassword ? 'text' : 'password'" autocomplete="new-password" required class="auth-input pr-12" />
            <button type="button" class="auth-password-toggle" :aria-label="showPassword ? 'Hide password' : 'Show password'" @click="showPassword = !showPassword">
              <EyeOff v-if="showPassword" :size="20" /><Eye v-else :size="20" />
            </button>
          </div>
          <p v-if="firstError('password')" class="mt-2 text-sm text-red-700">{{ firstError('password') }}</p>
        </div>
        <div class="sm:col-span-2">
          <label for="password-confirmation" class="mb-2 block text-sm font-medium">Confirm password</label>
          <div class="relative">
            <input id="password-confirmation" v-model="form.password_confirmation" :type="showConfirmation ? 'text' : 'password'" autocomplete="new-password" required class="auth-input pr-12" />
            <button type="button" class="auth-password-toggle" :aria-label="showConfirmation ? 'Hide password' : 'Show password'" @click="showConfirmation = !showConfirmation">
              <EyeOff v-if="showConfirmation" :size="20" /><Eye v-else :size="20" />
            </button>
          </div>
        </div>
        <p v-if="message" role="alert" class="rounded-xl bg-[#f0f0f0] px-4 py-3 text-sm sm:col-span-2">{{ message }}</p>
        <button type="submit" class="auth-primary-button sm:col-span-2" :disabled="submitting">
          {{ submitting ? 'Creating account…' : 'Create account' }}
        </button>
      </form>

      <p class="mt-7 text-center text-sm text-black/60">
        Already have an account?
        <RouterLink to="/login" class="font-medium text-black underline underline-offset-4">Sign in</RouterLink>
      </p>
    </div>
  </section>
</template>
