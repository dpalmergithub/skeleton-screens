<template>
    <AppBrowserPanel :sourceCode="sourceCode">
        <div>
            <div class="h4 my-3 text-center">
                Profile Circle Shimmer
            </div>
            <div class="skeleton-profile-circle-shimmer"></div>
        </div>
    </AppBrowserPanel>
</template>
<script>
    import ProfileShimmerTemplate from "@/skeletonTemplates/ProfileShimmer"
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'ProfileCircleShimmer',
        components: {
            AppBrowserPanel
        },
        data() {
            return {
                sourceCode: {
                    htmlSourceCode: ProfileShimmerTemplate.htmlSourceCode,
                    cssSourceCode: ProfileShimmerTemplate.cssSourceCode
                }
            }
        }
    }
</script>
<style scoped>
    .skeleton-profile-circle-shimmer {
        animation: shimmer 2s infinite;
        background: #ddd linear-gradient(to right, rgba(255, 255, 255, .10) 5%, rgba(255, 255, 255, .30) 10%, rgba(255, 255, 255, .50) 15%);
        background-size: 150px 150px;
        background-repeat: no-repeat;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin: 0 auto;
    }

    @keyframes shimmer {
        0% {
            background-position: -500px 0;
        }
        100% {
            background-position: 500px 0;
        }
    }
</style>