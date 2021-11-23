<template>
    <div class="flex justify-between">
        <div class="text-2xl font-bold">{{ title }}</div>
        <div class="text-sm underline cursor-pointer">{{ actionText }}</div>
    </div>
    <vueper-slides
        class="no-shadow"
        :visible-slides="5"
        slide-multiple
        :gap="3"
        :dragging-distance="200"
        :bullets="false"
        :infinite="false">
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
        <vueper-slide v-for="(product, i) in productList" :key="i">
            <template #content>
                <div class="product-detail py-1 px-1">
                    <div class="wrapper py-2 px-3 relative">
                        <div class="option absolute top-3 right-2 flex flex-col">
                            <VueFeather class="border-2 border-gray-300 rounded-full p-1 cursor-pointer" type="heart" size="16" />
                            <VueFeather class="border-2 border-gray-300 rounded-full mt-1 p-1 cursor-pointer" type="bar-chart-2" size="16" />
                        </div>
                        <div class="flex items-center">
                            <VueFeather class="bg-success rounded-full mr-2" type="check" size="16" />
                            <span class="text-success">มีสินค้า</span>
                        </div>
                        <img class="image mx-auto mt-2" :src="product.images[0].image" :alt="`product-image-${i}`" />
                        <button 
                            class="flex items-center justify-center btn-add rounded-full text-base py-2 px-3 mx-auto"
                            @click="$router.push(`/product/${product.id}`)">
                            <VueFeather class="transform rotate-y-180 align-middle mr-2" type="shopping-cart" size="20" />
                            <span class="font-semibold">Add To Cart</span>
                        </button>
                        <div class="flex justify-between mt-2">
                            <div class="rating">
                                <VueFeather 
                                    v-for="i in 5" 
                                    :key="i" 
                                    type="star" 
                                    size="16" 
                                    :fill="product.rating >= i ? '#e9a426' : '#c4c4c4'" />
                            </div>
                            <div class="text-gray-400 text-xs">
                                Reviews ({{ product.review }})
                            </div>
                        </div>
                        <div class="text-sm font-semibold">{{ product.name }}</div>
                        <div class="line-through text-gray-400 text-sm mt-2">THB{{ product.price }}</div>
                        <div class="font-bold">THB{{ product.sale }}</div>
                    </div>
                    </div>
            </template>
        </vueper-slide>
    </vueper-slides>
</template>

<script>
import { defineComponent } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default defineComponent({
	name: 'ProductList',
	components: {
		VueperSlides,
		VueperSlide
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		actionText: {
			type: String,
			default: 'ดูสินค้าขายดีทั้งหมด'
		},
		productList: {
			type: Array,
			default: () => []
		}
	}
})
</script>

<style lang="scss" scoped>
:deep(.vueperslides__arrow--prev) {
    left: 0;
}
:deep(.vueperslides__arrow--next) {
    right: 0;
}
:deep([class*="feather-chevron-"]) {
    color: #ffffff;
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
.product-detail {
    .wrapper {
        .rotate-y-180 {
            transform: rotateY(180deg);
        }
        .option {
            display: none;
            :deep(.feather) {
                color: rgba(156, 163, 175, 1);
            }
        }
        .btn-add {
            display: none;
            background: transparent;
            border: 2px solid $primary-color;
            color: $primary-color;
        }
        &:hover {
            background: #ffffff;
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
            .option {
                display: flex;
            }
            .btn-add {
                display: block;
            }
        }
        .bg-success {
            background: $success-color;
            :deep(.feather-check) {
                color: #ffffff
            }
        }
        .text-success {
            color: $success-color;
        }
        >.image {
            width: 130px;
            height: auto;
            object-fit: cover;
            pointer-events: none;
        }
        .rating {
            :deep(.feather-star) {
                color: transparent;
            }
        }
    }
}
</style>
