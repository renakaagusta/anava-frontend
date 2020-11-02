import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/participant/';

class ParticipantService {
  getParticipant(id) {
    return axios.get(API_URL + 'id');
  }

  getAllParticipant() {
    return axios.get(API_URL + 'all');
  }
}

export default new ParticipantService();
