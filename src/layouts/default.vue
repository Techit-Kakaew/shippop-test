<template>
    <div class="default-layout">
        <Navbar />
        <div class="container-layout">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from '@/components/layouts/Navbar.vue'

export default defineComponent({
	name: 'default-layout',
	components: {
		Navbar
	},
	setup() {
        
	},
})
</script>
