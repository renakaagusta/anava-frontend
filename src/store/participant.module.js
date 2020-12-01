import ParticipantService from "./../services/participant.service";

export const participant = {
  namespaced: true,
  state: {
    participants: [],
    participant: {}
  },
  getters: {
    
  },
  actions: {
    getAllParticipant({ commit }) {
      return ParticipantService.getAllParticipant().then(
        (response) => {
          commit("setParticipants", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getParticipant({ commit }, id) {
      return ParticipantService.getParticipant(id).then(
        (response) => {
          commit("setParticipant", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    updateParticipant({ commit }, participant) {
      return ParticipantService.updateParticipant(participant).then(
        (response) => {
          commit("setParticipant", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setParticipants(state, participants) {
      state.participants = participants;
    },
    setParticipant(state, participant) {
      state.participant = participant;
    },
  },
};
