<template>
    <div class="thumbnail-bar">
        <div class="thumbnail-category">
            <a :href="url">
                {{ name }}
            </a>
        </div>
        <div class="thumbnail-date">
            {{ dateDifference }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeArticleThumbnailFolderBar",
        props: {
            name: {
                  type: String,
                  default: "",
            },
            url: {
                type: String,
                default: "",
            },
            date: {
                type: String,
                default: "",
            }
        },
        computed: {
            dateDifference() {
                const date = Date.parse(this.date);
                const seconds = Math.floor((new Date() - date) / 1000);

                let interval = seconds / 31536000;

                if (interval > 1) {
                    return this.formatDateDifference(date, "an");
                }
                interval = seconds / 2592000;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "mois");
                }
                interval = seconds / 86400;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "jour");
                }
                interval = seconds / 3600;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "heure");
                }
                interval = seconds / 60;
                if (interval > 1) {
                    return this.formatDateDifference(interval, "minute");
                }
                return this.formatDateDifference(seconds, "seconde");
            }
        },
        methods: {
            formatDateDifference(date, stamp) {
                if (Math.floor(date) > 1 && stamp !== "mois") {
                    return "Il y a " + Math.floor(date) + " " + stamp + "s";
                } else {
                    return "Il y a " + Math.floor(date) + " " + stamp;
                }
            }
        }
    }
</script>

<style scoped>
    .thumbnail-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 34px;
        background: rgba(50,50,50,.7);
        backdrop-filter: blur(10px) saturate(300%);
        border-radius: 0;
        overflow: hidden;
        padding: 0 25px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .thumbnail-category a {
        position: relative;
        font-size: 11px;
        color: rgb(255, 255, 255);
        padding: 0 15px;
        overflow: hidden;
        text-decoration: none;
        pointer-events: all;
        transition: color .25s;
        line-height: 34px;
    }
    .thumbnail-category a::after {
        position: absolute;
        bottom: -10px;
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
        width: 100%;
    }
    .thumbnail-category:hover {
        color: black;
    }
    .thumbnail-date {
        font-size: 11px;
        color: rgb(255, 255, 255);
    }
</style>