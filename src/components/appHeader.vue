<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <div class="right menu" v-if="!isLoggedIn">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
    <!-- after login -->
    <div class="right menu" v-else>
      <div class="horizontal">
        <router-link to="/" class="ui item">Galleries</router-link>
        <router-link to="/upload" class="ui item">Upload</router-link>
        <a class="ui item" @click="logout">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "appHeader",
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  data: function() {
    return {};
  }
};
</script>

<style  scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
