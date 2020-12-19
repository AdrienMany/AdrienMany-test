<template>
    <article class="article-container">
        <a :href="article.URL" class="article-title">
            {{ article.title }}
        </a>
        <p>{{ article.lead }}</p>
        <HomeArticleSmallThumbnail
                :thumbnail="article.thumbnail"
                :folder="article.folder"
                :date="article.date.modified"
        ></HomeArticleSmallThumbnail>
    </article>
</template>

<script>
    import HomeArticleSmallThumbnail from "@/components/Home/Articles/HomeArticleSmallThumbnail";
    export default {
        name: "HomeArticle",
        components: {
          HomeArticleSmallThumbnail
        },
        props: {
            article: {
                type: Object,
                default: null,
            }
        },
    }
</script>

<style scoped>
    .article-container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 350px;
        text-align: left;
        cursor: pointer;
    }
    .article-title {
        font-family: Source Sans Pro, sans-serif;
        font-size: 22px;
        line-height: 1.25;
        font-weight: 700;
        text-decoration: none;
        color: rgb(50, 50, 50);
        padding: 10px 15px;
    }
    .article-container:hover .article-title {
        color: #14f032;
        transition: all .25s;
    }
    .article-container:hover /deep/ .thumbnail-image {
        transform: scale(1.1);
    }
    @media screen and (max-width: 1160px) {
        .article-container {
            width: calc(50vw - 30px);
        }
    }
    @media screen and (max-width: 720px) {
        .article-container {
            width: 100%;
        }
    }
</style>