import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import CategoryView from './views/CategoryView.vue'
import ProductView from './views/ProductView.vue'
import CartView from './views/CartView.vue'
import CheckoutView from './views/CheckoutView.vue'
import SearchView from './views/SearchView.vue'
import FooterPageView from './views/FooterPageView.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'
import ForgotPasswordView from './views/ForgotPasswordView.vue'
import ResetPasswordView from './views/ResetPasswordView.vue'
import AccountView from './views/AccountView.vue'
import { auth } from './stores/auth'
import './style.css'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    guestOnly?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/category/:slug', component: CategoryView },
    { path: '/product/:id', component: ProductView },
    { path: '/cart', component: CartView },
    { path: '/checkout', component: CheckoutView, meta: { requiresAuth: true } },
    { path: '/search', component: SearchView },
    { path: '/info/:slug', component: FooterPageView },
    { path: '/login', component: LoginView, meta: { guestOnly: true } },
    { path: '/register', component: RegisterView, meta: { guestOnly: true } },
    { path: '/forgot-password', component: ForgotPasswordView, meta: { guestOnly: true } },
    { path: '/reset-password', component: ResetPasswordView, meta: { guestOnly: true } },
    { path: '/account', component: AccountView, meta: { requiresAuth: true } },
  ],
})

router.beforeEach(async (to) => {
  await auth.initialize()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  if (to.meta.guestOnly && auth.isAuthenticated) {
    return { path: '/account' }
  }
})

createApp(App).use(router).mount('#app')
