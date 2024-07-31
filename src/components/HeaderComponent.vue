<template>
    <div class="bg-transparent border-b-2 border-white/5">
        <div class="container mx-auto px-16 flex justify-between items-center w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
            <router-link :to="{ path: `/` }">
                <div class="flex gap-2 items-center">
                    <div>
                        <img src="../icons/7013430_finance_bank_piggy_business_money_icon.svg" alt="Piggy" class="w-16">
                    </div>
                    <div class="text-xl">
                        My Portfolio
                    </div>
                </div>
            </router-link>  
            <div class="flex gap-8">
                <router-link :to="{ path: `/about` }">
                    <nav class="flex">
                        <a class="text-lg hover:text-head-text">About</a>
                    </nav>
                </router-link>
                <router-link :to="{ path: `/settings` }">
                    <nav class="flex">
                        <a class="text-lg hover:text-head-text">Settings</a>
                    </nav>
                </router-link>
            </div>
        </div>
    </div>
</template>
