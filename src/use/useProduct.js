import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const productList = ref([])
const cartList = ref([])

export const useProduct = () => {
	const route = useRoute()
	const addProductToCart = (productId, quantity) => {
		if(productId) {
			const product = productList.value.find(product => product.id === productId)
			if(!cartList.value.length) {
				cartList.value.push({
					...product,
					quantityInCart: quantity,
					totalPrice: (+product.sale * +quantity).toFixed(2).toString()
				})
			} else {
				const index = cartList.value.findIndex(cart => cart.id === productId)
				if(index === -1) {
					cartList.value.push({
						...product,
						quantityInCart: quantity,
						totalPrice: (+product.sale * +quantity).toFixed(2).toString()
					})
				} else {
					cartList.value[index].quantityInCart = cartList.value[index].quantityInCart + quantity
					cartList.value[index].totalPrice = (+cartList.value[index].sale * +cartList.value[index].quantityInCart).toFixed(2).toString()
				}
			}
		}
	}

	const removeCartProduct = (productId) => {
		const index = cartList.value.findIndex(product => product.id === productId)
		cartList.value.splice(index, 1)
	}

	const reCalculatePrice = (productId) => {
		const index = cartList.value.findIndex(product => product.id === productId)
		cartList.value[index].totalPrice = (+cartList.value[index].sale * +cartList.value[index].quantityInCart).toFixed(2).toString()
	}

	const clearCartProduct = () => {
		cartList.value = []
	}

	const totalPriceInCart = computed(() => {
		if(!cartList.value.length) return 0
		if(cartList.value.length === 1) {
			return cartList.value[0].totalPrice
		}
		return cartList.value.reduce((a, b) => (+a) + (+b.totalPrice), 0)
	}) 

	const productById = computed(() => {
		if(route.params?.id) {
			return productList.value.find(product => product.id === +route.params?.id)
		}
		return null
	})

	return {
		productList,
		productById,
		addProductToCart,
		removeCartProduct,
		cartList,
		totalPriceInCart,
		reCalculatePrice,
		clearCartProduct
	}
}