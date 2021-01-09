import axios from 'axios';
import header from './header';

const API_URL = 'http://52.163.218.138/api/stage/';

class StageService {
  getAllStage() {
    return axios.get(API_URL + 'all', header());
  }
  getStage(id) {
    return axios.get(API_URL + id, header());
  }
  addParticipantToStage(stage) {
    return axios.put(API_URL + stage.id + '/add', stage, header());
  }
}

export default new StageService();
