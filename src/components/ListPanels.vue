<template>
    <div>
        <div class="h4 my-3 text-center">
            List Panels
        </div>
        <div class="skeleton-list-panel"></div>
        <div class="skeleton-list-panel"></div>
        <div class="skeleton-list-panel"></div>
        <div class="skeleton-list-panel"></div>
        <div class="skeleton-list-panel"></div>
    </div>
</template>

<script>
    export default {
        name: 'ListPanels'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .skeleton-list-panel {
        width: 100%;
        height: 50px;
        background: #ccc;
        margin: 15px 0;
        min-width: 300px;
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