<template>
    <div>
        <div class="h4 my-3">
            Image Card
        </div>
        <div class="skeleton-img-card">
            <div class="skeleton-img-card-image"></div>
            <div class="skeleton-img-card-content"></div>
            <div class="skeleton-img-card-btn"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ImageCard'
    }
</script>
<style>
    .skeleton-img-card {
        height: 250px;
        width: 250px;
        border: thin solid #e6e6e6;
        border-radius: 6px;
    }

    .skeleton-img-card-image {
        width: 100%;
        height: 100px;
        background: #ddd;
        opacity: 0.5;
    }

    .skeleton-img-card-content {
        height: 100px;
        background-image: linear-gradient( lightgray 20px, transparent 0), linear-gradient( lightgray 20px, transparent 0), linear-gradient( lightgray 20px, transparent 0);
        background-size: 100px 20px, 130px 20px, 150px 20px;
        background-repeat: no-repeat;
        background-position: 10px 10px, 10px 40px, 10px 70px
    }

    .skeleton-img-card-btn {
        background: #ddd;
        opacity: 0.5;
        width: 50px;
        padding: 10px;
        margin: 10px auto;
    }

    .skeleton-img-card-image,
    .skeleton-img-card-content,
    .skeleton-img-card-btn {
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