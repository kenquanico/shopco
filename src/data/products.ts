export type Product = {
  id: number
  name: string
  price: number
  oldPrice?: number
  rating: number
  image: string
  category: string
  colors: string[]
  description: string
}

export const products: Product[] = [
  { id: 1, name: 'T-shirt with Tape Details', price: 120, rating: 4.5, category: 'casual', colors: ['#4f4631', '#244f39', '#243654'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85', description: 'A clean everyday tee cut from soft, breathable cotton with subtle tape detailing.' },
  { id: 2, name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, rating: 3.5, category: 'casual', colors: ['#1f2937', '#31517a', '#161616'], image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85', description: 'Streamlined denim with a comfortable stretch and a modern skinny silhouette.' },
  { id: 3, name: 'Checkered Shirt', price: 180, rating: 4.5, category: 'casual', colors: ['#a92728', '#26394f'], image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=85', description: 'A versatile checkered shirt with a relaxed shape and an easy brushed finish.' },
  { id: 4, name: 'Sleeve Striped T-shirt', price: 130, oldPrice: 160, rating: 4.5, category: 'casual', colors: ['#d89a43', '#375b4a'], image: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=800&q=85', description: 'A playful striped knit tee that brings color and texture to everyday outfits.' },
  { id: 5, name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, rating: 5, category: 'formal', colors: ['#637b68', '#d8d0b3'], image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85', description: 'Crisp vertical stripes and a tailored collar make this a polished wardrobe staple.' },
  { id: 6, name: 'Courage Graphic T-shirt', price: 145, rating: 4, category: 'casual', colors: ['#db7f42', '#242424'], image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=85', description: 'Statement graphics meet a substantial jersey cotton for an expressive casual layer.' },
  { id: 7, name: 'Loose Fit Bermuda Shorts', price: 80, rating: 3, category: 'gym', colors: ['#5a6576', '#1c1c1c'], image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=85', description: 'Relaxed Bermuda shorts designed for warm days, workouts, and easy movement.' },
  { id: 8, name: 'Faded Skinny Jeans', price: 210, rating: 4.5, category: 'casual', colors: ['#4f657c', '#2d3845'], image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85', description: 'Classic blue jeans with subtle fading, stretch comfort, and a close modern fit.' },
]

export const getProduct = (id: string | number) => products.find((product) => product.id === Number(id)) ?? products[0]
