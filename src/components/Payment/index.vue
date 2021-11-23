<template>
    <div class="px-20 mt-12">
        <div class="font-bold text-2xl mb-5">ชำระเงิน</div>
        <div class="flex">
            <div class="w-9/12 pr-20">
                <AddressForm />
                <div class="py-12">
                    <div class="font-semibold text-sm">เลือกขนส่ง</div>
                    <div class="border-b-2 my-3" />
                    <CardSelect 
                        :isSelected="currentTransport === 0" 
                        @select="currentTransport = 0">
                        <div class="flex items-center justify-between w-full">
                            <span>Free Shipping</span>
                            <span class="font-semibold">THB0.00</span>
                        </div>
                    </CardSelect>
                    <CardSelect 
                        :isSelected="currentTransport === 1" 
                        @select="currentTransport = 1">
                        <div class="flex items-center justify-between w-full">
                            <img src="@/assets/transport-icons/kerry.png" alt="kerry-icon" />
                            <span class="font-semibold">THB40.00</span>
                        </div>
                    </CardSelect>
                </div>
                <div class="py-12">
                    <div class="font-semibold text-sm">วิธีการชำระเงิน</div>
                    <div class="border-b-2 my-3" />
                    <CardSelect 
                        :isSelected="currentPaymentMethod === 0" 
                        @select="currentPaymentMethod = 0">
                        <div class="flex items-center w-full">
                            <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />  <path d="M12 6v2m0 8v2" /></svg>
                            <span class="ml-3">Cash</span>
                        </div>
                    </CardSelect>
                    <CardSelect 
                        :isSelected="currentPaymentMethod === 1" 
                        @select="currentPaymentMethod = 1">
                        <div class="flex items-center w-full">
                            <img src="@/assets/icons/debit.png" alt="debit-icon" />
                            <span class="ml-3">Credit/Debit</span>
                        </div>
                    </CardSelect>
                </div>
            </div>
            <Summary>
                <template #submit-text>
                    <div class="flex items-center">
                        <svg class="h-7 w-7 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="11" width="14" height="10" rx="2" />  <circle cx="12" cy="16" r="1" />  <path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg>
                        <span class="ml-3">ชำระเงิน</span>
                    </div>
                </template>
            </Summary>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AddressForm from './AddressForm.vue'
import CardSelect from './CardSelect.vue'
import Summary from '@/components/cart/Summary.vue'

export default defineComponent({
	name: 'Payment',
	components: {
		AddressForm,
		CardSelect,
		Summary
	},
	setup() {
		const currentTransport = ref(0)
		const currentPaymentMethod = ref(0)

		return {
			currentTransport,
			currentPaymentMethod
		}
	},
})
</script>


<style lang="scss" scoped>

</style>