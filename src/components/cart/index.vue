<template>
	<div class="px-20 pb-12 mt-12">
		<div class="font-bold text-3xl">ตะกร้าสินค้า</div>
		<div class="flex">
			<div class="w-9/12 pr-20">
				<CartList :items="cartList">
					<template #body-product="{ data, index }">
						<div class="flex pl-2">
							<img class="w-32" :src="data.images[0].image" :alt="`product-image-${index}`" />
							<span class="ml-3 mt-2">{{ data.name }}</span>
						</div>
					</template>
					<template #body-price="{ data }">
						<div class="mt-2 font-bold">THB{{ data.sale }}</div>
					</template>
					<template #body-quantity="{ data }">
						<input 
							v-model="data.quantityInCart"
							class="quantity-input pl-6 pr-1 mt-2 border border-transparent focus:outline-none rounded w-16"
							type="number"
							min="1"
							@input="reCalculatePrice(data.id)" />
					</template>
					<template #body-total="{ data }">
						<div class="mt-2 font-bold">THB{{ data.totalPrice }}</div>
					</template>
					<template #body-action="{ data }">
						<div class="flex flex-col action mt-2">
							<VueFeather 
								class="border border-gray-400 rounded-full p-1 cursor-pointer" 
								type="x" 
								size="12"
								@click="removeCartProduct(data.id)" />
							<VueFeather class="border border-gray-400 rounded-full p-1 cursor-pointer mt-2" type="edit-2" size="12" />
						</div>
					</template>
				</CartList>
				<div class="flex items-center mt-5">
					<button 
						class="flex items-center justify-center bg-white border-2 border-black rounded-full text-base py-2 px-3 mt-2 w-1/4"
						@click="$router.push('/')">
						<span class="font-semibold text-black">ซื้อสินค้าต่อไป</span>
					</button>
					<button 
						class="flex items-center justify-center bg-black rounded-full text-base py-2 px-2 ml-4 mt-2 w-1/4"
						@click="clearCartProduct">
						<span class="font-semibold text-white">ล้างตะกร้าสินค้า</span>
					</button>
				</div>
			</div>
			<Summary>
                <template #submit-text>
                    ไปชำระเงิน
                </template>
            </Summary>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import CartList from './CartList.vue'
import Summary from './Summary.vue'
import products from '@/assets/mocks/products.json'
import { useProduct } from '@/use/useProduct'

export default defineComponent({
	name: 'Cart',
	components: {
		CartList,
		Summary
	},
	setup() {
		const { productList, cartList, removeCartProduct, reCalculatePrice, clearCartProduct } = useProduct()

		onMounted(() => {
			if(!productList.value.length) {
				productList.value = [...products.data]
			}
		})

		return {
			cartList,
			removeCartProduct,
			reCalculatePrice,
			clearCartProduct
		}
	},
})
</script>

<style lang="scss" scoped>
	.quantity-input {
        height: 40px;
        background: #ebebeb;
    }
	.action {
		:deep(.feather) {
			color: rgba(156, 163, 175, 1);
		}
	}
</style>
