<template>
  <nav v-bind:class="[scrollPosition > 50 ? ['black', 'shadow-sm'] : '']">
    <div class="menu-icon">
      <i class="fa fa-bars fa-2x"></i>
    </div>
    <div class="logo">
      <img class="rounded-circle" src="@/assets/logo-white.png" alt="" />
      ANAVA
    </div>
    <div class="menu">
      <ul>
        <li>
          <a href="#home" v-smooth-scroll="{ duration: 1000 }">
            Home
          </a>
        </li>
        <li>
          <a href="#about" v-smooth-scroll="{ duration: 1000 }">
            About us
          </a>
        </li>
        <li>
          <a href="#event" v-smooth-scroll="{ duration: 1000 }">
            Event
          </a>
        </li>
        <li>
          <a class="register" @click="$store.dispatch('ui/changeWelcomeComponent', 'register')">
            Register
          </a>
        </li>
        <li>
          <a class="login" @click="$store.dispatch('ui/changeWelcomeComponent', 'login')">
            Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style scoped>
.logo {
  line-height: 60px;
  position: fixed;
  float: left;
  margin: 16px 46px;
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
}

.logo img {
  width: 75px;
  height: 40px;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 60px;
  z-index: 99999999;
}

nav ul {
  line-height: 60px;
  list-style: none;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  color: #fff;
  padding: 0;
  text-align: right;
  margin: 0;
  padding-right: 40px;
  transition: 0.5s;
}

nav.black ul {
  background:rgb(13, 33, 60);
}

nav ul li {
  display: inline-block;
  padding: 16px 40px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

nav ul li a:hover {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}

.menu-icon {
  line-height: 60px;
  width: 100%;
  background: #000;
  text-align: right;
  box-sizing: border-box;
  padding: 15px 24px;
  cursor: pointer;
  color: #fff;
  display: none;
}

.register , .login{
  cursor: pointer;
}

@media (max-width: 786px) {
  .logo {
    position: fixed;
    top: 0;
    margin-top: 16px;
  }

  nav ul {
    max-height: 0px;
    background: #000;
  }

  nav.black ul {
    background: #fff;
  }

  .showing {
    max-height: 34em;
  }

  nav ul li {
    box-sizing: border-box;
    width: 100%;
    padding: 24px;
    text-align: center;
  }

  .menu-icon {
    display: block;
  }
}
</style>
