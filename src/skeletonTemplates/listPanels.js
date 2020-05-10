const template = {};
template.htmlSourceCode = `
<div class="skeleton-list-panel-wrapper">
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
    <div class="skeleton-list-panel"></div>
</div>`.trim();

template.cssSourceCode = `
<style>
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
</style>`.trim();

export default template;