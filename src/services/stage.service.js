import axios from 'axios';
import header from './header';

const API_URL = 'http://localhost:3000/api/stage/';

class StageService {
  getAllStage() {
    return axios.get(API_URL + 'all', header());
  }
  getStage(id) {
    return axios.get(API_URL + id, header());
  }
}

export default new StageService();
