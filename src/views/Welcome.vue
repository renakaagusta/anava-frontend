<template>
  <div class="page">
    <Login v-if="show == 'login'" />
    <Register v-if="show == 'register'" />
    <Anava v-if="show == 'anava'" />
    <OSM v-if="show == 'osm'" />
    <Rank1 v-if="show == 'rank1'" />
    <Poster v-if="show == 'poster'" />
    <Sigma v-if="show == 'sigma'" />
    <OpenHouse v-if="show == 'openhouse'" />
    <div v-if="show == 'welcome'">
      <NavBar />
      <div class="sub-page" id="home">
        <h1 class="text-white" style="padding-top:200px;">
          Selamat datang di ANAVA #15
        </h1>
        <div class="rotate">
          <span>
            with Statistics!<br />
            Let's Find Your True Self<br />
            Dig Your Curiosity
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
              <b-col lg="4" cols="12">
                <div class="logo">
                  <img src="@/assets/logo-anava-white.png" />
                </div>
              </b-col>
              <b-col lg="7" cols="12">
                <div class="content">
                  <h1>About Us</h1>
                  <hr />
                  Ajang Pengenalan Aktivitas Statistika (ANAVA) merupakan
                  program tahunan Himpunan Mahasiswa Statistika UGM, dengan
                  tujuan memperkenalkan ilmu statistika dan prospeknya di dunia
                  kerja. Tahun ini, Anava akan hadir untuk ke lima belas
                  kalinya. Meskipun terhalang kondisi pandemi, tapi kami tetap
                  akan hadir tentunya dengan berbagai inovasi baru dari Anava
                  yang lalu.
                  <a
                    href="#event"
                    v-smooth-scroll="{ duration: 1000 }"
                    class="btn btn-white d-inline"
                    >Event</a
                  >
                </div>
                <!-- <button
                  class="btn text"
                  @click="$store.dispatch('ui/changeWelcomeComponent', 'anava')"
                >
                  Selengkapnya
                </button> -->
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
                  class="bg-white rounded p-3 shadow-sm mb-5"
                  style="width:100%; height:400px;"
                >
                  <h1>OSM</h1>
                  <img class="logo" src="@/assets/osm.png" /><br />
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
                  class="bg-white rounded p-3 shadow-sm mb-5"
                  style="width:100%; height:400px;"
                >
                  <h1>STARTED</h1>
                  <img class="logo" src="@/assets/started.png" /><br />
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
              <b-col lg="4">
                <b-container
                  class="bg-white rounded p-3 shadow-sm mb-5"
                  style="width:100%; height:400px;"
                >
                  <h1>THE ONE</h1>
                  <img class="logo" src="@/assets/the-one.png" /><br />
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
                  class="bg-white rounded p-3 shadow-sm mb-5"
                  style="width:100%; height:400px;"
                >
                  <h1>Sigma</h1>
                  <img class="logo" src="@/assets/sigma.png" /><br />
                  <button
                    class="btn p-3 mt-3 w-100"
                    @click="
                      $store.dispatch('ui/changeWelcomeComponent', 'sigma')
                    "
                  >
                    Detail
                  </button>
                </b-container>
              </b-col>

              <b-col lg="4">
                <b-container
                  class="bg-white rounded p-3 shadow-sm mb-5"
                  style="width:100%; height:400px;"
                >
                  <h1>Open House</h1>
                  <img class="logo" src="@/assets/open-house.png" /><br />
                  <button
                    class="btn p-3 mt-3 w-100"
                    @click="
                      $store.dispatch('ui/changeWelcomeComponent', 'openhouse')
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
      <div class="sub-page" id="partner">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h1>Partnership</h1>
          <hr />
          <div class="content bg-white p-5 rounded shadow-sm">
            <h3>Sponsor :</h3>
            <b-row>
              <b-col class="mb-3" lg="3" sm="12" >
                <img src="/patnership/sponsor/kospin-jasa.png" style="height:80px;"/><br/>
                <small>"Kospin Jasa menyediakan pinjaman KUR dengan bunga 6% efektif per tahun."</small>
                <br/>
              </b-col>
              <b-col lg="3" sm="12">
                <img src="/patnership/sponsor/bess-finance.png"  style="height:80px;"/>
              </b-col>
            </b-row><br/><br/>
            <h3 class="mt-5">Media Partner :</h3>
            <b-row>
              <b-col cols="2">
                <img src="/patnership/medpar/suara-jogja.png" style="height:100px; width:280px;"/>
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
// import Anava from "@/views/articles/OSM.vue";
import OSM from "@/views/articles/OSM.vue";
import Rank1 from "@/views/articles/Rank1.vue";
import Poster from "@/views/articles/Poster.vue";
import Sigma from "@/views/articles/Sigma.vue";
import OpenHouse from "@/views/articles/OpenHouse.vue";

