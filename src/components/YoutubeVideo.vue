<template>
    <AppBrowserPanel :sourceCode="sourceCode">
        <div>
            <div class="h4 my-3 text-center">
                Youtube Video
            </div>
            <div class="skeleton-yt-card">
                <div class="skeleton-yt-header">
                    <div class="skeleton-yt-img"></div>
                </div>
                <div class="skeleton-yt-footer">
                    <div class="skeleton-yt-profile"></div>
                    <div class="skeleton-yt-content"></div>
                </div>
            </div>
        </div>
    </AppBrowserPanel>
</template>
<script>
    import YoutubeTemplate from "@/skeletonTemplates/YoutubeVideo"
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'YoutubeVideo',
        components: {
            AppBrowserPanel
        },
        data() {
            return {
                sourceCode: {
                    htmlSourceCode: YoutubeTemplate.htmlSourceCode,
                    cssSourceCode: YoutubeTemplate.cssSourceCode
                }
            }
        }
    }
</script>
<style scoped>
    .skeleton-yt-card {
        max-width: 250px;
        max-height: 300px;
        overflow: hidden;
        margin: 0 auto;
    }

    .skeleton-yt-header {
        background: rgba(0, 0, 0, .05);
        height: 150px;
    }

    .skeleton-yt-footer {
        margin-top: 10px;
        display: flex;
    }

    .skeleton-yt-profile {
        background-color: rgba(0, 0, 0, .05);
        border-radius: 100px;
        height: 36px;
        width: 36px;
    }

    .skeleton-yt-content {
        height: 150px;
        width: 200px;
        background-image: linear-gradient( rgba(0, 0, 0, .05) 20px, transparent 0), linear-gradient( rgba(0, 0, 0, .05) 20px, transparent 0);
        background-size: 100px auto, 150px auto;
        background-repeat: no-repeat;
        background-position: 10px 0, 10px 30px;
    }
</style>