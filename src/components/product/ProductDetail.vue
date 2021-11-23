<template>
    <div class="product-detail">
        <div v-if="product" class="flex mt-5 px-20">
            <div class="w-1/4">
                <vueper-slides
                    ref="mainSlide"
                    :touchable="false"
                    fade
                    :autoplay="false"
                    :bullets="false"
                    :arrows="false"
                    fixed-height="400px"
                    @slide="subSlide.goToSlide($event.currentSlide.index, { emit: false })">
                    <vueper-slide
                        v-for="(slide, i) in product.images"
                        :key="i">
                        <template #content>
                            <img class="w-full h-full" :src="slide.image" />
                        </template>
                    </vueper-slide>
                </vueper-slides>

                <vueper-slides
                    class="no-shadow thumbnails mt-2"
                    ref="subSlide"
                    @slide="mainSlide.goToSlide($event.currentSlide.index, { emit: false })"
                    :visible-slides="product.images.length"
                    :bullets="false"
                    :touchable="false"
                    fixed-height="200px"
                    :gap="2.5"
                    :arrows="false">
                    <vueper-slide
                        v-for="(slide, i) in product.images"
                        :key="i"
                        @click="mainSlide.goToSlide(i)">
                        <template #content>
                            <img class="w-full h-full cursor-pointer" :src="slide.image" />
                        </template>
                    </vueper-slide>
                </vueper-slides>
            </div>
            <div class="pt-3 pl-12">
                <div class="text-3xl font-bold">{{ product.name }}</div>
                <ul class="mt-4">
                    <li>ผู้เขียน: {{ product.author }}</li>
                    <li>สำนักพิมพ์: {{ product.publisher }}</li>
                    <li>หมวดหมู่: {{ product.category }}</li>
                    <li>ประเภทของสินค้า: {{ product.type }}</li>
                    <li>บาร์โค้ด: {{ product.barcode }}</li>
                </ul>
                <div class="mt-10">
                    <span class="text-lg">ราคา</span>
                    <span class="text-2xl font-bold ml-2">THB{{ product.sale }}</span>
                    <span class="line-through text-gray-400 font-bold ml-2">THB{{ product.price }}</span>
                </div>
                <div class="flex items-center mt-7">
                    <input 
                        v-model="quantity"
                        class="quantity-input pl-6 pr-1 border border-transparent focus:outline-none rounded w-20"
                        type="number"
                        min="1" />
                    <button 
                        class="flex items-center justify-center btn-add rounded-full text-base py-2 px-3 ml-6 w-36"
                        @click="addProductToCart(product.id, quantity)">
                        <span class="text-white text-sm">Add</span>
                    </button>
                    <button class="flex items-center justify-center btn-wishlist rounded-full text-base py-2 px-3 ml-3 w-36">
                        <VueFeather class="p-1 text-white mr-4" type="heart" size="14" fill="#ffffff" />
                        <span class="text-white text-sm">Wishlist</span>
                    </button>
                </div>
                <div class="flex items-center mt-6">
                    <span>แชร์:</span>
                    <img class="ml-2 cursor-pointer" src="@/assets/social-icons/mail.png" alt="mail-icon" />
                    <img class="ml-2 cursor-pointer" src="@/assets/social-icons/tumblr.png" alt="mail-icon" />
                    <img class="ml-2 cursor-pointer" src="@/assets/social-icons/facebook.png" alt="mail-icon" />
                    <img class="ml-2 cursor-pointer" src="@/assets/social-icons/gmail.png" alt="mail-icon" />
                </div>
            </div>
        </div>
        <div v-if="product" class="mt-5 mb-12">
            <ul class="flex items-center px-20">
                <li 
                    v-for="tab in tabs"
                    :key="tab.id" 
                    :class="['relative', 'cursor-pointer', { 'ml-6': tab.id === 2 }]"
                    @click="currentTab = tab.id">
                    <span class="px-3">{{ tab.name }}</span>
                    <div :class="['absolute', 'bottom-0', 'w-full', {activeTab: currentTab === tab.id}]"></div>
                </li>
            </ul>
            <div class="border-b my-5" />
            <div v-if="currentTab === 1" class="px-20">
                <slot name="product-about" />
            </div>
            <div v-else class="px-20">
                <slot name="product-detail" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { useProduct } from '@/use/useProduct'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'ProductDetail',
	components: {
		VueperSlides,
		VueperSlide
	},
	setup() {
		const route = useRoute()
		const mainSlide = ref(null)
		const subSlide = ref(null)
		const quantity = ref(1)
		const currentTab = ref(1)
		const tabs = ref([
			{
				id: 1,
				name: 'เกี่ยวกับสินค้า'
			},
			{
				id: 2,
				name: 'รายละเอียด'
			}
		])
		const { productById: product, addProductToCart, cartList } = useProduct()

		watch(() => route.params?.id, () => {
			quantity.value = 1
		})

		return {
			mainSlide,
			subSlide,
			product,
			quantity,
			currentTab,
			tabs,
			addProductToCart,
			cartList
		}
	},
})
</script>

<style lang="scss" scoped>
.product-detail {
    .quantity-input {
        height: 40px;
        background: #ebebeb;
    }
    .btn-add {
        background: $primary-color;
    }
    .btn-wishlist {
        background: #f2994a;
    }
    .activeTab {
        border-bottom: 3px solid $primary-color;
    }
}
</style>
