import api from "../../api/imgur";
import router from "vue-router";
const state = {
  allImages: []
};

const getters = {
  allImages: state => state.allImages
};

const actions = {
  async getImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.getImages(token);
    if (response !== undefined || null) {
      commit("setImages", response.data.data);
    }
  },

  async uploadImages({ rootState, commit }, images) {
    console.log(images);
    //get access token
    const { token } = rootState.auth;
    // call our api module
    await api.uploadImages(images, token);
    //redirect user to imagelist component
    this.$router.redirect("/");
  }
};

const mutations = {
  setImages: (state, images) => {
    state.allImages = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
