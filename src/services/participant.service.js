import axios from 'axios';
import header from './header';

const API_URL = 'http://localhost:3000/api/participant/';

class ParticipantService {
  getAllParticipant() {
    return axios.get(API_URL + 'all', header());
  }
  getParticipant(id) {
    return axios.get(API_URL + id, header());
  }
}

export default new ParticipantService();
