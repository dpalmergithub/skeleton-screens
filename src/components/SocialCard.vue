<template>
    <AppBrowserPanel :sourceCode="sourceCode">
        <div>
            <div class="h4 my-3 text-center">
                Social Card
            </div>
            <div class="skeleton-social-card">
                <div class="skeleton-social-header">
                    <div class="skeleton-social-profile"></div>
                    <div class="skeleton-social-info">
                        <div class="skeleton-social-info-name"></div>
                        <div class="skeleton-social-info-date"></div>
                    </div>
                </div>
                <div class="skeleton-social-img"></div>
                <div class="skeleton-social-footer"></div>
            </div>
        </div>
    </AppBrowserPanel>
</template>
<script>
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'SocialCard',
        components: {
            AppBrowserPanel
        },
        data() {
            return {
                sourceCode: {
                    htmlSourceCode: `        <div class="skeleton-social-card">
            <div class="skeleton-social-header">
                <div class="skeleton-social-profile"></div>
                <div class="skeleton-social-info">
                    <div class="skeleton-social-info-name"></div>
                    <div class="skeleton-social-info-date"></div>
                </div>
            </div>
            <div class="skeleton-social-img"></div>
            <div class="skeleton-social-footer"></div>
        </div>`,
                    cssSourceCode: `<style>
.skeleton-social-card {
    min-height: 200px;
    background: #ffffff;
    border: thin solid #e6e6e6;
    border-radius: 3px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, .05);
    max-width: 200px;
    overflow: hidden;
    padding: 10px;
    margin: 0 auto;
}

.skeleton-social-header {
    max-height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.skeleton-social-profile {
    background: #e6e6e6;
    height: 36px;
    width: 36px;
    border-radius: 100px;
}

.skeleton-social-info {
    display: inline-block;
}

.skeleton-social-info-name {
    background: #e6e6e6;
    width: 50px;
    border-radius: 100px;
    height: 8px;
    margin: 10px;
}

.skeleton-social-info-date {
    background: #e6e6e6;
    width: 20px;
    border-radius: 100px;
    height: 8px;
    margin: 10px;
}

.skeleton-social-img {
    width: 100%;
    height: 150px;
    border-radius: 3px;
    animation: shimmer 2s infinite;
    background: #e6e6e6 linear-gradient(to right, rgba(255, 255, 255, .05) 5%, rgba(255, 255, 255, .10) 10%, rgba(255, 255, 255, .25) 15%);
    background-size: 50px 150px;
    background-repeat: no-repeat;
}

.skeleton-social-footer {
    width: 100%;
    height: 10px;
    background: #e6e6e6;
    border-radius: 100px;
    margin-top: 20px;
}

@keyframes shimmer {
    0% {
        background-position: -500px 0;
    }
    100% {
        background-position: 500px 0;
    }
}
</style>`
                }
            }
        }
    }
</script>
<style scoped>
    .skeleton-social-card {
        min-height: 200px;
        background: #ffffff;
        border: thin solid #e6e6e6;
        border-radius: 3px;
        box-shadow: 0 0 4px 1px rgba(0, 0, 0, .05);
        max-width: 200px;
        overflow: hidden;
        padding: 10px;
        margin: 0 auto;
    }

    .skeleton-social-header {
        max-height: 50px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .skeleton-social-profile {
        background: #e6e6e6;
        height: 36px;
        width: 36px;
        border-radius: 100px;
    }

    .skeleton-social-info {
        display: inline-block;
    }

    .skeleton-social-info-name {
        background: #e6e6e6;
        width: 50px;
        border-radius: 100px;
        height: 8px;
        margin: 10px;
    }

    .skeleton-social-info-date {
        background: #e6e6e6;
        width: 20px;
        border-radius: 100px;
        height: 8px;
        margin: 10px;
    }

    .skeleton-social-img {
        width: 100%;
        height: 150px;
        border-radius: 3px;
        animation: shimmer 2s infinite;
        background: #e6e6e6 linear-gradient(to right, rgba(255, 255, 255, .05) 5%, rgba(255, 255, 255, .10) 10%, rgba(255, 255, 255, .25) 15%);
        background-size: 50px 150px;
        background-repeat: no-repeat;
    }

    .skeleton-social-footer {
        width: 100%;
        height: 10px;
        background: #e6e6e6;
        border-radius: 100px;
        margin-top: 20px;
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