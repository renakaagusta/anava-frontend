<template>
  <div>
    <h3 class="text-left mt-4">Peserta</h3>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p>Nomor Peserta</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p>Nilai</p>
      </b-col>
    </b-row>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm rounded"
      no-gutters
      v-for="answerForm in answerForms"
      :key="answerForm._id"
    >
      <b-col md="1">
        <img
          class="profile"
          v-bind:src="'http://anavaugm.com/' + answerForm.participant.image"
        />
      </b-col>
      <b-col md="2">
        <p class="text-bold">{{ answerForm.participant.username }}</p>
        <br />
        <p class="text-secondary">
          {{ answerForm.participant.firstname + " " + answerForm.participant.lastname }}
        </p>
      </b-col>
      <b-col md="3">
        <b v-if="getNumberParticipant(answerForm.participant)">
          {{ getNumberParticipant(answerForm.participant) }}
        </b>
        <p v-else>-</p>
      </b-col>
      <b-col md="3">
        {{ answerForm.score }}
      </b-col>
      <b-col md="3">
        <router-link class="btn btn-primary" :to="'result/' + answerForm._id">
          <i class="fas fa-search"></i>
          Detail
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "ListParticipantStage",
  data() {
    return {
      event: {},
      stage: {},
      outline: {
        participants: 0,
        pay: 0,
      },
      indexEvent: 0,
      indexStage: 0,
    };
  },
  computed: {
    answerForms() {
      var list = this.$store.state.answerForm.answerForms;
      list.sort((a, b) => a.score - b.score);
      return list;
    },
  },
  methods: {
    getAnswerForm() {
      this.$store
        .dispatch("answerForm/getAnswerFormByStage", this.$route.params.idStage)
        .then(() => {
          /*this.stage = this.$store.state.stage.stage;
          this.outline.participants = 0;
          this.outline.pay = 0;
          this.stage.participants.forEach((participant) => {
            this.outline.participants++;
            participant.participant.events.forEach((event) => {
              if (event.id == this.event._id &&event.number) {
                this.outline.pay++;
              }
            });
          });*/
        });
    },
    getPaymentStatus(participant) {
      var paymentStatus = false;
      participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.stage._id && event.number) paymentStatus = true;
        });
      });
      return paymentStatus;
    },
    getNumberParticipant(participant) {
      var number = false;
      participant.participant.events.forEach((event) => {
        if (event.id == this.event._id) {
          number = event.number;
        }
      });
      return number;
    },
  },
  updated() {
    if (this.$route.params.idStage != this.stage._id) {
      this.getAnswerForm();
    }
  },
  created() {
    const that = this;
    this.getAnswerForm();

    setInterval(() => {
      that.event = JSON.parse(localStorage.getItem("event"));
      that.stage = this.$store.state.stage.stage;
    }, 100);
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
