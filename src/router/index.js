import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/dashboard/Dashboard.vue";

//Participant
import DashboardMain from "../views/dashboard/main/DashboardMain.vue";
import IndexPayment from "../views/dashboard/payment/IndexPayment.vue";
import MainPayment from "../views/dashboard/payment/MainPayment.vue";
import CreatePayment from "../views/dashboard/payment/CreatePayment.vue";
import IndexDocument from "../views/dashboard/document/IndexDocument.vue";
import MainDocument from "../views/dashboard/document/MainDocument.vue";
import CreateDocument from "../views/dashboard/document/CreateDocument.vue";
import IndexSchedule from "../views/dashboard/schedule/IndexSchedule.vue";
import MainSchedule from "../views/dashboard/schedule/MainSchedule.vue";
import CreateSchedule from "../views/dashboard/schedule/CreateSchedule.vue";
import IndexParticipant from "../views/dashboard/participant/IndexParticipant.vue";
import MainParticipant from "../views/dashboard/participant/MainParticipant.vue";
import DetailParticipant from "../views/dashboard/participant/DetailParticipant.vue";

//kompetisi OSM
import PenyisihanOSM from '../views/dashboard/stage/osm/PenyisihanOSM.vue'
import SemifinalOSMSesi1 from '../views/dashboard/stage/osm/SemifinalOSMSesi1.vue'
import SemifinalOSMSesi2 from '../views/dashboard/stage/osm/SemifinalOSMSesi2.vue'
import FinalOSMSesi1 from '../views/dashboard/stage/osm/FinalOSMSesi1.vue'
import FinalOSMSesi2 from '../views/dashboard/stage/osm/FinalOSMSesi2.vue'
import UploadAnswerFile from '../views/dashboard/stage/osm/UploadAnswerFile.vue'

//Kompetisi Poster
import PekanKreativitasPoster from '../views/dashboard/stage/poster/PekanKreativitasPoster.vue'
import PekanFinalPoster from '../views/dashboard/stage/poster/PekanFinalPoster.vue'

//kompertisi Rangking1
import BabakGugurRangking1 from '../views/dashboard/stage/rangking1/BabakGugurRangking1.vue'
import IndexBabakChampionRangking1 from '../views/dashboard/stage/rangking1/IndexBabakChampionRangking1.vue'
import MainBabakChampionRangking1 from '../views/dashboard/stage/rangking1/MainBabakChampionRangking1.vue'
import PaketBabakChampionRangking1 from '../views/dashboard/stage/rangking1/PaketBabakChampionRangking1.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Welcome",
        component: Welcome,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        children: [
          {
            path: "",
            name: "DashboardMain",
            component: DashboardMain,
          },
          {
            path: "participant",
            name: "IndexParticipant",
            component: IndexParticipant,
            children: [
              {
                path: "",
                name: "MainParticipant",
                component: MainParticipant
              },
              {
                path: ":id",
                name: "DetailParticipant",
                component: DetailParticipant,
              },
            ],
          },
          {
            path: "payment",
            name: "IndexPayment",
            component: IndexPayment,
            children: [
              {
                path: "",
                name: "MainPayment",
                component: MainPayment,
              },
              {
                path: "add",
                name: "CreatePayment",
                component: CreatePayment,
              },
            ],
          },
          {
            path: "document",
            name: "IndexDocument",
            component: IndexDocument,
            children: [
              {
                path: "",
                name: "MainDocument",
                component: MainDocument,
              },
              {
                path: "add",
                name: "CreateDocument",
                component: CreateDocument,
              },
            ],
          },
          {
            path: "schedule",
            name: "IndexSchedule",
            component: IndexSchedule,
            children: [
              {
                path: "",
                name: "MainSchedule",
                component: MainSchedule,
              },
              {
                path: "add",
                name: "CreateSchedule",
                component: CreateSchedule,
              },
            ],
          },
          {
            path: 'penyisihan-osm',
            name: 'PenyisihanOSM',
            component: PenyisihanOSM,
          },
          {
            path: 'semifinal-osm-sesi1',
            name: 'SemifinalOSMSesi1',
            component: SemifinalOSMSesi1,
          },
          {
            path: 'semifinal-osm-sesi2',
            name: 'SemifinalOSMSesi2',
            component: SemifinalOSMSesi2,
          },
          {
            path: 'final-osm-sesi1',
            name: 'FinalOSMSesi1',
            component: FinalOSMSesi1,
          },
          {
            path: 'final-osm-sesi2',
            name: 'FinalOSMSesi2',
            component: FinalOSMSesi2,
          },
          {
            path: 'upload-answer-file',
            name: 'UploadAnswerFile',
            component: UploadAnswerFile,
          },
          {
            path: 'pekan-kreativitas-poster',
            name: 'PekanKreativitasPoster',
            component: PekanKreativitasPoster,
          },
          {
            path: 'pekan-final-poster',
            name: 'PekanFinalPoster',
            component: PekanFinalPoster,
          },
          {
            path: 'babak-gugur-rangking1',
            name: 'BabakGugurRangking1',
            component: BabakGugurRangking1,
          },
          {
            path: 'babak-champion-rangking1',
            name: 'IndexBabakChampionRangking1',
            component: IndexBabakChampionRangking1,
            children: [
              {
                path: '',
                name: 'MainBabakChampionRangking1',
                component: MainBabakChampionRangking1,
              },
              {
                path: 'paket/:id',
                name: 'PaketBabakChampionRangking1',
                component: PaketBabakChampionRangking1,
              }
            ]
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/login", "/register", "/welcome"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
