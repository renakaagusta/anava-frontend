<template>
  <div class="page">
    <Login v-if="show == 'login'" />
    <Register v-if="show == 'register'" />
    <Anava v-if="show == 'anava'" />
    <OSM v-if="show == 'osm'" />
    <Rank1 v-if="show == 'rank1'" />
    <Poster v-if="show == 'poster'" />
    <div v-if="show == 'welcome'">
      <NavBar />
      <div class="sub-page" id="home">
        <h1 class="text-white" style="padding-top:200px;">
          Selamat datang di ANAVA 2020
        </h1>
        <div class="rotate">
          <span>
            Tagline 3<br />
            Tagline 2<br />
            Tagline 1
          </span>
        </div>
        <b-container class="scroll-down text-white">
          <a href="#about" v-smooth-scroll="{ duration: 1000 }">
            Selengkapnya
            <div class="arrow bounce">
              <i class="fas fa-angle-double-down fa-2x"></i>
            </div>
          </a>
        </b-container>
      </div>
      <div class="sub-page" id="about">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          class="pt-5"
        >
          <b-container class="mt-5">
            <b-row>
              <b-col lg="6">
                <div class="logo">
                  <img src="@/assets/logo-big.png" />
                </div>
              </b-col>
              <b-col lg="6">
                <div class="content">
                  <h1>About Us</h1>
                  <hr />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
                <button
                  class="btn text"
                  @click="$store.dispatch('ui/changeWelcomeComponent', 'anava')"
                >
                  Selengkapnya
                </button>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
      <div class="sub-page" id="event">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h1 class="text-white">Our Event</h1>
          <div class="content">
            <b-row>
              <b-col lg="4">
                <b-container
                  class="bg-white rounded p-3 shadow-sm mb-3"
                  style="width:100%; height:400px;"
                >
                  <h1>OSM</h1>
                  <img
                    class="rounded-circle logo"
                    src="@/assets/logo-big.png"
                  /><br />
                  <button
                    class="btn p-3 mt-3 w-100"
                    @click="$store.dispatch('ui/changeWelcomeComponent', 'osm')"
                  >
                    Detail
                  </button>
                </b-container>
              </b-col>
              <b-col lg="4">
                <b-container
                  class="bg-white rounded p-3 shadow-sm mb-3"
                  style="width:100%; height:400px;"
                >
                  <h1>Poster</h1>
                  <img
                    class="rounded-circle logo"
                    src="@/assets/logo-big.png"
                  /><br />
                  <button
                    class="btn p-3 mt-3 w-100"
                    @click="
                      $store.dispatch('ui/changeWelcomeComponent', 'rank1')
                    "
                  >
                    Detail
                  </button>
                </b-container>
              </b-col>
              <b-col lg="4">
                <b-container
                  class="bg-white rounded p-3 shadow-sm mb-3"
                  style="width:100%; height:400px;"
                >
                  <h1>Rank 1</h1>
                  <img
                    class="rounded-circle logo"
                    src="@/assets/logo-big.png"
                  /><br />
                  <button
                    class="btn p-3 mt-3 w-100"
                    @click="
                      $store.dispatch('ui/changeWelcomeComponent', 'poster')
                    "
                  >
                    Detail
                  </button>
                </b-container>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <div class="sub-page" id="documentation">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h1 class="text-white">Dokumentasi</h1>
          <div class="content mt-5">
            <carousel
              :perPage="1"
              :navigationEnabled="true"
              :autoplay="true"
              :scrollPerPage="false"
            >
              <slide>
                <img
                  src="https://s31450.pcdn.co/wp-content/uploads/2019/06/what-to-do-when-a-student-is-failing-190715.jpg"
                />
              </slide>
              <slide>
                <img
                  src="https://d1e2bohyu2u2w9.cloudfront.net/education/sites/default/files/styles/16_9_medium/public/tlr-blog/7_ways_to_make_distance_learning_more_equitable_article.png?itok=ef1dbV5s"
                />
              </slide>
              <slide>
                <img
                  src="https://rogersbh.org/application/files/thumbnails/small/2815/3632/7168/podcastblog2.jpg"
                />
              </slide>
              <slide>
                <img
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7805/production/_104352703_students.jpg"
                />
              </slide>
            </carousel>
          </div>
        </div>
      </div>
      <div class="sub-page" id="patner">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h1>Patnership</h1>
          <hr />
          <div class="content bg-white p-5 rounded shadow-sm">
            <h3>Sponsor :</h3>
            <b-row>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
            </b-row>
            <h3>Media Patner :</h3>
            <b-row>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
              <b-col lg="3">
                <img src="@/assets/grab.png" />
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Anava from "@/views/articles/OSM.vue";
import OSM from "@/views/articles/OSM.vue";
import Rank1 from "@/views/articles/OSM.vue";
import Poster from "@/views/articles/OSM.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Welcome",
  components: {
    NavBar,
    Footer,
    Login,
    Register,
    Anava,
    OSM,
    Rank1,
    Poster,
    Carousel,
    Slide,
  },
  computed: {
    show() {
      return this.$store.state.ui.welcomeShow;
    },
  },
  created() {
    document.title = "PEMIRA HIMATIPA UGM 2020";
  },
};
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

