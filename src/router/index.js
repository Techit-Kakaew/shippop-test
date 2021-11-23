import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home-parent',
		redirect: '/',
		component: () => import('@/layouts/default.vue'),
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('@/views/Home.vue')
			},
			{
				path: '/product/:id',
				name: 'product',
				component: () => import('@/views/Product.vue')
			},
			{
				path: '/cart',
				name: 'cart',
				component: () => import('@/views/Cart.vue')
			},
			{
				path: '/payment',
				name: 'payment',
				component: () => import('@/views/Payment.vue')
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0)
	next()
})

export default router