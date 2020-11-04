import PaymentService from "../services/payment.service";

export const payment = {
  namespaced: true,
  state: {
    payments: [],
    payment: {}
  },
  getters: {
    
  },
  actions: {
    getAllPayment({ commit }) {
      return PaymentService.getAllPayment().then(
        (response) => {
          commit("setPayments", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getPayment({ commit }, id) {
      return PaymentService.getPayment(id).then(
        (response) => {
          commit("setPayment", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setPayments(state, payments) {
      state.payments = payments;
    },
    setPayment(state, payment) {
      state.payment = payment;
    },
  },
};
