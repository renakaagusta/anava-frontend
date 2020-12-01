<template>
  <div class="register-page">
    <div class="logo">
      <img src="@/assets/logo-white.png" />
      <h1 class="text-white d-inline-block">ANAVA</h1>
    </div>
    <a @click="moveToWelcome()">
      <img class="close" src="@/assets/close.png" />
    </a>
    <div class="register-container shadow">
      <h1>Register</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Ketik disini..."
          v-model="user.username"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Ketik disini..."
          v-model="user.email"
        />
      </div>
      <div>
        <label>Sandi</label>
        <input
          type="password"
          name="password"
          placeholder="Ketik disini..."
          v-model="user.password"
        />
      </div>
      <div>
        <label>Konfirmasi sandi</label>
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Ketik disini..."
          v-model="user.passwordConfirmation"
        />
      </div>
      <div class="form-label-group p-1">
        <label>Provinsi</label>
        <select
          class="custom-select"
          v-model="user.province"
          @change="getCities(user.province)"
        >
          <option value="" disabled selected>Provinsi</option>
          <option v-for="province in provinces" :key="province.name">{{
            province.name
          }}</option>
        </select>
      </div>

      <div class="form-label-group p-1">
        <label>Kabupaten</label>
        <select
          class="custom-select"
          v-model="user.city"
          @change="getSubdistricts(user.city)"
        >
          <option value="" disabled selected>Kota / Kabupaten</option>
          <option v-for="city in cities" :key="city.name">{{
            city.name
          }}</option>
        </select>
      </div>

      <div class="form-label-group p-1">
        <label>Kecamatan</label>
        <select class="custom-select" v-model="user.subdistrict">
          <option value="" disabled selected>Kecamatan</option>
          <option v-for="subdistrict in subdistricts" :key="subdistrict.name">{{
            subdistrict.name
          }}</option>
        </select>
      </div>

      <input
        type="submit"
        name="register"
        class="mt-4"
        value="Register"
        @click="handleRegister()"
      />
      <p class="text-center mt-2">
        Sudah punya akun? <a @click="moveToLogin()" href="#">Login</a>
      </p>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles"
    >
    </vue-particles>
  </div>
</template>
<script>
import User from "../models/user";
import Swal from "sweetalert2";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
      provinces: [],
      cities: [],
      subdistricts: [],
    };
  },
  created() {
    this.getProvinces();
  },
  methods: {
    getProvinces() {
      this.$store.dispatch("ui/getProvinces").then((data) => {
        console.log(data);
        this.provinces = data;
      });
    },
    getCities(provincename) {
      this.$store.dispatch("ui/getCities", provincename).then((data) => {
        this.cities = data;
      });
    },
    getSubdistricts(cityname) {
      this.$store.dispatch("ui/getSubdistricts", cityname).then((data) => {
        this.subdistricts = data;
      });
    },
    moveToWelcome() {
      this.$store.dispatch("ui/changeWelcomeComponent", "welcome");
    },
    moveToLogin() {
      this.$store.dispatch("ui/changeWelcomeComponent", "login");
    },
    handleRegister() {
      this.loading = true;

      this.$store.dispatch("auth/register", this.user).then(
        (data) => {
          console.log(JSON.stringify(data));
          Swal.fire({
            title: "Berhasil melakukan pendaftaran",
            icon: "success",
            showConfirmButton: true,
          }).then(() => {
            this.moveToWelcome();
          });
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
<style scoped>
.register-page {
  background-image: linear-gradient(
      to right top,
      rgb(13, 33, 60),
      rgb(52, 3, 62, 0.8)
    ),
    url("");
  padding-bottom: 300px;
  min-height: 100%;
}

.register-page .logo {
  margin-left: -40px;
}

.register-page .logo img {
  height: 100px;
  width: 170px;
  margin-top: -20px;
}

.register-page .logo h1 {
  display: block;
  margin-top: 60px;
}

.register-page .close {
  position: absolute;
  top: 40px;
  right: 40px;
  height: 30px;
  width: 30px;
  opacity: 1;
}

.register-container {
  width: 500px;
  margin-top: 40px;
  margin-left: calc(50% - 250px);
  margin-bottom: 20px;
  background: #fff;
  box-sizing: border-box;
  padding: 40px 20px;
  position: absolute;
}

.register-container img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50% - 50px);
  border-radius: 50%;
  top: -50px;
}

.register-container h1 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.register-container label {
  display: block;
  text-align: left;
}

.register-container div {
  margin-bottom: 20px;
}

.register-container input[type="text"],
input[type="password"] {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  background: transparent;
  color: #000;
  height: 40px;
}

.register-container input[type="submit"] {
  width: 100%;
  border: none;
  outline: none;
  height: 40px;
  background-color: #150485;
  color: #fff;
}
.register-container input[type="submit"]:hover {
  cursor: pointer;
  box-shadow: 1px 1px 10px #696969;
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
