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
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .10);
    height: 300px;
    width: 250px;
    margin: 0 auto;
    padding: 10px;
    overflow: hidden;
    position: relative;
}

.skeleton-mp-panel-img {
    height: 200px;
    max-width: 250px;
    margin: 0 auto;
    background: rgba(0, 0, 0, .05);
    overflow: hidden;
    position: relative;
    animation: fading 1.5s infinite;

}

.skeleton-mp-panel-img:after {
    content: "";
    position: absolute;
    z-index: 0;
    width: 300%;
    height: 300%;
    opacity: 0;

    background: rgba(0, 0, 0, .05);
    background: linear-gradient( to right,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.10) 77%,
    rgba(0, 0, 0, 0.15) 92%,
    rgba(0, 0, 0, 0.0) 100%);
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
    animation: fading 1.5s infinite;
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
    animation: fading 1.5s infinite;
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
        transform: translate(-500px, -300px) rotate(30deg);

    }
    50% {
        opacity: .9;
        transform: translate(500px, 0) rotate(30deg);
    }
    100% {
        opacity: 0;

        transform: translate(1000px, 0) rotate(30deg);
    }
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