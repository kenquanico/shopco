import { reactive } from 'vue'
import {
  authService,
  type LoginCredentials,
  type ProfileInput,
  type RegisterCredentials,
  type User,
} from '@/services/auth'

const state = reactive<{
  user: User | null
  loading: boolean
  initialized: boolean
}>({
  user: null,
  loading: true,
  initialized: false,
})

let initialization: Promise<void> | null = null

export const auth = {
  get user() {
    return state.user
  },
  get isAuthenticated() {
    return state.user !== null
  },
  get loading() {
    return state.loading
  },
  initialize(): Promise<void> {
    if (initialization) return initialization

    initialization = (async () => {
      state.loading = true
      try {
        state.user = await authService.user()
      } catch {
        state.user = null
      } finally {
        state.loading = false
        state.initialized = true
      }
    })()

    return initialization
  },
  async login(credentials: LoginCredentials) {
    state.user = await authService.login(credentials)
    return state.user
  },
  async register(credentials: RegisterCredentials) {
    state.user = await authService.register(credentials)
    return state.user
  },
  async logout() {
    try {
      await authService.logout()
    } finally {
      state.user = null
    }
  },
  async updateProfile(profile: ProfileInput) {
    state.user = await authService.updateProfile(profile)
    return state.user
  },
}
