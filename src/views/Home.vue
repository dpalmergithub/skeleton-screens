<template>
  <div>
    <b-jumbotron header="Skeleton Screens" lead="Tired of loading circles? Dont worry, we are too.">
      <p class="text-muted">{Image here of loading circle xed out by bones} Might use big hero background and placeholder image as example</p>
      <p class="text-muted">Johnny to provide logo, possible computer screen, made of bones, with Skull wearing sunglasses as icon</p>
      <p class="text-muted">Will need options for users to filter data down</p>
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
  export default {
    name: 'Home',
    components: {
      AppBrowserPanel,
      TitleContentButton,
      ProfileCircleShimmer,
      ImageCard
    }
  }
</script>
<style>
</style>