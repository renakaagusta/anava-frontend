<template>
  <div class="page">
    <NavBar />
    <div class="login-container shadow">
      <form action="">
        <h1>LOGIN</h1>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="username"
            placeholder="Ketik disini..."
            value=""
          />
        </div>
        <div>
          <label>Sandi</label>
          <input
            type="password"
            name="password"
            placeholder="Ketik disini..."
            value=""
          />
        </div>
        <input type="submit" name="login" value="LOGIN" />
        <a href="#">Lupa kata sandi?</a>
      </form>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Login",
  components: {
    NavBar,
  },
  data() {
    return {
      authentication: {},
    };
  },
};
</script>
<style scoped>
.login-container{
    width: 380px;
    height: 400px;
    top: 50%;
    left: 50%;
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 40px 20px;
}

.login-container img{
    width: 100px;
    height: 100px;
    position: absolute;
    left: calc(50% - 50px);
    border-radius: 50%;
    top: -50px;
}

.login-container h1{
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
}

.login-container label{
    display: block;
    text-align: left;
}

.login-container div{
    margin-bottom: 20px;
}

.login-container input[type="text"], input[type="password"]{
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
    background: transparent;
    color: #000;
    height: 40px;
}

.login-container input[type="submit"]{
    width: 100%;
    border: none;
    outline: none;
    height: 40px;
    background-color: #045de9;
    background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
    color: #fff;    
}
.login-container input[type="submit"]:hover{
    cursor: pointer;
    box-shadow: 1px 1px 10px #696969;
}
a{
    display: block;
    text-align: right;
    text-decoration: none;
    font-size: 12px;
    margin-top: 10px;
}
</style>