* {
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}

.page {
  height: 100%;
  width: 100%;
}

.sub-page {
  min-height: 100%;
  width: 100%;
  padding-top: 50px;
}

#home {
  height: 700px;
  background-image: linear-gradient(
      to right top,
      rgb(13, 33, 60),
      rgb(52, 3, 62, 0.8)
    ),
    url("https://assets.nst.com.my/images/articles/top3ch_NSTfield_image_socialmedia.var_1582008561.jpg");
  background-size: cover;
  padding-bottom: 20px;
}

#about {
  background-color: #58427c;
  color: white;
  background-image: linear-gradient(
      to right top,
      rgb(13, 33, 60),
      rgb(52, 3, 62, 0.8)
    ),
    url("http://ayokuliahs2.com/wp-content/uploads/2018/01/maxresdefault-1.jpg");
  background-size: cover;
  padding-top: 110px;
  padding-bottom: 130px;
}

#about hr {
  background-color: #ffffff;
  max-width: 200px;
  margin-left: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #fff;
}

#about .content {
  text-align: left;
  font-size: 17px;
  color: #fff;
  margin-top: 20px;
  padding: 0px;
}

#about .btn {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
  color: #fff;
  display: inline;
  position: absolute;
  margin-top: 50px;
  left: 20px;
}

#about .btn:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

#event {
  padding: 100px 100px;
  background-image: linear-gradient(
      to right top,
      rgb(13, 33, 60),
      rgb(52, 3, 62, 0.8)
    ),
    url("https://mipa.ugm.ac.id/fix/wp-content/uploads/MIPA_UGM.jpg");
  background-size: cover;
}

#event .content {
  margin-top: 50px;
}

#event .content .logo {
  width: 230px;
  height: 230px;
}

#event .btn {background-color: #537895;
background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  color: white;
}

#documentation {
  height: 600px;
  background-color: rgb(88, 66, 124);
  background-image: linear-gradient(
      to right top,
      rgb(13, 33, 60),
      rgb(52, 3, 62, 0.8)
    ),
    url("https://kampusaja.com/wp-content/uploads/2016/01/3.passing-grade-ugm-2016-universitas-gadjah-mada.jpg");
  background-size: cover;
}

#documentation img {
  height: 300px;
  size: 300px;
}

#patner {
  background-color: rgb(220, 220, 220);
  color: rgb(70, 70, 50);
  padding: 40px 100px;
}

#patner hr {
  max-width: 300px;
  background-color: rgb(70, 70, 70);
}

#patner .content {
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
}

#patner .content img {
  width: 230px;
}

#patner h3 {
  text-align: left;
}

b-button {
  margin-top: 50px;
}

.rotate {
  position: absolute;
  height: 55px;
  line-height: 55px;
  font-size: 50px;
  font-weight: bold;
  overflow: hidden;
  display: inline-block;
  min-width: 600px;
  left: calc(50% - 300px);
  margin-bottom: 50px;
}

.rotate span {
  animation: animate 6s ease infinite;
  position: relative;
  color: white;
}

@keyframes animate {
  0% {
    opacity: 1;
    top: -160px;
  }
  25% {
    top: -105px;
  }
  30% {
    top: -105px;
  }
  50% {
    top: -55px;
  }
  55% {
    top: -55px;
  }
  75% {
    top: 0px;
  }
  80% {
    top: 0px;
    opacity: 1;
  }
  100% {
    top: 50px;
  }
}

.scroll-down {
  margin-top: 200px;
  font-size: 18px;
}

.scroll-down a {
  text-decoration: none;
  color: white;
  display: block;
  max-height: 0px;
}

.arrow {
  text-align: center;
  margin-top: 40px;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
