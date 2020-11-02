<template>
  <div class="register-page">
    <img class="logo" src="@/assets/logo-white.png" />
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

      <div>
        <label>Asal Sekolah</label>
        <input
          type="text"
          name="school"
          placeholder="Ketik disini..."
          v-model="user.school"
        />
      </div>

      <div class="form-label-group p-1">
        <select
          class="custom-select"
          v-model="user.province"
          @change="getCities(user.province)"
        >
          <option value="" disabled selected>Provinsi</option>
          <option v-for="province in provinces" :key="province.nama">{{
            province.nama
          }}</option>
        </select>
      </div>

      <div class="form-label-group p-1">
        <select
          class="custom-select"
          v-model="user.city"
          @change="getSubdistricts(user.city)"
        >
          <option value="" disabled selected>Kota / Kabupaten</option>
          <option v-for="city in cities" :key="city.nama">{{
            city.nama
          }}</option>
        </select>
      </div>

      <div class="form-label-group p-1">
        <select class="custom-select" v-model="user.subdistrict">
          <option value="" disabled selected>Kecamatan</option>
          <option v-for="subdistrict in subdistricts" :key="subdistrict.nama">{{
            subdistrict.nama
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
      <p class="text-center mt-2">Sudah punya akun? <a href="#">Login</a></p>
    </div>
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
        this.provinces = data;
      });
    },
    getCities(provinceName) {
      this.$store.dispatch("ui/getCities", provinceName).then((data) => {
        this.cities = data;
      });
    },
    getSubdistricts(cityName) {
      this.$store.dispatch("ui/getSubdistricts", cityName).then((data) => {
        this.subdistricts = data;
      });
    },
    moveToWelcome() {
      this.$store.dispatch('ui/changeWelcomeComponent', 'welcome')
    },
    handleRegister() {
      this.loading = true;

      this.$store.dispatch("auth/register", this.user).then(
          (data) => {
            console.log(JSON.stringify(data));
            Swal.fire({
              title: "Berhasil melakukan pendaftaran",
              icon: 'success',
              showConfirmButton: true,
            }).then(()=>{
              this.moveToWelcome();
            })
          },
          (error) => {
            console.log(error)
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
  background-color: #45046a;
  min-height: 100%;
}

.register-page .logo {
  height: 100px;
  width: 170px;
  margin-top: 40px;
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
  width: 400px;
  margin-top: 40px;
  margin-left: calc(50% - 200px);
  margin-bottom: 20px;
  background: #fff;
  box-sizing: border-box;
  padding: 40px 20px;
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
