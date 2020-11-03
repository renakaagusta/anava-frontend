import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import DashboardMain from '../views/dashboard/main/DashboardMain.vue'
import IndexPayment from '../views/dashboard/payment/IndexPayment.vue'
import MainPayment from '../views/dashboard/payment/MainPayment.vue'
import CreatePayment from '../views/dashboard/payment/CreatePayment.vue'
import IndexDocument from '../views/dashboard/document/IndexDocument.vue'
import MainDocument from '../views/dashboard/document/MainDocument.vue'
import CreateDocument from '../views/dashboard/document/CreateDocument.vue'
import IndexSchedule from '../views/dashboard/schedule/IndexSchedule.vue'
import MainSchedule from '../views/dashboard/schedule/MainSchedule.vue'
import CreateSchedule from '../views/dashboard/schedule/CreateSchedule.vue'
import IndexWorkingPage from '../views/dashboard/working-page/IndexWorkingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Welcome',
        component: Welcome,
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
          {
            path: '',
            name: 'DashboardMain',
            component: DashboardMain,
          },
          {
            path: 'payment',
            name: 'IndexPayment',
            component: IndexPayment,
            children: [
              {
                path: '',
                name: 'MainPayment',
                component: MainPayment,
              },
              {
                path: 'add',
                name: 'CreatePayment',
                component: CreatePayment,
              }
            ]
          },
          {
            path: 'document',
            name: 'IndexDocument',
            component: IndexDocument,
            children: [
              {
                path: '',
                name: 'MainDocument',
                component: MainDocument,
              },
              {
                path: 'add',
                name: 'CreateDocument',
                component: CreateDocument,
              }
            ]
          },
          {
            path: 'schedule',
            name: 'IndexSchedule',
            component: IndexSchedule,
            children: [
              {
                path: '',
                name: 'MainSchedule',
                component: MainSchedule,
              },
              {
                path: 'add',
                name: 'CreateSchedule',
                component: CreateSchedule,
              }
            ]
          },
          {
            path: 'working-page',
            name: 'IndexWorkingPage',
            component: IndexWorkingPage,
          },
        ]
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
