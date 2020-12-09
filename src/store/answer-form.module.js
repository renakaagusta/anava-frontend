import AnswerFormService from "../services/answer-form.service";


export const answerForm = {
  namespaced: true,
  state: {
    answerForms: [],
    answerForm: {}
  },
  getters: {
    
  },
  actions: {
    getAllAnswerForm({ commit }) {
      return AnswerFormService.getAllAnswerForm().then(
        (response) => {
          commit("setAnswerForms", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAllAnswerFormByStage({ commit }, idStage) {
      return AnswerFormService.getAllAnswerFormByStage(idStage).then(
        (response) => {
          commit("setAnswerForms", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAnswerForm({ commit }, id) {
      return AnswerFormService.getAnswerForm(id).then(
        (response) => {
          commit("setAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    createAnswerForm({ commit }, answerForm) {
      return AnswerFormService.createAnswerForm(answerForm).then(
        (response) => {
          console.log("module")
          console.log(response.data.data);
          commit("createAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    updateAnswerForm({ commit }, answerForm) {
      return AnswerFormService.updateAnswerForm(answerForm).then(
        (response) => {
          commit("updateAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setAnswerForms(state, answerForms) {
      state.answerForms = answerForms;
    },
    setAnswerForm(state, answerForm) {
      state.answerForm = answerForm;

      alert("oke");
      console.log("answer form");
      console.log(state.answerForm);
    },
    createAnswerForm() {
      
    },
    updateAnswerForm() {
      
    },
  },
};
