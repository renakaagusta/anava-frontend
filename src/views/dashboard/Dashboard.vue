<template>
  <div style="background-color:#eee">
    <b-row>
      <b-col lg="2">
        <Sidebar />
      </b-col>
      <b-col lg="10" style="min-height:690px;padding-left:45px;">
        <Header/>
        <router-view class="mt-4" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar,
  },
};
</script>
