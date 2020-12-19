<template>
    <section class="articles-list-container">
        <!-- TODO : ADD LOADER V-IF ARTICLES ARE NULL -->
        <HomeArticle
                v-for="(article, index) in articles"
                :article="article"
                :key="index"
        ></HomeArticle>
    </section>
</template>

<script>
    import HomeArticle from "@/components/Home/Articles/HomeArticle";

    import axios from 'axios';

    export default {
        name: "HomeArticlesLine",
        components: {
          HomeArticle,
        },
        data() {
            return {
                apiUrl: 'https://api.melty.fr/v1/fr/articles/',
                articles: null,
            }
        },
        created() {
          this.fetchArticles();
        },
        methods: {
            fetchArticles() {
                axios.get(this.apiUrl)
                    .then(response => {
                        // TODO : ADD LOADER BEFORE DATA ARE SET
                        this.articles = response.data.items.slice(0, 3);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .then(() => {
                        // TODO : DISPLAY ERROR MESSAGE
                    })
            },
        }
    }
</script>

<style scoped>
    .articles-list-container {
        width: 1140px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 1160px) {
        .articles-list-container {
            width: 100%;
            flex-wrap: wrap;
        }
    }
</style>