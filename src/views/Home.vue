<template>
  <div>
    <div class="home-voting"/>
    <div v-if="loading">
      <transition name="fade">
        <Loader/>
      </transition>
    </div>
    <div v-else>
      <div class="container-router">
        <transition name="fade" mode="out-in" >
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Loader
  },
  data() {
    return {
      loading : true
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
          this.loading = false;
          clearInterval(stateCheck);
        }
      }, 1000);
    }
}
  }
</script>
<style scoped>
html {
  min-height: 100% !important;
  height: 100%;
}

.home-voting {
  /*background-color: rgba(0, 0, 0, 0.8);*/
  background-color: #746cc0;
  background-image: linear-gradient(to bottom, #746cc0 0%, #58427c 80%);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
#video-bg {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
}
.container-router {
  height:100%;  
  width:100%;
  position:absolute;
}
@media only screen and (min-width: 1200px) and (max-width: 1920px){
  .voting-page {
    left:calc(50% - 500px);
    width:1000px; 
  }
}
@media only screen and (max-width: 767px) {
  .voting-page {
    left:calc(50% - 240px);
    width:480px;
  }
}

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .typed {
    margin-left:190px;
  }
</style>

