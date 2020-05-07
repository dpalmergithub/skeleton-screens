<template>
    <div class="app-panel">
        <div class="app-panel-header d-flex align-items-center">
            <div class="app-panel-header-red-circle"></div>
            <div class="app-panel-header-orange-circle"></div>
            <div class="app-panel-header-green-circle"></div>
            <b-button class="ml-auto mr-1 btn-sm" variant="dark">Source</b-button>
        </div>
        <div class="p-2">
            <div class="d-flex align-items-center flex-column justify-content-center">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AppBrowserPanel'
    }
</script>
<style scoped>
    .app-panel {
        border: thin solid rgba(0, 0, 0, .10);
        border-radius: 6px;
        width: 100%;
        min-height: 250px;
        margin: 15px auto;
    }

    .app-panel-header {
        height: 50px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.05);
        padding-left: 10px;
    }

    .app-panel-header-red-circle {
        background-color: rgb(255, 65, 54);
        border-radius: 100%;
        height: 14px;
        margin-right: 4px;
        width: 14px;
    }

    .app-panel-header-orange-circle {
        background-color: rgb(255, 168, 54);
        border-radius: 100%;
        height: 14px;
        margin-right: 4px;
        width: 14px;
    }

    .app-panel-header-green-circle {
        background-color: rgb(32, 167, 20);
        border-radius: 100%;
        height: 14px;
        margin-right: 4px;
        width: 14px;
    }
</style>