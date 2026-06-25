<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ApiError, type ValidationErrors } from '@/services/auth'
import { auth } from '@/stores/auth'

const router = useRouter()
const form = reactive({
  first_name: auth.user?.first_name ?? '',
  last_name: auth.user?.last_name ?? '',
  email: auth.user?.email ?? '',
})
const saving = ref(false)
const loggingOut = ref(false)
const errors = ref<ValidationErrors>({})
const message = ref('')

const save = async () => {
  saving.value = true
  errors.value = {}
  message.value = ''
  try {
    await auth.updateProfile(form)
    message.value = 'Profile updated.'
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      errors.value = error.errors
      message.value = Object.keys(error.errors).length ? '' : error.message
    } else {
      message.value = 'Something went wrong. Please try again.'
    }
  } finally {
    saving.value = false
  }
}

const logout = async () => {
  loggingOut.value = true
  await auth.logout()
  await router.replace('/login')
}
</script>

<template>
  <div class="page-shell fade-up py-10">
    <div class="flex flex-col gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="mb-2 text-sm uppercase tracking-[.16em] text-black/50">My account</p>
        <h1 class="display-font text-4xl sm:text-5xl">{{ auth.user?.first_name }} {{ auth.user?.last_name }}</h1>
        <p class="mt-3 text-black/60">{{ auth.user?.email }}</p>
      </div>
      <button class="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50" :disabled="loggingOut" @click="logout">
        {{ loggingOut ? 'Logging out…' : 'Logout' }}
      </button>
    </div>

    <div class="mt-10 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <section class="rounded-[20px] border border-black/10 p-6 sm:p-8">
        <h2 class="text-2xl font-bold">Profile details</h2>
        <form class="mt-6 grid gap-5 sm:grid-cols-2" novalidate @submit.prevent="save">
          <div>
            <label for="account-first-name" class="mb-2 block text-sm font-medium">First name</label>
            <input id="account-first-name" v-model="form.first_name" autocomplete="given-name" class="auth-input" />
            <p v-if="errors.first_name?.[0]" class="mt-2 text-sm text-red-700">{{ errors.first_name[0] }}</p>
          </div>
          <div>
            <label for="account-last-name" class="mb-2 block text-sm font-medium">Last name</label>
            <input id="account-last-name" v-model="form.last_name" autocomplete="family-name" class="auth-input" />
            <p v-if="errors.last_name?.[0]" class="mt-2 text-sm text-red-700">{{ errors.last_name[0] }}</p>
          </div>
          <div class="sm:col-span-2">
            <label for="account-email" class="mb-2 block text-sm font-medium">Email address</label>
            <input id="account-email" v-model="form.email" type="email" autocomplete="email" class="auth-input" />
            <p v-if="errors.email?.[0]" class="mt-2 text-sm text-red-700">{{ errors.email[0] }}</p>
          </div>
          <p v-if="message" role="status" class="rounded-xl bg-[#f0f0f0] px-4 py-3 text-sm sm:col-span-2">{{ message }}</p>
          <button type="submit" class="auth-primary-button sm:col-span-2 sm:w-fit sm:px-10" :disabled="saving">
            {{ saving ? 'Saving…' : 'Save changes' }}
          </button>
        </form>
      </section>

      <div class="space-y-6">
        <section class="rounded-[20px] bg-[#f0f0f0] p-6 sm:p-8">
          <h2 class="text-2xl font-bold">Orders</h2>
          <p class="mt-3 text-sm leading-6 text-black/60">Your SHOP.CO orders will appear here.</p>
        </section>
        <section class="rounded-[20px] bg-[#f0f0f0] p-6 sm:p-8">
          <h2 class="text-2xl font-bold">Saved addresses</h2>
          <p class="mt-3 text-sm leading-6 text-black/60">Save delivery addresses for a faster checkout experience.</p>
        </section>
      </div>
    </div>
  </div>
</template>
