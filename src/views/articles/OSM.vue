<template>
  <div class="osm-page">
    <div class="logo">
      <img src="@/assets/logo-white.png" />
      <h1 class="text-white d-inline-block">OSM</h1>
      <hr />
    </div>
    <a @click="$store.dispatch('ui/changeWelcomeComponent', 'welcome')">
      <img class="close" src="@/assets/close.png" />
    </a>
    <b-container
      id="description"
      class="bg-purple shawod-sm rounded text-white text-left mt-5"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </b-container>
    <b-container
      id="category"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Kategori</h1>
      <b-row>
        <b-col lg="1">
          <i class="fas fa-users fa-9x"></i>
        </b-col>
        <b-col lg="10">
          <b-container class="description">
            <h2 class="text  text-white">
              Terbuka untuk pelajar SMA
            </h2>
            <h5 class=" text-white">Individu</h5>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="schedule"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Agenda</h1>
      <b-row>
        <b-col lg="1">
          <i class="far fa-calendar-alt fa-9x"></i>
        </b-col>
        <b-col lg="10">
          <b-container class="description">
            <h4 class="text  text-white">
              Pendaftaran
            </h4>
            <p class="text-white">7 Desember 2020</p>
            <h4 class="text text-white mt-4">
              Pelaksanaan lomba
            </h4>
            <p class="text-white">6 Januari 2020</p>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="contact"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Kontak</h1>
      <b-row>
        <b-col lg="1">
          <i class="fas fa-phone-alt fa-9x"></i>
        </b-col>
        <b-col lg="10">
          <b-container class="description">
            <h2 class="text  text-white">
              Nama CP
            </h2>
            <h5 class="text-white">08885671520</h5>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="prize"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Total hadiah</h1>
      <b-row>
        <b-col lg="1">
          <i class="fas fa-gift fa-9x"></i>
        </b-col>
        <b-col lg="10">
          <b-container class="description">
            <h2 class="text text-white">
              Rp 3.000.000
            </h2>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="guidebook"
      class="bg-purple shawod-sm rounded text-white text-left"
    >
      <h1>Guidebook</h1>
      <b-row>
        <b-col lg="1">
          <i class="fas fa-book fa-9x"></i>
        </b-col>
        <b-col lg="10">
          <b-container class="description">
            <button class="btn">
              Unduh guidebook
            </button>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <button class="btn btn-register"><h3>Daftar sekarang</h3></button>
  </div>
</template>
<script>
export default {
  name: "OSM",
  data() {
    return {
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
};
</script>
<style scoped>
.osm-page {
  background: linear-gradient(
    to right top,
    rgb(13, 33, 60),
    rgb(52, 3, 62, 0.8)
  );
  min-height: 100%;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 40px;
}

.osm-page .logo img {
  height: 80px;
  width: 160px;
  margin-top: -40px;
}

.osm-page .logo h1 {
  display: block;
  margin-top: 60px;
  font-size: 60px;
}

.osm-page .close {
  position: absolute;
  top: 40px;
  right: 40px;
  height: 30px;
  width: 30px;
  opacity: 1;
}

.osm-page hr {
  background-color: #fff;
  margin-top: 50px;
  padding: 1px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
}

#description {
  background: linear-gradient(
    to right top,
    rgb(10, 10, 10),
    #09203f
  );
  min-height: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 22px;
}

#category {
  margin-top: 80px;
}

#category .description {
  padding-top: 20px;
  margin-left: 130px;
}

#schedule {
  margin-top: 80px;
}

#schedule .description {
  padding-top: 0;
  margin-top: -10px;
  margin-left: 130px;
}

#schedule .description p {
  font-size: 18px;
}

#contact {
  margin-top: 80px;
}

#contact .description {
  margin-left: 130px;
}

#prize {
  margin-top: 80px;
}

#prize .description {
  margin-top: 20px;
  margin-left: 130px;
}

#guidebook {
  margin-top: 80px;
}

#guidebook .description {
  margin-top: 20px;
  margin-left: 130px;
}

#guidebook .btn {
  background: #fff;
  padding: 15px;
  border-radius: 2px;
  margin-top: 20px;
}

.btn-register {
  padding: 20px;
  border-radius: 10px;
  margin-top: 80px;
  width: 300px;
  color: #fff;
  background-color: #537895;
  background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
}

a {
  display: inline;
  text-decoration: none;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

p {
  color: #000;
  font-size: 12px;
  margin: 0;
  padding: 0;
}
</style>
