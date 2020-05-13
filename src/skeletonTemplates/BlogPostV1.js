const template = {};
template.htmlSourceCode = `
<div class="skeleton-panel">
    <div class="skeleton-panel-title"></div>
    <div class="skeleton-panel-content"></div>
</div>`.trim();

template.cssSourceCode = `
<style>
.skeleton-panel {
    max-width: 250px;
    padding: 15px;
    border: thin solid #e6e6e6;
    border-radius: 3px;
    overflow: hidden;
    margin: 0 auto;
}

.skeleton-panel-title {
    border-radius: 100px;
    max-width: 50px;
    height: 10px;
}

.skeleton-panel-content {
    height: 50px;
    margin: 5px 0;
    border-radius: 3px;
}

.skeleton-panel-title,
.skeleton-panel-content {
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
</style>`.trim();

export default template;