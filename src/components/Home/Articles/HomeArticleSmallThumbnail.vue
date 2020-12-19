<template>
    <div class="thumbnail-wrapper">
        <img
                :src="thumbnailImageSize(thumbnail.URL)"
                :alt="thumbnail.title"
                class="thumbnail-image"
        >
        <HomeArticleThumbnailFolderBar
                :name="folder.name"
                :url="folder.url"
                :date="date"
        ></HomeArticleThumbnailFolderBar>
    </div>
</template>

<script>
    import HomeArticleThumbnailFolderBar from "@/components/Home/Articles/HomeArticleThumbnailFolderBar";

    export default {
        name: "HomeArticleSmallThumbnail",
        components: { HomeArticleThumbnailFolderBar },
        props: {
            thumbnail: {
                type: Object,
                default: null,
            },
            folder: {
                type: Object,
                default: null,
            },
            date: {
                type: String,
                default: ''
            }
        },
        methods: {
            thumbnailImageSize(articleUrl) {
                // FORMAT IMG URL FOR THUMBNAIL SIZE
                return articleUrl.replace('{size}', 'thumb');
            },
        },
    }
</script>

<style scoped>
    .thumbnail-wrapper {
        position: relative;
        width: 100%;
        padding-top: 58%;
        z-index: 1;
        background: #b9b9b9;
        pointer-events: none;
        overflow: hidden;
        border-radius: 30px 30px 30px 0;
    }
    .thumbnail-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .25s, opacity .2s, -webkit-transform .25s;
    }
</style>