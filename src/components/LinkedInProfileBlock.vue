<template>
    <AppBrowserPanel>
        <div>
            <div class="h4 my-3 text-center">
                LinkedIn Profile Block
            </div>
            <div class="skeleton-linkedin-profile-block-wrapper">
                <div class="skeleton-linkedin-profile-block-header"></div>
                <div class="skeleton-linkedin-profile-block-content"></div>
            </div>
        </div>
    </AppBrowserPanel>
</template>

<script>
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'LinkedInProfileBlock',
        components: {
            AppBrowserPanel
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .skeleton-linkedin-profile-block-wrapper {
        border-radius: 6px;
        min-height: 350px;
        max-width: 350px;
        box-shadow: 0 0 4px 1px rgba(0, 0, 0, .10);

    }

    .skeleton-linkedin-profile-block-header {
        width: 100%;
        background: #f3f6f8;
        height: 54px;
        position: relative;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
    }

    .skeleton-linkedin-profile-block-header:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50px;
        border-bottom-left-radius: 36px;
        /* 100px of height + 10px of border */
        border-bottom-right-radius: 36px;
        /* 100px of height + 10px of border */
        border: 36px solid #f3f6f8;
        border-bottom: 0;
    }

    .skeleton-linkedin-profile-block-content {
        min-height: 100px;
        /*rgba(255, 255, 255, .20)*/
        background-image: linear-gradient( #f3f6f8 20px, transparent 0), linear-gradient( #f3f6f8 20px, transparent 0);
        background-size: 130px 20px, 150px 20px;
        background-repeat: no-repeat;
        background-position: 50% 50px, 50% 80px;
    }
</style>