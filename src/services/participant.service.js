import axios from "axios";
import header from "./header";

const API_URL = "http://localhost:3000/api/participant/";

class ParticipantService {
  getAllParticipant() {
    return axios.get(API_URL + "all", header());
  }
  getParticipant(id) {
    return axios.get(API_URL + id, header());
  }
  updateParticipant(participant) {
    return axios.put(API_URL + participant.id, participant, header());
  }
}

export default new ParticipantService();
