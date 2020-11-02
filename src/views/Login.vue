<template>
  <div class="login-page">
    <img class="logo" src="@/assets/logo-white.png"/>
    <a @click="$store.dispatch('ui/changeWelcomeComponent', 'welcome')">
      <img class="close" src="@/assets/close.png" />
    </a>
    <div class="login-container shadow">
      <h1>LOGIN</h1>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="username"
          placeholder="Ketik disini..."
          v-model="user.username"
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
      <p class="text-left">
        <a href="#">Lupa kata sandi?</a>
      </p>
      <input type="submit" name="login" class="mt-4" value="Login" @click="handleLogin()" />
      <p class="text-center mt-2">Belum punya akun? <a href="#">Daftar</a></p>
    </div>
  </div>
</template>
<script>
import User from "../models/user";
import Swal from "sweetalert2";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      //this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;

      if (this.user.username && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push('/dashboard');
            Swal.fire({
              icon: "success",
              title: "Login berhasil",
              showConfirmButton: true,
            }).then(() => {});
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
};
</script>
<style scoped>
.login-page {
  background-color: #45046a;
  min-height: 100%;
}

.login-page .logo {
  height: 100px;
  width: 170px;
  margin-top: 40px;
}

.login-page .close {
  position: absolute;
  top: 40px;
  right: 40px;
  height: 30px;
  width: 30px;
  opacity: 1;
}

.login-container {
  width: 400px;
  height: 400px;
  margin-top: 40px;
  margin-left: calc(50% - 200px);
  margin-bottom: 20px;
  background: #fff;
  box-sizing: border-box;
  padding: 40px 20px;
}

.login-container img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: calc(50% - 50px);
  border-radius: 50%;
  top: -50px;
}

.login-container h1 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.login-container label {
  display: block;
  text-align: left;
}

.login-container div {
  margin-bottom: 20px;
}

.login-container input[type="text"],
input[type="password"] {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  background: transparent;
  color: #000;
  height: 40px;
}

.login-container input[type="submit"] {
  width: 100%;
  border: none;
  outline: none;
  height: 40px;
  background-color: #150485;
  color: #fff;
}
.login-container input[type="submit"]:hover {
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
