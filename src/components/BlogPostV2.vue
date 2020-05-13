<template>
    <AppBrowserPanel :sourceCode="sourceCode">
        <div>
            <div class="h4 my-3 text-center">
                Blog Post V2
            </div>
            <div class="skeleton-panel">
                <div class="skeleton-panel-header">
                    <div class="skeleton-panel-profile"></div>
                    <div class="skeleton-panel-title"></div>
                </div>
                <div class="skeleton-panel-content-wrapper">
                    <div class="skeleton-panel-content" style="width:30%"></div>
                    <div class="skeleton-panel-content" style="width:60%"></div>
                    <div class="skeleton-panel-content" style="width:25%"></div>
                    <div class="skeleton-panel-content" style="width:10%"></div>
                    <div class="skeleton-panel-content" style="width:25%"></div>
                    <div class="skeleton-panel-content" style="width:20%"></div>
                    <div class="skeleton-panel-content" style="width:60%"></div>
                    <div class="skeleton-panel-content" style="width:30%"></div>
                </div>
                <div class="skeleton-panel-footer">
                    <div class="skeleton-panel-btn"></div>
                </div>
            </div>
        </div>
    </AppBrowserPanel>
</template>
<script>
    import BlogPostV2Template from "@/skeletonTemplates/BlogPostV2"
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'BlogPostV2',
        components: {
            AppBrowserPanel
        },
        data() {
            return {
                sourceCode: {
                    htmlSourceCode: BlogPostV2Template.htmlSourceCode,
                    cssSourceCode: BlogPostV2Template.cssSourceCode
                }
            }
        }
    }
</script>
<style scoped>
    .skeleton-panel {
        max-width: 250px;
        padding: 10px;
        border: thin solid #e6e6e6;
        border-radius: 3px;
        overflow: hidden;
        margin: 0 auto;
        min-height: 100px;
    }

    .skeleton-panel-profile {
        background: #e6e6e6;
        height: 16px;
        width: 16px;
        border-radius: 100px;
        display: inline-block;
        margin-right: 6px;
    }

    .skeleton-panel-title {
        display: inline-block;
        width: 50px;
        margin-bottom: 10px;
        vertical-align: middle;
    }

    .skeleton-panel-content-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .skeleton-panel-content {
        margin-bottom: 2px;
        margin-right: 2px;
        margin-bottom: 5px;
    }

    .skeleton-panel-footer {
        margin-top: 10px;
    }

    .skeleton-panel-btn {
        max-width: 40px;
        height: 15px;
        background-color: #e1e1e1;
        margin: 0 auto;
    }

    .skeleton-panel-title,
    .skeleton-panel-content {
        border-radius: 100px;
        height: 8px;
    }

    .skeleton-panel-profile,
    .skeleton-panel-title,
    .skeleton-panel-content,
    .skeleton-panel-btn {
        background-color: #e1e1e1;
        opacity: 0.5;
        animation: fading 1.5s infinite;
        transition: all 1.5s;
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