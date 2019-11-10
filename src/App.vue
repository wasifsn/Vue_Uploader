<template>
  <div>
    <appHeader></appHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/appHeader";
import authHandler from "./components/authHandler";
import imageList from "./components/imageList";
import uploadForm from "./components/uploadForm";
export default {
  name: "App",
  components: {
    appHeader,
    authHandler,
    imageList
  }
};
</script>

<style scoped>
</style>