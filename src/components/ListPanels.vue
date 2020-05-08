<template>
    <AppBrowserPanel :sourceCode="sourceCode">
        <div>
            <div class="h4 my-3 text-center">
                List Panels
            </div>
            <div class="skeleton-list-panel-wrapper">
                <div class="skeleton-list-panel"></div>
                <div class="skeleton-list-panel"></div>
                <div class="skeleton-list-panel"></div>
                <div class="skeleton-list-panel"></div>
                <div class="skeleton-list-panel"></div>
            </div>
        </div>
    </AppBrowserPanel>
</template>

<script>
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'ListPanels',
        components: {
            AppBrowserPanel
        },
        data() {
            return {
                sourceCode: {
                    htmlSourceCode: `    <div class="skeleton-panel">
        <div class="skeleton-panel-title"></div>
        <div class="skeleton-panel-content"></div>
        <div class="skeleton-panel-btn"></div>
    </div>`,
                    cssSourceCode: `<style>
    .skeleton-panel {
        width: 100%;
        padding: 15px;
        border: thin solid #e6e6e6;
        border-radius: 3px;
        overflow: hidden;
    }

    .skeleton-panel-title {
        max-width: 200px;
    }

    .skeleton-panel-content {
        max-width: 300px;
    }

    .skeleton-panel-btn {
        max-width: 50px;
    }

    .skeleton-panel-title,
    .skeleton-panel-content,
    .skeleton-panel-btn {
        border-radius: 100px;
        height: 25px;
        margin: 15px 0;
        background-color: #e1e1e1;
        opacity: 0.5;
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
</style>`
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .skeleton-list-panel-wrapper {
        padding: 10px;
    }

    .skeleton-list-panel {
        max-width: 80%;
        height: 50px;
        background: #ccc;
        margin: 15px auto;
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