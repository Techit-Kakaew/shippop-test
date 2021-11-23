<template>
    <header class="sticky top-0 z-50 w-full nav-header bg-white py-5 px-20 filter drop-shadow-lg">
        <nav class="flex items-center justify-between">
            <div 
                class="text-4xl font-bold mr-6 cursor-pointer" 
                @click="$router.push('/')">
                Book
            </div>
            <div v-if="isSearching" class="search relative flex-1">
                <VueFeather class="search-icon absolute top-2/4 right-5 primary-color" type="search" size="20" />
                <input
                    class="search-input pl-5 pr-12 border border-transparent focus:outline-none"
                    placeholder="ค้นหาสินค้า"
                />
            </div>
            <ul v-else class="flex flex-1 mr-auto">
                <li class="mx-5 text-base cursor-pointer" @click="$router.push('/')">สินค้าใหม่</li>
                <li class="mx-5 text-base cursor-pointer" @click="$router.push('/')">สินค้าขายดี</li>
                <li class="mx-5 text-base cursor-pointer" @click="$router.push('/')">สินค้าลดราคา</li>
                <li class="mx-5 text-base cursor-pointer" @click="$router.push('/')">สินค้าแนะนำ</li>
            </ul>
            <ul class="flex items-center">
                <li
                    class="mx-2 cursor-pointer"
                    @click="isSearching = !isSearching"
                >
                    <VueFeather class="align-middle" v-if="!isSearching" type="search" size="20" />
                    <VueFeather class="align-middle" v-else type="x" size="20" />
                </li>
                <li class="mx-2">
                    <div ref="cartDropdownRef" class="relative">
                        <div class="absolute flex notification items-center justify-center text-white z-10">
                            {{ cartList.length }}
                        </div>
                        <VueFeather 
                            class="transform rotate-y-180 align-middle cursor-pointer" 
                            type="shopping-cart" size="20" 
                            @click="isOpenCartDropdown = !isOpenCartDropdown" />
                        <transition name="slide-fade">
                            <div v-if="isOpenCartDropdown" class="dropdown absolute top-16 -right-8 bg-white w-96 py-5 filter drop-shadow-2xl">
                                <div class="header px-5">
                                    <div class="text-center font-bold text-lg">ตระกร้าของฉัน</div>
                                    <div class="text-center text-gray-400 text-sm">{{ cartList.length }} สินค้าในตระกร้า</div>
                                    <button 
                                        class="flex items-center justify-center btn-cart rounded-full text-base py-2 px-3 mx-auto mt-2 w-full"
                                        @click="$router.push('/cart'), isOpenCartDropdown = false">
                                        <span class="font-semibold">
                                            ดูหรือแก้ไขตะกร้าของฉัน
                                        </span>
                                    </button>
                                </div>
                                <div class="border-b my-3" />
                                <div class="body px-5 max-h-60 overflow-y-auto">
                                    <ul class="cart-list">
                                        <template v-if="cartList.length">
                                            <li 
                                                v-for="(product, i) in cartList" :key="i" 
                                                :class="[`flex justify-between`, { 'mt-2': i > 0 }]">
                                                <div class="flex items-center">
                                                    <div class="text-lg mr-2 w-9">{{ product.quantityInCart }} x</div>
                                                    <img class="product-image" src="https://picsum.photos/id/413/150/200" alt="" />
                                                    <div class="self-start ml-2 flex-1">{{ product.name }}</div>
                                                </div>
                                                <div class="flex flex-col action">
                                                    <VueFeather 
                                                        class="border border-gray-400 rounded-full p-1 cursor-pointer" 
                                                        type="x" 
                                                        size="12"
                                                        @click="removeCartProduct(product.id)" />
                                                    <VueFeather class="border border-gray-400 rounded-full p-1 cursor-pointer mt-2" type="edit-2" size="12" />
                                                </div>
                                            </li>
                                        </template>
                                        <template v-else>
                                            <li class="text-center">ไม่พบข้อมูลในตะกร้าสินค้า</li>
                                        </template>
                                    </ul>
                                </div>
                                <div class="border-b my-3" />
                                <div class="footer px-5">
                                    <div class="text-center font-semibold">
                                        <span class="text-gray-400 text-sm">ยอดรวม:</span> THB{{ formatDecimal(+totalPriceInCart) }}
                                    </div>
                                    <button 
                                        class="flex items-center justify-center btn-payment rounded-full text-base py-2 px-3 mx-auto mt-2 w-full"
                                        @click="$router.push('/payment'), isOpenCartDropdown = false">
                                        <span class="font-semibold text-white">ไปชำระเงิน</span>
                                    </button>
                                </div>
                            </div>
                        </transition>
                    </div>
                </li>
                <li class="mx-2 cursor-pointer">
                    <img class="rounded-full h-10 w-10" src="https://picsum.photos/id/237/100/100" alt="profile-image" />
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useProduct } from '@/use/useProduct'

export default defineComponent({
	name: 'Navbar',
	setup() {
		const { cartList, removeCartProduct, totalPriceInCart } = useProduct()
		const isSearching = ref(false)
		const isOpenCartDropdown = ref(false)
		const cartDropdownRef = ref(null)
		const checkClickOutside = (e) => {
			if (cartDropdownRef.value) {
				const isInside = cartDropdownRef.value.contains(e.target)
				if (!isInside) {
					isOpenCartDropdown.value = false
				}
			}
		}

		const formatDecimal = (number) => {
			return (Math.round(number * 100) / 100).toFixed(2)
		}

		watch(isOpenCartDropdown, (value) => {
			if(value) {
				document.addEventListener('click', checkClickOutside)
			} else {
				document.removeEventListener('click', checkClickOutside)
			}
		})


		return {
			cartList,
			removeCartProduct,
			totalPriceInCart,
			isSearching,
			isOpenCartDropdown,
			cartDropdownRef,
			formatDecimal
		}
	},
})
</script>


<style lang="scss" scoped>
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
.primary-color {
    color: $primary-color;
}
.nav-header {
    .rotate-y-180 {
        transform: rotateY(180deg);
    }
    .notification {
        right: -0.3125rem;
        top: -0.3125rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: $primary-color;
        font-size: 0.55rem;
    }
    .search {
        width: 100%;
        .search-icon {
            transform: translateY(-50%);
        }
        > .text-primary {
            color: rgba(1, 86, 255, 1);
        }
        > .search-input {
            width: 100%;
            height: 40px;
            background: #ebebeb;
            border-radius: 18px;
        }
    }
    .btn-cart {
        background: transparent;
        border: 2px solid $primary-color;
        color: $primary-color;
    }
    .btn-payment {
        background: $primary-color;
    }
    .cart-list {
        .product-image {
            width: 50px;
            height: auto;
            object-fit: cover;
        }
        .action {
            :deep(.feather) {
                color: rgba(156, 163, 175, 1);
            }
        }
    }
}
</style>