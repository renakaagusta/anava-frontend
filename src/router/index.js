import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ChangePassword from "../views/ChangePassword.vue";
import ConfirmationEmail from "../views/ConfirmationEmail.vue";

import OSM from "../views/articles/OSM.vue";

import IndexArticle from "../views/dashboard/article/IndexArticle.vue";

import IndexTwibbon from "../views/dashboard/twibbon/IndexTwibbon.vue";

import Dashboard from "../views/dashboard/Dashboard.vue";
import DashboardMain from "../views/dashboard/main/DashboardMain.vue";

import IndexPayment from "../views/dashboard/payment/IndexPayment.vue";
import MainPayment from "../views/dashboard/payment/MainPayment.vue";
import CreatePayment from "../views/dashboard/payment/CreatePayment.vue";

import IndexAnnouncement from "../views/dashboard/announcement/IndexAnnouncement.vue";
import MainAnnouncement from "../views/dashboard/announcement/MainAnnouncement.vue";
import CreateAnnouncement from "../views/dashboard/announcement/CreateAnnouncement.vue";

import IndexDocument from "../views/dashboard/document/IndexDocument.vue";
import MainDocument from "../views/dashboard/document/MainDocument.vue";
import CreateDocument from "../views/dashboard/document/CreateDocument.vue";

import IndexSchedule from "../views/dashboard/schedule/IndexSchedule.vue";
import MainSchedule from "../views/dashboard/schedule/MainSchedule.vue";
import CreateSchedule from "../views/dashboard/schedule/CreateSchedule.vue";

import IndexParticipant from "../views/dashboard/participant/IndexParticipant.vue";
import MainParticipant from "../views/dashboard/participant/MainParticipant.vue";
import DetailParticipant from "../views/dashboard/participant/DetailParticipant.vue";

import IndexEvent from "../views/dashboard/event/IndexEvent.vue";
import SettingEvent from "../views/dashboard/event/SettingEvent.vue";

import IndexStage from "../views/dashboard/stage/IndexStage.vue";
import MainStage from "../views/dashboard/stage/MainStage.vue";
import SettingStage from "../views/dashboard/stage/SettingStage.vue";
import ListParticipantStage from "../views/dashboard/stage/participant/ListParticipantStage.vue";
import AddParticipantStage from "../views/dashboard/stage/participant/AddParticipantStage.vue";
import MainQuestionStage from "../views/dashboard/stage/question/MainQuestionStage.vue";
import CreateQuestionStage from "../views/dashboard/stage/question/CreateQuestionStage.vue";
import EditQuestionStage from "../views/dashboard/stage/question/EditQuestionStage.vue";

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
        path: "forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
      },
      {
        path: "change-password/:id",
        name: "ChangePassword",
        component: ChangePassword,
      },
      {
        path: "confirm-email/:id",
        name: "ConfirmationEmail",
        component: ConfirmationEmail,
      },
      {
        path: "osm",
        name: "OSM",
        component: OSM,
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
                component: MainParticipant,
              },
              {
                path: ":id",
                name: "DetailParticipant",
                component: DetailParticipant,
              },
            ],
          },
          {
            path: "article",
            name: "IndexArticle",
            component: IndexArticle,
          },
          {
            path: "twibbon",
            name: "IndexTwibbon",
            component: IndexTwibbon,
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
            path: "announcement",
            name: "IndexAnnouncement",
            component: IndexAnnouncement,
            children: [
              {
                path: "",
                name: "MainAnnouncement",
                component: MainAnnouncement,
              },
              {
                path: "add",
                name: "CreateAnnouncement",
                component: CreateAnnouncement,
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
            path: "event",
            name: "IndexEvent",
            component: IndexEvent,
            children: [
              {
                path: ":idEvent",
                children: [
                  {
                    path: "",
                    name: "SettingEvent",
                    component: SettingEvent,
                  },
                ],
              },
            ],
          },
          {
            path: "stage/:idStage",
            name: "IndexStage",
            component: IndexStage,
            children: [
              {
                path: "",
                name: "MainStage",
                component: MainStage,
              },
              {
                path: "setting",
                name: "SettingStage",
                component: SettingStage,
              },
              {
                path: "participant",
                name: "ListParticipantStage",
                component: ListParticipantStage,
              },
              {
                path: "participant/add",
                name: "AddParticipantStage",
                component: AddParticipantStage,
              },
              {
                path: "question",
                name: "MainQuestionStage",
                component: MainQuestionStage,
              },
              {
                path: "question/:idQuestion",
                name: "EditQuestionStage",
                component: EditQuestionStage,
              },
              {
                path: "question/add",
                name: "CreateQuestionStage",
                component: CreateQuestionStage,
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
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
