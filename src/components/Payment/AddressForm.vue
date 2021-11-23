<template>
    <div class="address-form">
        <div class="font-semibold text-sm">ที่อยู่ในกรจัดส่ง</div>
        <div class="border-b-2 my-3" />
        <form>
            <div class="flex w-3/4">
                <div class="flex flex-col w-1/2 pr-3">
                    <label for="firstname">ชื่อ</label>
                    <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="firstname" placeholder="ชื่อ" />
                </div>
                <div class="flex flex-col w-1/2 pl-3">
                    <label for="lastname">นามสกุล</label>
                    <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="lastname" placeholder="นามสกุล" />
                </div>
            </div>
            <div class="flex flex-col mt-2 w-3/4">
                <label for="country">ประเทศ</label>
                <div class="relative">
                    <VueFeather class="absolute right-3 top-2/4 text-gray-500 center pointer-events-none" type="chevron-down" size="22" />
                    <select class="pl-3 pr-8 mt-2 h-10 w-full rounded-3xl border border focus:outline-none rounded" name="country">
                        <option value=""></option>
                        <option value="thailand">Thailand</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col mt-2 w-3/4">
                <label for="address">ที่อยู่ <span class="text-red-500">(บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)</span></label>
                <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="address" placeholder="ที่อยู่" />
            </div>
            <div class="flex mt-2 w-3/4">
                <div class="flex flex-col w-1/2 pr-3">
                    <label for="sub-district">แขวง/ตำบล</label>
                    <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="sub-district" placeholder="แขวง/ตำบล" />
                </div>
                <div class="flex flex-col w-1/2 pl-3">
                    <label for="district">เขต/อำเภอ</label>
                    <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="district" placeholder="เขต/อำเภอ" />
                </div>
            </div>
            <div class="flex mt-2 w-3/4">
                <div class="flex flex-col w-1/2 pr-3">
                    <label for="province">จังหวัด</label>
                    <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="province" placeholder="จังหวัด" />
                </div>
                <div class="flex flex-col w-1/2 pl-3">
                    <label for="zipcode">รหัสไปรษณีย์</label>
                    <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="zipcode" placeholder="รหัสไปรษณีย์" />
                </div>
            </div>
            <div class="flex flex-col mt-2 w-3/4">
                <label for="phonenumber">เบอร์ติด่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)</label>
                <input class="pl-3 pr-1 mt-2 h-10 rounded-3xl border border focus:outline-none rounded" type="text" name="phonenumber" placeholder="เบอร์ติด่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)" />
            </div>
        </form>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AddressForm',
	setup() {
        
	},
})
</script>

<style lang="scss" scoped>
.address-form {
    label, input {
        font-family: Arial, Helvetica, sans-serif;
    }
    select {
        -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari and Chrome */
        appearance:none;
    }
    .center {
        transform: translateY(-25%);
    }
}
</style>
