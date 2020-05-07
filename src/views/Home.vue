<template>
  <div>
    <b-jumbotron class="rounded-0" header="Skeleton Screens" lead="Tired of loading circles? Dont worry, we are too.">
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
      <b-button v-clipboard="msg" variant="primary" size="sm">Copy HTML</b-button>
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
    }
  }
</script>
<style>
</style>