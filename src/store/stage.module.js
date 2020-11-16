import StageService from "../services/stage.service";

export const stage = {
  namespaced: true,
  state: {
    stages: [],
    stage: {}
  },
  getters: {
    
  },
  actions: {
    getAllStage({ commit }) {
      return StageService.getAllStage().then(
        (response) => {
          commit("setStages", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getStage({ commit }, id) {
      return StageService.getStage(id).then(
        (response) => {
          commit("setStage", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setStages(state, stages) {
      state.stages = stages;
    },
    setStage(state, stage) {
      state.stage = stage;
    },
  },
};
