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
                    htmlSourceCode: `    <div class="skeleton-list-panel-wrapper">
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
</div>`,
                    cssSourceCode: `<style>
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