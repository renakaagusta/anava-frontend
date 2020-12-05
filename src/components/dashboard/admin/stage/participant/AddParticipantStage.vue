<template>
  <div>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
      </b-col>
      <b-col class="text-center" md="2">
        <p>Sekolah</p>
      </b-col>
    </b-row>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm rounded"
      no-gutters
      v-for="participant in participants"
      :key="participant._id"
    >
      <b-col md="1">
        <img
          class="profile"
          v-bind:src="'http://193.168.195.181.com/' + participant.image"
        />
      </b-col>
      <b-col md="2">
        <p class="text-bold">{{ participant.username }}</p>
        <br />
        <p class="text-secondary">
          {{ participant.firstname + " " + participant.lastname }}
        </p>
      </b-col>
      <b-col class="pt-2" md="2">
        <p>{{ participant.participant.school }}</p>
        <br />
      </b-col>
      <b-col class="pt-2" md="2"> </b-col>
      <b-col class="pt-2" md="2"> </b-col>
      <b-col md="3">
        <button
          class="btn btn-primary"
          :to="participant._id"
          v-if="checkParticipant(participant)"
        >
          <i class="far fa-trash-alt"></i>
          Hapus
        </button>
        <div v-else>
          <div v-if="stage.session > 1">
            <button
              class="btn btn-primary"
              @click="addParticipantToStage(participant._id, 1)"
            >
              <i class="far fa-plus-square"></i>
              Sesi 1
            </button>

            <button
              class="btn btn-primary"
              @click="addParticipantToStage(participant._id, 2)"
            >
              <i class="far fa-plus-square"></i>
              Sesi 2
            </button>
          </div>
          <div v-else>
            <button
              class="btn btn-primary"
              @click="addParticipantToStage(participant._id, 1)"
            >
              <i class="far fa-plus-square"></i>
              Tambahkan
            </button>            
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "MainSchedule",
  computed: {
    participants() {
      return this.$store.state.participant.participants;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
  },
  methods: {
    getParticipants() {
      this.$store.dispatch("participant/getAllParticipant");
    },
    addParticipantToStage(idParticipant, session) {
      var stage = {
        id: this.$route.params.idStage,
        participantId: idParticipant,
        session: session,
      };

      this.$store.dispatch("stage/addParticipantToStage", stage);
    },
    checkParticipant(participant) {
      var events = participant.participant.events;
      var isParticipant = false
      events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.$route.params.idStage) {
            isParticipant = true;
          }
        });
      });
      return isParticipant;
    },
  },
  created() {
    this.getParticipants();
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
