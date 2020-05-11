const template = {};
template.htmlSourceCode = `
<div class="skeleton-mp-panel-wrapper">
<div class="skeleton-mp-panel-img"></div>
<div class="skeleton-mp-footer">
    <div class="skeleton-mp-progress-line"></div>
    <div class="skeleton-mp-btn-wrapper">
        <div class="skeleton-mp-back-btn"></div>
        <div class="skeleton-mp-play-btn"></div>
        <div class="skeleton-mp-skip-btn"></div>
    </div>
</div>
</div>`.trim();

template.cssSourceCode = `
<style>
.skeleton-mp-panel-wrapper {
    border: thin solid rgba(0, 0, 0, .05);
    height: 300px;
    width: 250px;
    margin: 0 auto;
    padding: 10px;
    overflow: hidden;
}

.skeleton-mp-panel-img {
    height: 200px;
    max-width: 250px;
    margin: 0 auto;
    background: rgba(0, 0, 0, .05);
    position: relative;
    overflow: hidden;

}

.skeleton-mp-panel-img:after {
    content: "";
    position: absolute;
    z-index: 0;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
    background: rgba(0, 0, 0, .05);
    ;
    background: linear-gradient( to right,
    rgba(255, 255, 255, 0.10) 0%,
    rgba(255, 255, 255, 0.50) 77%,
    rgba(255, 255, 255, 0.90) 92%,
    rgba(255, 255, 255, 0.0) 100%);
    animation: shimmer 1.5s infinite;
}

.skeleton-mp-panel-wrapper,
.skeleton-mp-panel-img {
    border-radius: 3px;
}

.skeleton-mp-progress-line {
    border-radius: 100px;
    width: 100%;
    height: 8px;
    background-color: rgba(0, 0, 0, .05);
    margin: 15px 0 20px 0;
}

.skeleton-mp-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    background: #ffffff;
    position: relative;
    z-index: 1;
}

.skeleton-mp-back-btn,
.skeleton-mp-play-btn,
.skeleton-mp-skip-btn {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 100px;
}

.skeleton-mp-back-btn,
.skeleton-mp-skip-btn {
    height: 16px;
    width: 16px;
}

.skeleton-mp-play-btn {
    height: 36px;
    width: 36px;
}


@keyframes shimmer {
    0% {
        opacity: 0;
        left: -210%;
        top: -110%;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        left: -30%;
        top: -30%;
    }
}
</style>`.trim();

export default template;