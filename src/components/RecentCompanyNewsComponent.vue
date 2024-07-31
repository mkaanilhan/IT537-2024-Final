<template>
    <div class="flex-col justify-center m-4 gap-2 px-4 py-2 bg-white/5 rounded-xl">
        <div class="mx-2 my-4 flex justify-between">
            <div class="text-xl"><p>Recent Company News</p></div>
            <div v-if="totalPages > 1" class="flex justify-center">
                <button @click="currentPage--" :disabled="currentPage === 1" class="px-1">◀️</button>
                {{currentPage}} / {{totalPages}}
                <button @click="currentPage++" :disabled="currentPage === totalPages" class="px-1">▶️</button>
            </div>
        </div>
        <hr class="separator">
        <div class="px-8">
            <div v-for="(article, index) in paginatedNews" :key="article.id" class="my-8">
                <div class="flex items-center mb-2">
                    <img :src="article.image" :alt="article.headline" class="w-24 h-24 mr-4">
                    <div>
                        <a :href="article.url" target="_blank" class="text-hilite-text hover:underline text-lg font-bold">{{ article.headline }}</a>
                        <p class="text-sm text-dimmed-text">{{ article.source }} - {{ new Date(article.datetime * 1000).toLocaleDateString() }}</p>
                    </div>
                </div>
                <p>{{ article.summary }}</p>
            </div>
        </div>
    </div>
</template>
  
  <script>
    export default {
        name: 'RecentCompanyNewsComponent',
        props: {
            symbol: {required: true},
            stockData: {required: true},
        },
        data() {
            return {
            currentPage: 1,
            headlinesPerPage: 3,
            };
        },
        computed: {
            paginatedNews() {
                const start = (this.currentPage - 1) * this.headlinesPerPage;
                const end = start + this.headlinesPerPage;
                return this.stockData.news.slice(start, end);
            },
            totalPages() {
                return Math.ceil(this.stockData.news.length / this.headlinesPerPage);
            },
        },
    };
  </script>
