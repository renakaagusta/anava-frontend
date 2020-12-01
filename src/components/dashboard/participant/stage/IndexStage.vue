<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3
        class="text-left d-inline float-left">
        <i class="fas fa-trophy"></i>
        {{ getStageName(stage.name) }}
      </h3>
    </div>
    <hr />
    <router-view :key="$route.fullPath" />
  </b-container>
</template>
<script>
export default {
  name: "IndexStage",
  computed: {
    stage() {
      return this.$store.state.stage.stage;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
  },
  methods: {
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
    getStageName(name) {
      switch (name) {
        case "preliminary":
          name = "Penyisihan";
          break;
        case "semifinal":
          name = "Semifinal";
          break;
        case "final":
          name = "Final";
          break;
      }
      return name;
    },
  },
  created() {
    this.getStage();
  },
  updated() {
  }
};
</script>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
