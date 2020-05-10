<template>
    <AppBrowserPanel :sourceCode="sourceCode">
        <div>
            <div class="h4 my-3 text-center">
                Image Card
            </div>
            <div class="skeleton-img-card">
                <div class="skeleton-img-card-image"></div>
                <div class="skeleton-img-card-content">
                </div>
                <div class="skeleton-img-card-btn"></div>
            </div>
        </div>
    </AppBrowserPanel>
</template>
<script>
    import ImageCardTemplate from "@/skeletonTemplates/ImageCard"
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'ImageCard',
        components: {
            AppBrowserPanel
        },
        data() {
            return {
                sourceCode: {
                    htmlSourceCode: ImageCardTemplate.htmlSourceCode,
                    cssSourceCode: ImageCardTemplate.cssSourceCode
                }
            }
        }
    }
</script>
<style scoped>
    .skeleton-img-card {
        height: 300px;
        max-width: 200px;
        border: thin solid #e6e6e6;
        border-radius: 6px;
        overflow: hidden;
        margin: 0 auto;
    }

    .skeleton-img-card-image {
        width: 100%;
        height: 100px;
        background: #ddd;
        opacity: 0.5;
    }

    .skeleton-img-card-content {
        height: 150px;
        background-image: linear-gradient( lightgray 20px, transparent 0), linear-gradient( lightgray 20px, transparent 0), linear-gradient( lightgray 20px, transparent 0);
        background-size: 100px 20px, 130px 20px, 150px 20px;
        background-repeat: no-repeat;
        background-position: 10px 30px, 10px 60px, 10px 90px
    }

    .skeleton-img-card-btn {
        background: #ddd;
        opacity: 0.5;
        width: 50px;
        padding: 10px;
        margin: 10px auto;
    }

    .skeleton-img-card-image,
    .skeleton-img-card-content,
    .skeleton-img-card-btn {
        animation: fading 1.5s infinite;
    }


    @keyframes fading {
        0% {
            opacity: 0.5;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0.5;
        }
    }
</style>