const template = {};
template.htmlSourceCode = `
<div class="skeleton-panel">
    <div class="skeleton-panel-title"></div>
    <div class="skeleton-panel-content"></div>
    <div class="skeleton-panel-btn"></div>
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
    max-width: 100px;
}

.skeleton-panel-content {
    max-width: 180px;
}

.skeleton-panel-btn {
    max-width: 50px;
}

.skeleton-panel-title,
.skeleton-panel-content,
.skeleton-panel-btn {
    border-radius: 100px;
    height: 20px;
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
</style>`.trim();

export default template;