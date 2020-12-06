import axios from 'axios';
import header from './header';

const API_URL = 'http://localhost:3000/api/event/';

class EventService {
  getAllEvent() {
    return axios.get(API_URL + 'all', header());
  }
  getEvent(id) {
    return axios.get(API_URL + id, header());
  }
  joinEvent(data) {
    return axios.put(API_URL + data.id + '/add', data, header());
  }
}

export default new EventService();