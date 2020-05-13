<template>
    <div class="app-panel shadow">
        <div class="app-panel-header d-flex align-items-center">
            <div class="app-panel-header-red-circle"></div>
            <div class="app-panel-header-orange-circle"></div>
            <div class="app-panel-header-green-circle"></div>
            <b-button class="ml-auto mr-1" variant="primary" @click="triggerModal()">Source</b-button>
        </div>
        <div class="pb-5">
            <!--d-flex align-items-center flex-column justify-content-center-->
            <div class="">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AppBrowserPanel',
        props: ["sourceCode"],
        methods: {
            triggerModal() {
                this.$root.$emit("changeSourceCode", this.sourceCode)
            }
        }
    }
</script>
<style scoped>
    .app-panel {
        border: thin solid rgba(0, 0, 0, .10);
        border-radius: 6px;
        width: 100%;
        min-height: 250px;
        margin: 0 auto;
    }

    .app-panel-header {
        height: 50px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.05);
        padding-left: 10px;
    }
</style>