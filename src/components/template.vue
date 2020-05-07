<template>
    <AppBrowserPanel :sourceCode="sourceCode">
        <div>
            <div class="h4 my-3 text-center">
                Your Title Here
            </div>
            <!--your html here -->
        </div>
    </AppBrowserPanel>
</template>
<script>
    import AppBrowserPanel from "@/components/AppBrowserPanel"
    export default {
        name: 'DefaultTemplate',
        components: {
            AppBrowserPanel
        },
        data() {
            return {
                sourceCode: {
                    htmlSourceCode: "",
                    cssSourceCode: ""
                }
            }
        }
    }
</script>
<style scoped>
</style>