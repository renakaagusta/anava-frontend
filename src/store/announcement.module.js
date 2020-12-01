import AnnouncementService from "../services/announcement.service";

export const announcement = {
  namespaced: true,
  state: {
    announcements: [],
    announcement: {}
  },
  getters: {
    
  },
  actions: {
    getAllAnnouncement({ commit }) {
      return AnnouncementService.getAllAnnouncement().then(
        (response) => {
          commit("setAnnouncements", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAnnouncement({ commit }, id) {
      return AnnouncementService.getAnnouncement(id).then(
        (response) => {
          commit("setAnnouncement", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    createAnnouncement({ commit },announcement) {
      alert(JSON.stringify(announcement))
      return AnnouncementService.createAnnouncement(announcement).then(
        (response) => {
          commit("createAnnouncement", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setAnnouncements(state, announcements) {
      state.announcements = announcements;
    },
    setAnnouncement(state, announcement) {
      state.announcement = announcement;
    },
    createAnnouncement() {

    }
  },
};
