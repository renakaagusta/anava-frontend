<template>
  <div>
    <h3 class="text-left mt-4">Peserta</h3>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
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
          v-bind:src="'http://52.163.218.138/' + answerForm.participant.image"
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
        {{ answerForm.score }}
      </b-col>
      <b-col md="3">
        
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
    stage() {
      return JSON.parse(
        localStorage.getItem("stage" + this.$route.params.idStage)
      );
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
  },
  methods: {
    getAnswerForm() {
      this.$store
        .dispatch("answerForm/getAnswerFormByStage", this.$route.params.idStage)
    },
    getPaymentStatus(participant) {
      var paymentStatus = 0;
      participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.stage._id && event.number) paymentStatus = true;
        });
      });
      return paymentStatus;
    },
    getNumberParticipant(participant) {
      participant.participant.events.forEach((event) => {
        if (event.name == this.event.name) {
          return event.number;
        }
      });
    },
  },
  created() {
    this.getAnswerForm();
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
