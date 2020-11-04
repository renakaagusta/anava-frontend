import axios from 'axios';
import header from './header';

const API_URL = 'http://localhost:3000/api/stage/';

class QuestionService {
  getAllQuestion() {
    return axios.get(API_URL + 'all', header());
  }
  getQuestion(id) {
    return axios.get(API_URL + id, header());
  }
}

export default new QuestionService();
