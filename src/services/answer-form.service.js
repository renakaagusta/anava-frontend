import axios from 'axios';
import header from './header';

const API_URL = 'http://anavaugm.com/api/answer-form/';

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
  getAnswerFormByParticipantAndStage(answerForm) {
    if(answerForm.stage != null) {
      answerForm.stageId = answerForm.stage;
      answerForm.participantId = answerForm.participant;
    }
    return axios.get(API_URL + answerForm.participantId + '/' + answerForm.stageId, header());
  }
  createAnswerForm(answerForm) {
    return axios.post(API_URL,answerForm, header());
  }
  submitAnswerForm(answerForm) {
    return axios.put(API_URL + answerForm._id, answerForm, header());
  }
  updateAnswerForm(answerForm) {
    return axios.put(API_URL + answerForm._id,answerForm, header());
  }
  setAnswerFormScore(answerForm) {
    return axios.put(API_URL + answerForm._id + '/score', answerForm, header());
  }
}

export default new AnswerFormService();
