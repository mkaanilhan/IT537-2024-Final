<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<template>
<div class="grid justify-start gap-4 items-items-center">
    <div class="mx-0 border border-red-800">
        <img src="https://img.icons8.com/?size=100&id=cMLQ2oh5S3TB&format=png&color=000000" alt="steam" class="w-6 md:w-12 lg:w-24">
    </div>
    <div class="border border-red-600 mx-0 lg:flex sm:grid items-center">
        <div>
            <img src="https://img.icons8.com/?size=100&id=14096&format=png&color=000000" alt="home" class="w-4 md:w-8 ">
        </div>
        <div class="max-lg:hidden lg:text-xl mx-2 ">
            Home
        </div>
    </div>
    <div class="cursor-pointer border border-red-600 mx-0">
        <RouterLink to="/cartView" class="lg:flex sm:grid">
            <div>
                <img src="https://img.icons8.com/?size=100&id=P6ZYIof6BwLW&format=png&color=000000" alt="home" class="w-4 md:w-8 ">
            </div>
            <div class="max-lg:hidden lg:text-xl mx-2">
                Store
            </div>
        </RouterLink>
    </div>
    <div class="mt-96 mb-2 mx-2">
        <div class="flex items-center">
            <img src="https://img.icons8.com/?size=100&id=59996&format=png&color=000000" alt="steam" class="w-4 lg:w-8">
            <div class="max-lg:hidden">
                Settings
            </div>
        </div>
        <div class="flex items-center">
            <img src="https://img.icons8.com/?size=100&id=11727&format=png&color=000000" alt="steam" class="w-4 lg:w-8">
            <div class="max-lg:hidden">
                Account
            </div>
        </div>
        <div class="flex items-center">
            <img src="https://img.icons8.com/?size=100&id=IchwUEgoxNcw&format=png&color=000000" alt="steam" class="w-4 lg:w-8">
            <div class="max-lg:hidden">
                Help
            </div>
        </div>
    </div>
</div>
</template>
