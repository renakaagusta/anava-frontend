import axios from 'axios';
import header from './header';

const API_URL = 'http://anavaugm.com:3000/api/answer-form/';

class AnswerFormService {
  getAllAnswerForm() {
    return axios.get(API_URL + 'all', header());
  }
  getAllAnswerFormByStage(idStage) {
    return axios.get(API_URL + 'stage/' + idStage, header(true));
  }
  getAnswerForm(id) {
    return axios.get(API_URL + id, header());
  }
  createAnswerForm(answerForm) {
    alert(JSON.stringify(answerForm))
    return axios.post(API_URL,answerForm, header());
  }
  updateAnswerForm(answerForm) {
    return axios.put(API_URL + answerForm._id,answerForm, header());
  }
}

export default new AnswerFormService();
