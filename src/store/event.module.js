import EventService from "../services/event.service";

export const event = {
  namespaced: true,
  state: {
    events: [],
    event: {}
  },
  getters: {
    
  },
  actions: {
    getAllEvent({ commit }) {
      return EventService.getAllEvent().then(
        (response) => {
          commit("setEvents", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getEvent({ commit }, id) {
      return EventService.getEvent(id).then(
        (response) => {
          commit("setEvent", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setEvent(state, event) {
      state.event = event;
    },
  },
};
