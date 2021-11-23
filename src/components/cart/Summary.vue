<template>
    <div class="summary p-5 pb-12 w-3/12">
        <div class="font-bold text-2xl">สรุปคำสั่งซื้อ</div>
        <ul class="mt-8">
            <li class="flex items-center justify-between">
                <div class="font-semibold">ยอดรวม</div>
                <div class="font-semibold">THB{{ formatDecimal(+totalPriceInCart) }}</div>
            </li>
            <li class="flex items-center justify-between mt-4">
                <div class="font-semibold">ค่าส่ง</div>
                <div class="font-semibold">THB{{ formatDecimal(+shippingCost) }}</div>
            </li>
        </ul>
        <div class="border-b my-4" />
        <div class="flex items-center justify-between">
            <div class="font-semibold">ยอดสุทธิ</div>
            <div class="font-semibold">THB{{ formatDecimal(+totalPriceInCart + +shippingCost) }}</div>
        </div>
        <button 
            class="flex items-center justify-center btn-payment text-base py-2 px-3 mx-auto mt-8 w-full"
            @click="$router.push('/payment')">
            <span class="font-semibold text-white">
                <slot name="submit-text" />
            </span>
        </button>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useProduct } from '@/use/useProduct'

export default defineComponent({
	name: 'Summary',
	setup() {
		const { cartList, totalPriceInCart } = useProduct()

		const shippingCost = computed(() => {
			if(cartList.value.length) {
				return 1
			}
			return 0
		})

		const formatDecimal = (number) => {
			return (Math.round(number * 100) / 100).toFixed(2)
		}

		return {
			formatDecimal,
			cartList,
			totalPriceInCart,
			shippingCost
		}
	},
})
</script>

<style lang="scss" scoped>
.summary {
    position: sticky;
    top: 80px;
    max-height: 325px;
    background: #f5f9ff;
    .btn-payment {
        background: $primary-color;
        border-radius: 18px;
    }
}
</style>