export default {
  name: "Welcome",
  components: {
    NavBar,
    Footer,
    Login,
    Register,
    // Anava,
    OSM,
    Rank1,
    Poster,
    Sigma,
    OpenHouse,
  },
  computed: {
    show() {
      return this.$store.state.ui.welcomeShow;
    },
  },
  created() {
    window.scrollTo(0, 0);
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
    url("http://anavaugm.com/bg-home.jpg");
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
    url("http://anavaugm.com/bg-about.jpg");
  background-size: cover;
  min-height: 100%;
  padding-top: 100px;
  padding-bottom: 180px;
  padding-left: 200px;
  padding-right: 40px;
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
  padding-left: 50px;
  text-align: left;
  font-size: 17px;
  color: #fff;
  margin-top: 20px;
}

#about .btn {
  padding: 10px 30px;
  background-color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
  display: inline;
  position: absolute;
  margin-top: 50px;
  left: 70px;
}

#about .btn:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

#about img {
  width: 300px;
  height: 300px;
  margin-left: calc(50% - 150px);
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
  width: 120px;
  height: 230px;
}

#event .btn {
  background-color: #537895;
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

#partner {
  background-color: rgb(220, 220, 220);
  color: rgb(50, 50, 50);
  padding: 40px 100px;
}

#partner hr {
  max-width: 300px;
  background-color: rgb(70, 70, 70);
}

#partner .content {
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
}

#partner .content img {
  height: 100px;
  width: 250px;
  padding: 5px;
}

#partner #image-small {
  height: 100px;
  width: 150px;
}

#partner h3 {
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
  min-width: 400px;
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

@media (max-width: 800px) {
  #documentation img {
    height: 200px;
    size: 200px;
  }
  #event {
    padding: 100px 40px;
  }
  #partner {
    padding: 40px 50px;
  }
  #partner .content img {
    width: 180px;
  }
  #partner h3 {
    text-align: center;
    font-size: 1.5em;
  }
  #about {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 700px) {
  #documentation img {
    height: 200px;
    size: 200px;
  }
  #event {
    padding: 100px 40px;
  }
  #partner {
    padding: 40px 50px;
  }
  #partner .content img {
    width: 180px;
  }
  #partner h3 {
    text-align: center;
    font-size: 1.5em;
  }
  #about {
    padding-left: 10px;
    padding-right: 10px;
  }
  .rotate {
    min-width: 100px;
    padding: 0;
    margin: 0;
    font-size: 22px;
    margin-left: calc(50% - 60px);
    overflow: hidden;
  }
}
@media (max-width: 650px) {
  #documentation img {
    height: 200px;
    size: 200px;
  }
  #event {
    padding: 100px 40px;
  }
  #partner {
    padding: 40px 50px;
  }
  #partner .content img {
    width: 180px;
  }
  #partner h3 {
    text-align: center;
    font-size: 1.5em;
  }
  #about {
    padding-left: 10px;
    padding-right: 10px;
  }
  .rotate {
    min-width: 100px;
    padding: 0;
    margin: 0;
    font-size: 22px;
    margin-left: calc(50% - 40px);
    overflow: hidden;
  }
}
</style>
