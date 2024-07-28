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
<div class="flex gap-2 mx-2 my-2 justify-start border-2 border-green-700 items-center">

    <div class="paymentInfo w-96 h-96 border-2 border-blue-700 p-2 content-center">

        <h2 class="underline">Kart Bilgileri</h2>

        <div class="cardOwner ">

            <div class=" ">Card Owner Full Name</div>
            <input type="text" v-model="name" class="border border-black-100 rounded-lg text-md">

        </div>

        <div class="cardNumber ">

            <div class=" ">Card Number</div>
            <input type="text" v-model="cardNumber" class="border border-black-100 rounded-lg text-md">

        </div>

        <div class="expireDate ">

            <div class=" ">Expire Date</div>
            <input type="text" v-model="expireDate" class="border border-black-100 rounded-lg text-md">

        </div>

        <div class="cvv ">

            <div class=" ">cvv</div>
            <input type="text" v-model="cvv" class="border border-black-100 rounded-lg text-md">

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

    <div class="product h-96 border-2 border-red-600 w-full">

        <div class="flex justify-between mx-2 items-center">

            <h2 class="underline">Added Products</h2>
            <div class="underline cursor-pointer text-xs">
                Remove All
            </div>

        </div>

        <div class="products flex justify-between border border-green-500 gap-2 my-2 mx-2 items-center" v-for="(game,index) in this.store.gameDataList" :key="index">

            <div class="flex justify-start items-center gap-2">
                <div class="capsuleImg ">
                    <img :src="`${game.capsule_imagev5}`" alt="image">
                </div>
                <div class="gameName ">
                    {{game.name}}
                </div>
            </div>

            <div class="flex items-center jsutify-end gap-4">

                <div class="priceInfo flex gap-2 items-center">
                    <div class="discount ">
                        {{game.price_overview.discount_percent}}
                    </div>
                    <div class="inline-grid content-center">
                        <div class="price line-through">
                            {{game.price_overview.initial_formatted}}
                        </div>
                        <div class="finalPrice ">
                            {{game.price_overview.final_formatted}}
                        </div>
                    </div>
                </div>

                <div class="flex mr-2 text-xs gap-2">
                    <div class="add underline cursor-pointer">Add</div>
                    <div class="remove underline cursor-pointer">Remove</div>
                </div>

            </div>

        </div>
    </div>

</div>
</template>
