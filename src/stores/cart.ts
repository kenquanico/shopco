import { computed, reactive } from 'vue'
import { getProduct } from '@/data/products'

export type CartItem = { productId: number; size: string; color: string; quantity: number }

const state = reactive<{ items: CartItem[] }>({
  items: JSON.parse(localStorage.getItem('shopco-cart') || '[{"productId":1,"size":"Large","color":"#4f4631","quantity":1},{"productId":3,"size":"Medium","color":"#a92728","quantity":1}]'),
})

const persist = () => localStorage.setItem('shopco-cart', JSON.stringify(state.items))

export const cart = {
  items: state.items,
  count: computed(() => state.items.reduce((sum, item) => sum + item.quantity, 0)),
  subtotal: computed(() => state.items.reduce((sum, item) => sum + getProduct(item.productId).price * item.quantity, 0)),
  add(productId: number, size: string, color: string, quantity = 1) {
    const existing = state.items.find((item) => item.productId === productId && item.size === size && item.color === color)
    if (existing) existing.quantity += quantity
    else state.items.push({ productId, size, color, quantity })
    persist()
  },
  remove(index: number) { state.items.splice(index, 1); persist() },
  update(index: number, quantity: number) {
    if (quantity < 1) return
    state.items[index].quantity = quantity
    persist()
  },
  clear() { state.items.splice(0); persist() },
}
