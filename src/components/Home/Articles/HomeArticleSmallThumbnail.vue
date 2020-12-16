<template>
    <div class="thumbnail-wrapper">
        <img
                :src="thumbnailImageSize(thumbnail.URL)"
                :alt="thumbnail.title"
                class="thumbnail-image"
        >
        <div class="thumbnail-bar">
            <div class="thumbnail-category">
                <a :href="folder.URL">
                    {{ folder.name }}
                </a>
            </div>
            <div class="thumbnail-date">
                {{ dateDifference }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeArticleSmallThumbnail",
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
        computed: {
            dateDifference() {
                var date = Date.parse(this.date);
                var seconds = Math.floor((new Date() - date) / 1000);

                var interval = seconds / 31536000;

                if (interval > 1) {
                    return this.formatDateDifference(date, "ans");
                }
                interval = seconds / 2592000;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "mois");
                }
                interval = seconds / 86400;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "jours");
                }
                interval = seconds / 3600;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "heures");
                }
                interval = seconds / 60;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "minutes");
                }
                return this.formatDateDifference(seconds, "secondes");
            }
        },
        methods: {
            thumbnailImageSize(articleUrl) {
                return articleUrl.replace('{size}', 'thumb');
            },
            formatDateDifference(date, stamp) {
                return "Il y a " + Math.floor(date) + " " + stamp;
            }
        },
    }
</script>

<style scoped>
    .thumbnail-wrapper {
        position: relative;
        width: 100%;
        padding-top: 58%;
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
        z-index: 1;
        background: #b9b9b9;
        pointer-events: none;
        overflow: hidden;
        border-radius: 30px;
    }
    .thumbnail-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -webkit-transition: opacity .2s,-webkit-transform .25s;
        transition: transform .25s,opacity .2s,-webkit-transform .25s;
    }
    .thumbnail-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 34px;
        background: rgba(50,50,50,.7);
        -webkit-backdrop-filter: blur(10px) saturate(300%);
        backdrop-filter: blur(10px) saturate(300%);
        border-radius: 0;
        overflow: hidden;
        padding: 0 25px 0 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .thumbnail-category a {
        position: relative;
        font-size: 11px;
        color: rgb(255, 255, 255);
        padding: 0 15px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-decoration: none;
        pointer-events: all;
        -webkit-transition: color .25s;
        transition: color .25s;
        line-height: 34px;
    }
    .thumbnail-category a::after {
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        content: "";
        width: 30px;
        height: 1px;
        background: #14f032;
        -webkit-transition: width .25s;
        transition: width .25s;
        pointer-events: none;
    }
    .thumbnail-category:hover a {
        color: #14f032;
    }
    .thumbnail-category:hover a::after {
        width: calc(100% + 30px);
    }
    .thumbnail-category:hover {
        color: black;
    }
    .thumbnail-date {
        font-size: 11px;
        color: rgb(255, 255, 255);
    }
</style>