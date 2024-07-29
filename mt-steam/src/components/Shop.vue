<script>
import {
    useGameStore
} from "../stores/Game.js";
export default {
    data() {
        return {
            store: useGameStore(),
            name: "",
            cardNumber: "",
            expireDate: "",
            cvv: ""
        }
    },
    methods: {
        calculateTotalPrice() {
            let price = 0
            for (let index = 0; index < this.store.numberOfItem; index++) {
                const element = this.store.gameDataList[index]
                price += element.price_overview.final
            }
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2
            });
            return formatter.format(price / 100);
        }
    },
}
</script>

<template>
<div class="flex gap-2 mx-2 my-2 justify-start shadow-2xl rounded-lg items-center bg-stone-100">

    <div class="paymentInfo w-96 h-96 shadow-xl p-2 mx-2 my-2 content-center rounded-lg border max-lg:text-xs">
        <h2 class="underline">Kart Bilgileri</h2>
        <div class="cardOwner ">
            <div class=" ">Card Owner Full Name</div>
            <input type="text" v-model="name" class="border border-black-100 rounded-lg text-md w-full">
        </div>
        <div class="cardNumber ">
            <div class=" ">Card Number</div>
            <input type="text" v-model="cardNumber" class="border border-black-100 rounded-lg text-md w-full">
        </div>
        <div class="expireDate ">
            <div class=" ">Expire Date</div>
            <input type="text" v-model="expireDate" class="border border-black-100 rounded-lg text-md w-full">
        </div>
        <div class="cvv ">
            <div class=" ">cvv</div>
            <input type="text" v-model="cvv" class="border border-black-100 rounded-lg text-md w-full">
        </div>

        <div class="inline flex items-center gap-2 justify-end">
            <div class="order my-2 ">
                <button class="bg-green-200 rounded-lg p-2">Order</button>
            </div>
            <div class="totalPrice ">
                Total: {{this.calculateTotalPrice()}}
            </div>
        </div>
    </div>

    <div class="product h-96 border shadow-xl rounded-lg w-full overflow-y-auto mr-2 bg-stone-100">

        <div class="flex justify-between mx-2 items-center wrap-text">

            <h2 class="underline max-lg:text-xs">Added Products</h2>
            <div class="flex justify-end gap-2">
                <div class="underline cursor-pointer text-xs">
                    <RouterLink to="/">
                        Continue Shopping
                    </RouterLink>
                </div>
                <button class="underline cursor-pointer text-xs" @click="this.store.removeAllProduct()">
                    Remove All
                </button>
            </div>
        </div>

        <div class="products flex justify-between shadow-md rounded-lg gap-2 my-2 mx-2 items-center hover:bg-green-100" 
        v-for="(game,index) in this.store.gameDataList" :key="index">

            <div class="flex justify-start items-center gap-2">
                <div class="capsuleImg max-sm:w-24 h-16 content-center">
                    <img :src="`${game.capsule_imagev5}`" alt="image" class="rounded-lg">
                </div>
                <div class="gameName max-lg:hidden">
                    {{game.name}}
                </div>
            </div>

            <div class="flex items-center justify-end gap-4">

                <div class="priceInfo flex gap-2 items-center justify-between">
                    <div class="discount max-lg:text-xs max-md:hidden" v-if="game.price_overview.discount_percent!==0">
                        Discount: %{{game.price_overview.discount_percent}}
                    </div>
                    <div class="inline-grid px-2 max-lg:text-xs">
                        <div class="price line-through text-xs">
                            {{game.price_overview.initial_formatted}}
                        </div>
                        <div class="finalPrice ">
                            {{game.price_overview.final_formatted}}
                        </div>
                    </div>
                </div>

                <div class="flex mr-2 text-xs gap-2">
                    <button class="underline" @click="this.store.removeProductsFromCart(index)">Remove</button>
                </div>

            </div>

        </div>
    </div>

</div>
</template>
