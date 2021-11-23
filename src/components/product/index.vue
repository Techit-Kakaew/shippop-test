<template>
    <ProductDetail>
		<template #product-about>
			<span class="font-bold">เกี่ยวกับสินค้า:</span> {{ product?.name }}
			<p class="mt-4 text-gray-500 w-3/4">ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อย ๆ กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา</p>
			<p class="mt-4 text-gray-500 w-3/4">
				ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลถ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีความครัวที่พร้อมหน้า ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียง
				พยายามในแบบของตนเอง เพื่อผ่านพ้นคงามไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึงเมื่อถึงเวลาอาจจะไม่ทั้งหมด แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า "นี่เป็นผลไม้อร่อยที่าสุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย"
			</p>
		</template>
		<template #product-detail>
			<span class="font-bold">รายละเอียดสินค้า:</span> {{ product?.name }}
			<p class="mt-4 text-gray-500 w-3/4">ก่อนที่ชีวิตของเด็กสาววัยย่างสิบหกปีทั้งสี่คนจะได้สัมผัสความหวานหอมจากผลไม้รสชาติที่สุดในชีวิต พวกเธอจะต้องต่อสู้กับความจริงปวดที่ค่อย ๆ กัดเซาะจิตใจและผ่านพ้นช่วงชีวิตซึ่งเต็มไปด้วยความยากลำบากนานา</p>
			<p class="mt-4 text-gray-500 w-3/4">
				ทั้งความคิดที่ว่าตัวเองโดดเดี่ยว แม้อยู่ในกลถ่มเพื่อนที่เหมือนจะรักกันดี หรือแม้จะมีความครัวที่พร้อมหน้า ความรู้สึกที่ว่าไม่มีใครจริงใจสักคนนั้นกัดกินจิตใจทีละน้อยจนก่อเกิดความหวาดระแวงขึ้น ตอนนี้พวกเธอจึงทำได้เพียง
				พยายามในแบบของตนเอง เพื่อผ่านพ้นคงามไม่คุ้นเคยที่ยากเข็ญไปให้ได้ ไม่ว่าวิธีเหล่านั้นจะถูกหรือผิด... แล้ววันหนึงเมื่อถึงเวลาอาจจะไม่ทั้งหมด แต่อย่างน้อยก็จะมีหนึ่งคนที่พูดออกมาได้อย่างเต็มปากเต็มคำว่า "นี่เป็นผลไม้อร่อยที่าสุดเท่าที่ฉันเคยกินมาตั้งแต่เกิดเลย"
			</p>
		</template>
	</ProductDetail>
	<div class="px-20">
		<ProductList title="สินค้าที่เกี่ยวข้อง" actionText="ดูสินค้าทั้งหมด" :productList="productList" />
	</div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import ProductDetail from './ProductDetail.vue'
import ProductList from '@/components/general/ProductList.vue'
import products from '@/assets/mocks/products.json'
import { useProduct } from '@/use/useProduct'

export default defineComponent({
	name: 'Product',
	components: {
		ProductDetail,
		ProductList
	},
	setup() {
		const { productList, productById: product } = useProduct()

		onMounted(() => {
			if(!productList.value.length) {
				productList.value = [...products.data]
			}
		})

		return {
			productList,
			product
		}
	},
})
</script>

