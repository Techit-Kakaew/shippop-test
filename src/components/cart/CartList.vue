<template>
	<div class="cart">
		<table class="table-auto w-full">
			<thead class="header bg-white">
				<tr>
					<th 
						:class="[`py-4 text-left`, 
							{ 
								'px-5': i !== 0 && i !== headers.length - 1,
								'border-b-2': i !== 0 && i !== 1 && items.length
							}]"
						v-for="(header, i) in headers" 
						:key="header.key">
						<slot :name="`header-${header.key}`">
							{{ header.text }}
						</slot>
					</th>
				</tr>
			</thead>
			<template v-if="items.length">
				<tbody>
					<tr v-for="(item, i) in items" :key="i">
						<td 
							v-for="(header, headerIndex) in headers" 
							:key="header.key" 
							:class="[`align-top py-5`, { 
								'px-5': headerIndex !== 0 && headerIndex !== headers.length - 1,
								'w-5': headerIndex === headers.length - 1,
								'border-b-2': headerIndex !== 0 && headerIndex !== 1
							}]">
							<slot :name="`body-${header.key}`" :data="item" :index="i" />
						</td>
					</tr>
				</tbody>
			</template>
			<template v-else>
				<tr>
					<td :colspan="headers.length">
						<div class="text-center">ไม่พบข้อมูลในตะกร้าสินค้า</div>
					</td>
				</tr>
			</template>
		</table>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'CartList',
	props: {
		items: {
			type: Array,
			default: () => []
		}
	},
	setup() {
		const headers = [
			{
				key: 'product',
				text: 'สินค้า'
			},
			{
				key: 'price',
				text: 'ราคา'
			},
			{
				key: 'quantity',
				text: 'จำนวน'
			},
			{
				key: 'total',
				text: 'ยอดรวม'
			},
			{
				key: 'action',
				text: ''
			}
		]
		
		return {
			headers
		}
	},
})
</script>

<style lang="scss" scoped>
.cart {
	.header {
		position: sticky;
		top: 80px;
	}
}
</style>
