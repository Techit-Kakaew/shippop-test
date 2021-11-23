<template>
    <div :class="[`border rounded-lg w-full h-24 p-4 mt-4 cursor-pointer`, { 'border-selected': isSelected }]" @click="$emit('select')">
        <div class="flex items-center h-full">
            <div 
                :class="[`flex items-center justify-center border border-gray-300 rounded-full w-7 h-7 mr-5`, { 'bg-selected': isSelected }]">
                <div v-if="isSelected" class="flex items-center justify-center border border-gray-300 rounded-full w-2 h-2 bg-white" />
            </div>
            <slot />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'CardSelect',
	props: {
		isSelected: {
			type: Boolean,
			default: false
		}
	},
	setup() {
        
	},
})
</script>

<style lang="scss" scoped>
.border-selected {
    border-color: $primary-color;
}
.bg-selected {
    background: $primary-color;
}
</style>
