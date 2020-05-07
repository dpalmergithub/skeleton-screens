<template>
  <b-container>
    <b-col cols="12" md="8" offset-md="2">
      <h1 class="bg-dark text-white rounded shadow p-3">Skeleton Screens</h1>
      <p class="h5 text-center mt-5">Loading spinners no more.</p>
      <p class="text-muted">{Image here of loading circle xed out by bones} Might use big hero background and placeholder image as example</p>
      <p class="text-muted">Johnny to provide logo, possible computer screen, made of bones, with Skull wearing sunglasses as icon</p>
      <p class="text-muted">Will need options for users to filter data down</p>
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