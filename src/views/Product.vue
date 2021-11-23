<template>
    <Product />
</template>

<script>
import { defineComponent } from 'vue'
import Product from '@/components/product/index.vue'

export default defineComponent({
	name: 'ProductPage',
	components: {
		Product
	},
	setup() {
        
	},
})
</script>
