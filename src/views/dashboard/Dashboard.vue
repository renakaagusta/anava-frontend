<template>
  <div style="background-color:#ffff;min-height:100%; min-width:100%;">
    <Header/>
    <Sidebar/> 
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar
  },
};
</script>

<style scoped>
.content {
  margin-top: 66px;
  margin-left:250px;
  max-width:calc(100%-250px);
  padding-top:20px;
  padding-left:40px;
  padding-right: 10px;
  position:relative;
}
</style>
