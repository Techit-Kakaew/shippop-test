<template>
	<div class="px-20">
		<Banner />
		<div class="mt-12">
			<ProductList title="สินค้าขายดี" :productList="productList" />
			<ProductList title="สินค้าแนะนำ" :productList="productList" />
		</div>
	</div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Banner from './Banner.vue'
import ProductList from '@/components/general/ProductList.vue'
import products from '@/assets/mocks/products.json'
import { useProduct } from '@/use/useProduct'

export default defineComponent({
	name: 'Home',
	components: {
		Banner,
		ProductList
	},
	setup() {
		const { productList } = useProduct()

		onMounted(() => {
			if(!productList.value.length) {
				productList.value = [...products.data]
			}
		})
        
		return {
			productList
		}
	},
})
</script>