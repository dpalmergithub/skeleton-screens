<template>
  <div>
    <b-jumbotron header-level="5" class="rounded-0" text-variant="dark" bg-variant="light">
      <div v-show="loading" class="skeleton-app-header">
        <div class="skeleton-app-title"></div>
        <div class="skeleton-app-subtext"></div>
        <div class="skeleton-app-subtext"></div>
        <div class="skeleton-app-subtext"></div>
      </div>
      <div class="app-header-content-wrapper" v-show="!loading">
        <div class="h1 app-header-title display-3">
          <b>Skeleton Screens</b>
        </div>
        <div class="app-image-xs d-block d-md-none my-3">
          <img class="d-block mx-auto img-fluid" src="../assets/Grid_Skull_nonsquare@2x.png" />
        </div>
        <div class="app-header-subtext">
          <p>Tired of loading circles? Don't worry, we are too. Copy and paste any component or layout, make it your own, and
            use it in your next project.</p>
          <!--<p style="font-size:1.8rem;">Tired of loading circles?</p>
          <p style="font-size:1.5rem;">Don't worry, we are too.</p>-->
          <a href="https://github.com/dpalmergithub/skeleton-screens" target="_blank" class="d-flex justify-content-center align-items-center mt-3 app-star-count-wrapper">
            <span>Github</span>
            <b-icon icon="star-fill" class="mx-2" style="color:#64a;"></b-icon>
            <span class="d-inline-block" style="margin-top:2px;">{{ starCount }}</span>
          </a>
        </div>
        <!--https://api.github.com/repos/dpalmergithub/skeleton-screens-->
      </div>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col cols="12">
          <div>
            <div v-if="loading" class="app-categories d-inline-block d-sm-flex justify-content-center">
              <div v-for="(p,index) in appPillSkeletons" :key="index" class="skeleton-app-category-pill"></div>
            </div>
            <div v-if="!loading" class="app-categories d-inline-block d-sm-flex justify-content-center">
              <div v-for="(p,index) in filterButtons" :key="index" :class="p.class" class="app-category-pill" role="button" @click="setActive($event);filterSetting = p.filterSetting;category = p.category">{{ p.title }}</div>
            </div>
          </div>
        </b-col>
      </b-row>
      <hr/>
      <div class="app-components-wrapper">
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
    <b-modal size="lg" :id="modalID" centered hide-footer @hide="triggerHideEvent">
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
          <b-button v-clipboard="htmlSourceCode" @click="copyType = 'html'" v-clipboard:success="onCopy" v-clipboard:error="onCopyError"
            variant="primary" size="sm">Copy HTML</b-button>
          <span v-show="copyType == 'html'" class="ml-2" :class="{ 'text-success': copyStatus == 'success','text-danger': copyStatus == 'error' }">{{ copyStatusMessage }}</span>
        </div>
        <pre v-highlightjs="htmlSourceCode"><code class="html"></code></pre>
      </div>
      <div>
        <div class="mb-3">
          <h5>CSS</h5>
          <b-button v-clipboard="cssSourceCode" @click="copyType = 'css'" v-clipboard:success="onCopy" v-clipboard:error="onCopyError"
            variant="primary" size="sm">Copy CSS</b-button>
          <span v-show="copyType == 'css'" class="ml-2" :class="{ 'text-success': (copyStatus == 'success'),'text-danger': (copyStatus == 'error') }">{{ copyStatusMessage }}</span>
        </div>
        <pre v-highlightjs="cssSourceCode"><code class="css"></code></pre>
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
  import MusicPlayer from "@/components/MusicPlayer"
  import YoutubeVideo from "@/components/YoutubeVideo"
  export default {
    name: 'Home',
    components: {
      TitleContentButton,
      ProfileCircleShimmer,
      ImageCard,
      ListPanels,
      LinkedInProfileBlock,
      SocialCard,
      MusicPlayer,
      YoutubeVideo
    },
    data() {
      return {
        isActive: false,
        copyType: "",
        copyStatusMessage: "",
        copyStatus: "error",
        starCount: 0,
        appPillSkeletons: Array.apply(null, Array(6)).map(function () {}),
        modalID: "app-modal",
        filterSetting: "allComponents",
        category: '',
        loading: true,
        htmlSourceCode: "",
        cssSourceCode: "",
        filterButtons: [{
            title: "All",
            class: "active",
            category: "allComponents",
            filterSetting: "allComponents"
          },
          {
            title: "Panels",
            class: "",
            category: "panel",
            filterSetting: "filteredByCategory"
          },
          {
            title: "Cards",
            class: "",
            category: "card",
            filterSetting: "filteredByCategory"
          },
          {
            title: "Profiles",
            class: "",
            category: "profile",
            filterSetting: "filteredByCategory"
          },
          {
            title: "Lists",
            class: "",
            category: "list",
            filterSetting: "filteredByCategory"
          },
          {
            title: "Images",
            class: "",
            category: "image",
            filterSetting: "filteredByCategory"
          }
        ],
        components: [{
            name: "TitleContentButton",
            tags: ["panel"]
          }, {
            name: "ProfileCircleShimmer",
            tags: ["profile", "image"]
          }, {
            name: "ImageCard",
            tags: ["card", "image"]
          }, {
            name: "ListPanels",
            tags: ["panel", "list"]
          }, {
            name: "LinkedInProfileBlock",
            tags: ["profile", "image"]
          },
          {
            name: "SocialCard",
            tags: ["card", "profile", "image"]
          },
          {
            name: "MusicPlayer",
            tags: ["panel", "card", "music", "image"]
          },
          {
            name: "YoutubeVideo",
            tags: ["panel", "card", "music", "video", "image"]
          }
        ]
      }
    },
    computed: {
      componentsFilter() {
        return this[this.filterSetting];
      },

      allComponents() {
        //this.isActive = true;
        return this.components;
      },

      filteredByCategory() {
        return this.components.filter((c) => c.tags.indexOf(this.category) != "-1");
      }
    },
    methods: {
      setActive(evt) {
        var activePills = document.querySelectorAll('.app-category-pill');
        let i = 0;
        for (i = 0; i < activePills.length; i++) {
          activePills[i].classList.remove('active');
        }
        evt.target.classList.toggle("active");
        return;
      },

      hideModal(id) {
        return this.$bvModal.hide(id);
      },

      onCopy() {
        this.copyStatus = "success";
        this.copyStatusMessage = "Copied!";
      },

      onCopyError() {
        this.copyStatus = "error";
        this.copyStatusMessage = "Failed to copy!";
      },
      triggerHideEvent() {
        this.$root.$emit("appModalClosed");
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

      this.$root.$on('appModalClosed', () => {
        this.copyStatus = "";
        this.copyStatusMessage = "";
      });

      this.$http.get("https://api.github.com/repos/dpalmergithub/skeleton-screens").then(res => {
        this.starCount = res.data.stargazers_count;
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        setTimeout(() => {
          this.loading = false
        }, 1000);
      });
    }

  }
</script>
<style scoped>
  .app-header-content-wrapper {
    opacity: 0;
    animation: fade-in 1s forwards;
    background: url("../assets/Grid_Skull_nonsquare@2x.png");
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 360px;
    max-width: 960px;
    margin: 0 auto;
  }

  .app-header-title {
    font-weight: 900;
    font-size: 4.25rem;
    color: #000;
  }

  .app-header-subtext {
    max-width: 26rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .app-components-wrapper {
    min-height: 100vh;
  }

  @media screen and (max-width:767px) {
    .app-header-content-wrapper {
      background: none;
      text-align: center;
      max-width: 100%;
    }

    .app-header-content-wrapper img {
      height: 250px;
      width: 250px;
    }

    .app-header-subtext {
      margin: 0 auto;
      text-align: center;
    }
  }

  .skeleton-app-header {
    max-width: 960px;
    margin: 0 auto;
  }

  .skeleton-app-category-pill {
    background-color: #e1e1e1;
    opacity: 0.5;
    animation: fading 1.5s infinite;
    background: #ccc;
    height: 36px;
    width: 100px;
    padding: 6px 15px;
    margin: 5px;
    display: inline-block;
    border-radius: 100px;
  }

  .skeleton-app-title {
    max-width: 600px;
    border-radius: 3px;
    height: 75px;
    margin-bottom: 15px;
    background-color: #e1e1e1;
    opacity: 0.5;
    animation: fading 1.5s infinite;

  }

  .skeleton-app-subtext {
    max-width: 26rem;
    border-radius: 100px;
    height: 16px;
    margin: 15px 0 0 0;
    background-color: #e1e1e1;
    opacity: 0.5;
    animation: fading 1.5s infinite;
  }

  .app-category-pill {
    text-align: center;
    padding: 6px 15px;
    background: #fff;
    color: #64a;
    width: 100px;
    margin: 4px;
    cursor: pointer;
    display: inline-block;
    border-radius: 100px;
    box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, .20);
    transition: all 0.50s ease;
    border: 2px solid #64a;
  }

  .app-category-pill:hover,
  .app-category-pill.active {
    border: 2px solid transparent;
    background: #64a;
    color: #fff;
  }


  .app-star-count-wrapper {
    font-size: 1.8rem;
    text-decoration: none;
    color: inherit;
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