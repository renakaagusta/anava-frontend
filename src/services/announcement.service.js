import axios from 'axios';
import header from './header';

const API_URL = 'http://localhost:3000/api/announcement/';

class AnnouncementService {
  getAllAnnouncement() {
    return axios.get(API_URL + 'all', header());
  }
  getAnnouncement(id) {
    return axios.get(API_URL + id, header());
  }
  createAnnouncement(announcement) {
    return axios.post(API_URL, announcement, header());
  }
}

export default new AnnouncementService();
