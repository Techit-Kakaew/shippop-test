<template>
    <Cart />
</template>

<script>
import { defineComponent } from 'vue'
import Cart from '@/components/cart/index.vue'

export default defineComponent({
	name: 'CartPage',
	components: {
		Cart
	},
	setup() {
        
	},
})
</script>
