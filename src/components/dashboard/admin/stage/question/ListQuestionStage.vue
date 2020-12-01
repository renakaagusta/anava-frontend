<template>
  <div>
    <b-container class="text-left ml-0 pl-0 pt-2 pb-2">
      <router-link :to="{ name: 'CreateQuestionStage' }" class="btn btn-primary"
        ><i class="fas fa-plus"></i> Tambah</router-link
      >
    </b-container>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-center" md="2">
        <p>Nomor</p>
      </b-col>
      <b-col class="text-center" md="2">
        <p>Kesulitan</p>
      </b-col>
    </b-row>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm rounded"
      no-gutters
      v-for="question in questions"
      :key="question._id"
    >
      <b-col md="2">
        <p class="text-bold">{{ question.number }}</p>
      </b-col>
      <b-col md="2">
        <p class="text-bold">-</p>
      </b-col>
      <b-col md="8">
        <router-link class="btn btn-primary float-right" :to="'question/'+question._id">
          <i class="fas fa-pencil-alt"></i>
          Sunting
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "MainSchedule",
  computed: {
    questions() {
      return this.$store.state.question.questions;
    },
  },
  methods: {
    getAllQuestionByStage() {
      this.$store.dispatch(
        "question/getAllQuestionByStage",
        this.$route.params.idStage
      );
    },
  },
  created() {
    this.getAllQuestionByStage();
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
