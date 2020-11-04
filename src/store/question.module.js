import QuestionService from "../services/question.service";

export const question = {
  namespaced: true,
  state: {
    questions: [],
    question: {}
  },
  getters: {
    
  },
  actions: {
    getAllQuestion({ commit }) {
      return QuestionService.getAllQuestion().then(
        (response) => {
          commit("setQuestions", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getQuestion({ commit }, id) {
      return QuestionService.getQuestion(id).then(
        (response) => {
          commit("setQuestion", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions;
    },
    setQuestion(state, question) {
      state.question = question;
    },
  },
};
