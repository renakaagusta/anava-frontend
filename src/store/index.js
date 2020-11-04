import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module'
import { ui } from './ui.module'
import { participant } from './participant.module'
import { payment } from './payment.module'
import { event } from './event.module'
import { stage } from './stage.module'
import { question } from './question.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    ui,
    participant,
    payment,
    event,
    stage,
    question
  }
})
