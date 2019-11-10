<template>
  <div>
    this is ths image list component
    <div>{{allImages.length}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "imageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["getImages"]),
  created() {
    this.getImages();
  }
};
</script>