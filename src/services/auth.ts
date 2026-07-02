import axios from 'axios'
import { api } from './api'

export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
}

export interface LoginCredentials {
  email: string
  password: string
  remember: boolean
}

export interface RegisterCredentials {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirmation: string
}

export interface ProfileInput {
  first_name: string
  last_name: string
  email: string
}

export interface ResetPasswordInput {
  token: string
  email: string
  password: string
  password_confirmation: string
}

export type ValidationErrors = Record<string, string[]>

export class ApiError extends Error {
  readonly status?: number
  readonly errors: ValidationErrors

  constructor(message: string, status?: number, errors: ValidationErrors = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.errors = errors
  }
}

interface ErrorPayload {
  message?: string
  errors?: ValidationErrors
}

const toApiError = (error: unknown): ApiError => {
  if (!axios.isAxiosError<ErrorPayload>(error)) {
    return new ApiError('Something went wrong. Please try again.')
  }

  if (!error.response) {
    return new ApiError('We could not reach DRAPÉ. Please check your connection and try again.')
  }

  return new ApiError(
    error.response.data?.message || 'Something went wrong. Please try again.',
    error.response.status,
    error.response.data?.errors,
  )
}

const request = async <T>(operation: () => Promise<T>): Promise<T> => {
  try {
    return await operation()
  } catch (error: unknown) {
    throw toApiError(error)
  }
}

const csrf = () => request(async () => {
  await api.get('/sanctum/csrf-cookie')
})

export const authService = {
  csrf,
  user: () => request(async () => (await api.get<User>('/api/user')).data),
  async login(credentials: LoginCredentials) {
    await csrf()
    return request(async () => (await api.post<User>('/api/login', credentials)).data)
  },
  async register(credentials: RegisterCredentials) {
    await csrf()
    return request(async () => (await api.post<User>('/api/register', credentials)).data)
  },
  logout: () => request(async () => {
    await api.post('/api/logout')
  }),
  updateProfile: (profile: ProfileInput) =>
    request(async () => (await api.put<User>('/api/user/profile', profile)).data),
  async forgotPassword(email: string) {
    await csrf()
    return request(async () => (await api.post<{ message: string }>('/api/forgot-password', { email })).data)
  },
  async resetPassword(input: ResetPasswordInput) {
    await csrf()
    return request(async () => (await api.post<{ message: string }>('/api/reset-password', input)).data)
  },
}
