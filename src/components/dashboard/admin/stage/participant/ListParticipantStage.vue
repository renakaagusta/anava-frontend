<template>
  <div>
    <b-container class="text-left ml-0 pl-0 pt-2 pb-2">
      <router-link :to="{name:'AddParticipantStage'}" class="btn btn-primary"><i class="fas fa-plus"></i> Tambah</router-link>
    </b-container>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
      </b-col>
      
      <b-col class="text-center" md="2">
        <p>Nilai</p>
      </b-col>
    </b-row>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm rounded"
      no-gutters
      v-for="participant in stage.participants"
      :key="participant._id"
    >
      <b-col md="1">
        <img class="profile" v-bind:src="'http://localhost:8080/' + participant.image" />
      </b-col>
      <b-col md="2">
        <p class="text-bold">{{ participant.username }}</p>
        <br />
        <p class="text-secondary">
          {{
            participant.firstname +
              " " +
              participant.lastname
          }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "MainSchedule",
  computed: {
    stage() {
      return this.$store.state.stage.stage;
    },
  },
  methods: {
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
  },
  created() {
    this.getStage();
  },
};
</script>
<style scoped>
p {
  display: inline;
}
.profile {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
</style>
