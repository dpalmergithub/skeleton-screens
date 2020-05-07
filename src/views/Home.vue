<template>
  <div>
    <b-jumbotron class="rounded-0" header="Skeleton Screens" lead="Tired of loading circles? Dont worry, we are too.">
      <p class="text-muted">{Image here of loading circle xed out by bones} Might use big hero background and placeholder image as example</p>
      <p class="text-muted">Johnny to provide logo, possible computer screen, made of bones, with Skull wearing sunglasses as icon</p>
      <p class="text-muted">Will need options for users to filter data down</p>
      <p class="text-muted">Display updating github star counter</p>
      <p class="text-muted">Display github banner upper right corner</p>
    </b-jumbotron>
    <b-container>
      <b-col cols="12" md="8" offset-md="2">
        <!--Skeleton Components-->
        <!--TitleContentButtonPanel-->
        <AppBrowserPanel>
          <TitleContentButton/>
        </AppBrowserPanel>
        <!--ProfileCircleShimmer-->
        <AppBrowserPanel>
          <ProfileCircleShimmer/>
        </AppBrowserPanel>
        <!--ImageCard-->
        <AppBrowserPanel>
          <ImageCard/>
        </AppBrowserPanel>
        <!--ListPanels-->
        <AppBrowserPanel>
          <ListPanels/>
        </AppBrowserPanel>
        <AppBrowserPanel>
          <LinkedInProfileBlock/>
        </AppBrowserPanel>
        <!--Skeleton Components End-->
      </b-col>
    </b-container>
  </div>
</template>

<script>
  import AppBrowserPanel from "@/components/AppBrowserPanel"
  import TitleContentButton from "@/components/TitleContentButton"
  import ProfileCircleShimmer from "@/components/ProfileCircleShimmer"
  import ImageCard from "@/components/ImageCard"
  import ListPanels from "@/components/ListPanels"
  import LinkedInProfileBlock from "@/components/LinkedInProfileBlock"
  export default {
    name: 'Home',
    components: {
      AppBrowserPanel,
      TitleContentButton,
      ProfileCircleShimmer,
      ImageCard,
      ListPanels,
      LinkedInProfileBlock
    }
  }
</script>
<style>
</style>