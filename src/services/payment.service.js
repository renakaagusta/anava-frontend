import axios from 'axios';
import header from './header';

const API_URL = 'http://localhost:3000/api/payment/';

class PaymentService {
  getAllPayment() {
    return axios.get(API_URL + 'all', header());
  }
  getPayment(id) {
    return axios.get(API_URL + id, header());
  }
  createPayment(payment) {
    return axios.post(API_URL, payment, header());
  }
}

export default new PaymentService();
