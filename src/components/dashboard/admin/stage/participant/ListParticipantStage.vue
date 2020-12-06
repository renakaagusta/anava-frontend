<template>
  <div>
    <b-container class="p-0 m-0">
      <h3 class="text-left">Outline</h3>
      <b-row>
        <b-col class="mt-3" cols="3">
          <b-container class="bg-white p-3 rounded shadow-sm border">
            <h5>Peserta</h5>
            <br />{{ outline.participants }} peserta
          </b-container>
        </b-col>
        <b-col class="mt-3" cols="3">
          <b-container class="bg-white p-3 rounded shadow-sm border">
            <h5>Pembayaran</h5>
            <br />{{ outline.pay }}
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <h3 class="text-left mt-4">Peserta</h3>
    <b-container class="text-left ml-0 pl-0 pt-2 pb-2">
      <router-link :to="{ name: 'AddParticipantStage' }" class="btn btn-primary"
        ><i class="fas fa-plus"></i> Tambah</router-link
      >
    </b-container>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p>Nomor Peserta</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p>Status Pembayaran</p>
      </b-col>
    </b-row>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm rounded"
      no-gutters
      v-for="participant in stage.participants"
      :key="participant._id"
    >
      <b-col md="1">
        <img
          class="profile"
          v-bind:src="'http://anavaugm.com/' + participant.image"
        />
      </b-col>
      <b-col md="2">
        <p class="text-bold">{{ participant.username }}</p>
        <br />
        <p class="text-secondary">
          {{ participant.firstname + " " + participant.lastname }}
        </p>
      </b-col>
      <b-col md="3">
        <b v-if="getNumberParticipant(participant)">
          {{ getNumberParticipant(participant) }}
        </b>
        <p v-else>-</p>
      </b-col>
      <b-col md="3">
        <i
          v-if="getPaymentStatus(participant)"
          class="fas fa-check text-success"
        ></i>
        <p v-else>-</p>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "ListParticipantStage",
  data() {
    return {
      outline: {
        participants: 0,
        pay: 0,
      },
      indexEvent: 0,
      indexStage: 0,
    };
  },
  computed: {
    event() {
      return this.$store.state.event.event;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
  },
  methods: {
    getStage() {
      this.$store
        .dispatch("stage/getStage", this.$route.params.idStage)
        .then(() => {
          this.stage.participants.forEach((participant) => {
            this.outline.participants++;
            participant.participant.events.forEach((event) => {
              if (event.paymentStatus == 1) this.outline.pay++;
            });
          });
        });
    },
    getPaymentStatus(participant) {
      var paymentStatus = false;
      participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.stage._id && event.paymentStatus == 1)
            paymentStatus = true;
        });
      });
      return paymentStatus;
    },
    getNumberParticipant(participant) {
      var indexEvent = 0;
      participant.participant.events.forEach((event) => {
        if (event.id == this.event._id) return indexEvent;
        indexEvent++;
      });
      return false;
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
