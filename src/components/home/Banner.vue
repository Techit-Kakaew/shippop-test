<template>
    <div class="banner">
        <vueper-slides lazy lazy-load-on-drag :bullets="false">
            <template #arrow-left>
                <div class="arrow-left relative">
                    <VueFeather class="chevron-left absolute" type="chevron-left" />
                </div>
            </template>

            <template #arrow-right>
                <div class="arrow-right relative">
                    <VueFeather class="chevron-right absolute" type="chevron-right" />
                </div>
            </template>
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image" />
        </vueper-slides>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default defineComponent({
	name: 'Banner',
	components: {
		VueperSlides,
		VueperSlide
	},
	setup() {
		const slides =  [
			{
				image: 'https://picsum.photos/id/10/1200/720'
			},
			{
				image: 'https://picsum.photos/id/100/1200/720'
			},
			{
				image: 'https://picsum.photos/id/1000/1200/720'
			}
		]

		return {
			slides
		}
	},
})
</script>

<style lang="scss" scoped>
:deep(.vueperslides__arrow--prev) {
    left: 0;
}
:deep(.vueperslides__arrow--next) {
    right: 0;
}
[class*="arrow-"] {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 25px;
    background: #919397;
}
.arrow-left {
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
}
.arrow-right {
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;
}
</style>
