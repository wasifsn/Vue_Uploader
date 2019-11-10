<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <div v-for="(img,index) in allImages" :key="index">
        <img :src="img.link" alt />
      </div>
    </div>
    <h2 v-else>Please Login to to get Started!!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "imageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["getImages"]),
  created() {
    this.getImages();
  }
};
</script>

<style  scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 0.4rem;
}
</style>