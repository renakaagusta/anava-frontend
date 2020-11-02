<template>
  <div class="wrapper">
    <nav id="sidebar" class="">
      <div class="sidebar-header">
        <div class="profile">
          <router-link class="text-white" :to="{ name: 'DashboardMain' }">
            <b-row>
              <b-col lg="3">
                <img class="img-profile" src="@/assets/logo-big.png" />
              </b-col>
              <b-col class="sidebar-text text-left" lg="8">
                <p class="name">Renaka Agusta</p>
                <p class="type">Peserta</p>
              </b-col>
            </b-row>
          </router-link>
        </div>
      </div>

      <div class="sidebar-body">
        <ul class="list-unstyled components text-white">
          <li
            @click="selectedItem = 0"
            v-bind:class="[selectedItem == 0 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'DashboardMain' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-home"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  Beranda
                </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 1"
            v-bind:class="[selectedItem == 1 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainDocument' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="far fa-copy"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  Dokumen
                </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 2"
            v-bind:class="[selectedItem == 2 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainPayment' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline">
                    <i class="fas fa-money-bill-wave"></i>
                  </div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  Pembayaran
                </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 3"
            v-bind:class="[selectedItem == 3 ? 'active' : '']"
          >
            <router-link class="text-white" :to="{ name: 'MainSchedule' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="far fa-calendar-alt"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  Jadwal
                </b-col>
              </b-row>
            </router-link>
          </li>
          <li
            @click="selectedItem = 4"
            v-bind:class="[selectedItem == 4 ? 'active' : '']"
          >
            <a class="text-white">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="far fa-calendar-alt"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  OSM
                </b-col>
              </b-row>
            </a>
            <ul
              class="list-unstyled components text-white"
              v-if="selectedItem == 4"
            >
              <li>
                <router-link class="text-white" :to="{ name: 'DashboardMain' }">
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10">
                      Penyisihan
                    </b-col>
                  </b-row>
                </router-link>
              </li>
              <li>
                <router-link class="text-white" :to="{ name: 'DashboardMain' }">
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10">
                      Semifinal
                    </b-col>
                  </b-row>
                </router-link>
              </li>
              <li>
                <router-link class="text-white" :to="{ name: 'DashboardMain' }">
                  <b-row>
                    <b-col lg="1">
                      <div class="inline"><i class="fas fa-trophy"></i></div>
                    </b-col>
                    <b-col class="sidebar-text" lg="10">
                      Final
                    </b-col>
                  </b-row>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link class="text-white" :to="{ name: 'DashboardMain' }">
              <b-row>
                <b-col lg="1">
                  <div class="inline"><i class="fas fa-award"></i></div>
                </b-col>
                <b-col class="sidebar-text" lg="10">
                  Sertifikat
                </b-col>
              </b-row>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      textBold: "text-bold",
      selectedItem: 0,
      scrollY: 0,
    };
  },
  created() {
    if (window.location.href.includes("session")) this.selectedItem = 1;
    else if (window.location.href.includes("participant"))
      this.selectedItem = 2;
    else if (window.location.href.includes("candidate")) this.selectedItem = 3;
    else if (window.location.href.includes("setting")) this.selectedItem = 4;
    else this.selectedItem = 0;

    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

* {
  font-family: "Poppins", sans-serif;
}

.wrapper {
  display: flex;
  align-items: stretch;
  position: fixed;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
}

#sidebar.active {
  margin-left: -250px;
}

.img-profile {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  /* don't forget to add all the previously mentioned styles here too */
  background: #555;
  color: #fff;
  transition: all 0.3s;
  text-align: left;
}

#sidebar .sidebar-header {
  background: #444;
}

#sidebar .sidebar-header .brand {
  padding: 12px;
  background: #252525;
  text-align: center;
}

#sidebar .sidebar-header .profile {
  padding: 20px;
  background: #333;
}

#sidebar .sidebar-header .profile a {
  color: white;
  text-decoration: none;
}

.profile .name {
  font-weight: bold;
}

.profile p {
  margin: 0;
  padding: 0;
}

#sidebar ul p {
  color: #fff;
  padding: 5px;
}

#sidebar ul li a {
  padding: 15px 25px;
  font-size: 16px;
  display: block;
}
#sidebar ul li a:hover {
  color: #454545;
  background: #444;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #444;
}

.sidebar-body {
  padding-left: 5px;
  padding-right: 5px;
}

ul a {
  text-decoration: none;
  color: white;
  border-radius: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}
ul a:hover {
  text-decoration: none;
}
.text-bold {
  font-weight: bold;
}
.text-normal {
  font-weight: normal;
}
</style>
