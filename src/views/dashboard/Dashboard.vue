<template>
  <div style="background-color:#eee;min-height:100%; min-width:100%;">
    <Header/>
    <Sidebar v-if="sidebar"/> 
    <div v-bind:class="['content', sidebar? 'content-margin':'']">
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
  computed: {
    events() {
      return this.$store.state.event.events;
    },
    sidebar() {
      return this.$store.state.ui.sidebarShow;
    }
  },
  methods: {
    getEvents() {
      this.$store.dispatch("event/getAllEvent");
    },
  },
  created() {
    this.getEvents();
  },
};
</script>

<style scoped>
.content {
  margin-top: 66px;
  width: calc(100%);
  padding-top:20px;
  position:relative;
}
.content-margin {
  margin-left: 280px;
  width: calc(100% - 280px);
}
</style>
