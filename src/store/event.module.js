import EventService from "../services/event.service";

export const event = {
  namespaced: true,
  state: {
    events: [],
    event: {},
  },
  getters: {},
  actions: {
    selectEvent({ commit }, selectedEvent) {
      commit("selectEvent", selectedEvent);
    },
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
    selectEvent(state, selectedEvent) {
      if (selectedEvent.roles.includes("admin")) {
        if (selectedEvent.item >= 5) state.event = state.events[selectedEvent.item - 5];
      } else {
        if (selectedEvent.item >= 4) state.event = state.events[selectedEvent.item - 4];
      }

      localStorage.setItem("event", JSON.stringify(state.event));
    },
  },
};
