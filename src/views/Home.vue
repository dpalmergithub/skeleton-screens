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
      <b-row>
        <b-col cols="12">
          <div class="app-categories d-flex justify-content-center">
            <div class="app-category-pill" role="button" @click="filterSetting = 'allComponents'">All</div>
            <div class="app-category-pill" role="button" @click="filterSetting = 'filteredByCategory';category = 'panel'">Panels</div>
            <div class="app-category-pill" role="button" @click="filterSetting = 'filteredByCategory';category = 'card'">Cards</div>
            <div class="app-category-pill" role="button" @click="filterSetting = 'filteredByCategory';category = 'profile'">Profiles</div>
            <div class="app-category-pill" role="button" @click="filterSetting = 'filteredByCategory';category = 'list'">Lists</div>
          </div>
        </b-col>
      </b-row>
      <hr/>
      <div>
        <div class="card-columns">
          <!--Skeleton Components
        ************************
        ************************
        ************************
          -->
          <div class="card border-0" v-for="(c, index) in componentsFilter" :key="index">
            <component v-bind:is="c.name"></component>
          </div>
          <!--
        **************************
        **************************
        **************************
        Skeleton Components End-->
        </div>
      </div>
    </b-container>
    <!-- The modal -->
    <b-modal size="lg" :id="modalID" centered hide-footer>
      <template #modal-header>
        <div class="w-100 d-flex align-items-center">
          <div class="w-100 d-flex">
            <div class="app-panel-header-red-circle"></div>
            <div class="app-panel-header-orange-circle"></div>
            <div class="app-panel-header-green-circle"></div>
          </div>
          <button @click="hideModal(modalID)" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </template>
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
  import SocialCard from "@/components/SocialCard"
  export default {
    name: 'Home',
    components: {
      TitleContentButton,
      ProfileCircleShimmer,
      ImageCard,
      ListPanels,
      LinkedInProfileBlock,
      SocialCard
    },
    data() {
      return {
        modalID: "app-modal",
        filterSetting: "allComponents",
        category: '',
        loading: true,
        htmlSourceCode: "",
        cssSourceCode: "",
        components: [{
            name: "TitleContentButton",
            tags: ["panel"]
          }, {
            name: "ProfileCircleShimmer",
            tags: ["profile"]
          }, {
            name: "ImageCard",
            tags: ["card"]
          }, {
            name: "ListPanels",
            tags: ["panel", "list"]
          }, {
            name: "LinkedInProfileBlock",
            tags: ["profile"]
          },
          {
            name: "SocialCard",
            tags: ["card", "profile"]
          }
        ]
      }
    },
    computed: {
      componentsFilter() {
        return this[this.filterSetting];
      },

      allComponents() {
        return this.components;
      },

      filteredByCategory() {
        return this.components.filter((c) => c.tags.indexOf(this.category) != "-1");
      }
    },
    methods: {
      hideModal(id) {
        return this.$bvModal.hide(id);
      }
    },
    mounted() {
      this.$root.$on("changeSourceCode", (data) => {
        if (data && data.htmlSourceCode && data.cssSourceCode) {
          this.htmlSourceCode = data.htmlSourceCode;
          this.cssSourceCode = data.cssSourceCode;
          this.$root.$emit('bv::show::modal', this.modalID);
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

  .app-header-title {
    font-weight: 900;
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

  .app-category-pill {
    text-align: center;
    padding: 6px 15px;
    background: #ccc;
    margin: 5px;
    cursor: pointer;
    display: inline-block;
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