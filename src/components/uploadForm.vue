<template>
  <div class="dropper">
    <input
      accept="image/*"
      multiple
      type="file"
      name
      id
      @change="uploadImages($event.target.files)"
    />
    <span>Drag Files Here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "uploadForm",
  methods: mapActions(["uploadImages"])
};
</script>
<style scoped>
.dropper {
  position: relative;
  height: 30vh;
  border: 2px solid darkgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.dropper:hover {
  background-color: #eeeeee;
}
</style>