<template>
  <div>
    <b-jumbotron header-level="5" class="rounded-0 text-center" text-variant="dark" bg-variant="light">
      <div v-show="loading" class="skeleton-app-header">
        <div class="skeleton-app-title"></div>
        <div class="skeleton-app-subtext"></div>
        <div class="skeleton-app-subtext"></div>
      </div>
      <div class="app-header-content-wrapper" v-show="!loading">
        <div class="h1 app-header-title display-3">
          <b>Skeleton Screens</b>
        </div>
        <div class="app-header-subtext">
          Tired of loading circles.
          <br/>Don't worry, we are too.
        </div>
      </div>
    </b-jumbotron>
    <b-container>
      <b-col cols="12" md="8" offset-md="2">
        <!--Skeleton Components
    **************************
    **************************
    **************************
    -->
        <!--TitleContentButtonPanel-->
        <TitleContentButton/>
        <!--ProfileCircleShimmer-->
        <ProfileCircleShimmer/>
        <!--ImageCard-->
        <ImageCard/>
        <!--ListPanels-->
        <ListPanels/>
        <!--LinkedInProfileBlock-->
        <LinkedInProfileBlock/>
        <!--
      **************************
      **************************
      **************************
      Skeleton Components End-->
      </b-col>
    </b-container>
    <!-- The modal -->
    <b-modal size="lg" id="app-modal" centered hide-footer>
      <!-- If you want to highlight hardcoded source-code -->
      <div>
        <div class="mb-3">
          <h5>HTML</h5>
          <b-button v-clipboard="htmlSourceCode" variant="primary" size="sm">Copy HTML</b-button>
        </div>
        <pre v-highlightjs="htmlSourceCode"><code class="html"></code></pre>
      </div>
      <div>
        <div class="mb-3">
          <h5>CSS</h5>
          <b-button v-clipboard="cssSourceCode" variant="primary" size="sm">Copy CSS</b-button>
        </div>
        <pre v-highlightjs="cssSourceCode"><code class="html"></code></pre>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import TitleContentButton from "@/components/TitleContentButton"
  import ProfileCircleShimmer from "@/components/ProfileCircleShimmer"
  import ImageCard from "@/components/ImageCard"
  import ListPanels from "@/components/ListPanels"
  import LinkedInProfileBlock from "@/components/LinkedInProfileBlock"
  export default {
    name: 'Home',
    components: {
      TitleContentButton,
      ProfileCircleShimmer,
      ImageCard,
      ListPanels,
      LinkedInProfileBlock
    },
    data() {
      return {
        loading: true,
        htmlSourceCode: "",
        cssSourceCode: ""
      }
    },
    mounted() {
      this.$root.$on("changeSourceCode", (data) => {
        if (data && data.htmlSourceCode && data.cssSourceCode) {
          this.htmlSourceCode = data.htmlSourceCode;
          this.cssSourceCode = data.cssSourceCode;
          this.$root.$emit('bv::show::modal', 'app-modal');
        }
      });

      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
</script>
<style scoped>
  .app-header-content-wrapper {
    opacity: 0;
    animation: fade-in 1s forwards;
  }

  .skeleton-app-title {
    max-width: 600px;
    border-radius: 100px;
    height: 50px;
    margin: 0 auto;
    background-color: #e1e1e1;
    opacity: 0.5;
    animation: fading 1.5s infinite;

  }

  .skeleton-app-subtext {
    max-width: 300px;
    border-radius: 100px;
    height: 15px;
    margin: 20px auto;
    background-color: #e1e1e1;
    opacity: 0.5;
    animation: fading 1.5s infinite;

  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
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
</style>