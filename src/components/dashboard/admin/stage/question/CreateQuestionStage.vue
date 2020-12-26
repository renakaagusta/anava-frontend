<template>
  <div>
    <b-container
      class="bg-white p-3 mt-3 shadow-sm rounded"
      v-if="this.stage.name == 'preliminary'"
    >
      <h1 class="mt-2">Buat soal</h1>
      <b-form class="text-left ml-5 mt-4 mr-5">
        <b-form-group>
          <h2>Nomor</h2>
          <input
            type="number"
            placeholder="masukan Nomor"
            v-model="question.number"
            value="1"
          />
        </b-form-group>
        <b-form-group>
          <h2>Soal</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Soal"
            v-model="question.content"
          ></vue-editor>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan A</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan A"
            v-model="question.options[0]"
          ></vue-editor>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan B</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan B"
            v-model="question.options[1]"
          ></vue-editor>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan C</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan C"
            v-model="question.options[2]"
          ></vue-editor>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan D</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan D"
            v-model="question.options[3]"
          ></vue-editor>
        </b-form-group>
        <b-form-group>
          <h2>Pilihan E</h2>
          <vue-editor
            type="text"
            id="content"
            placeholder="Masukan Pilihan E"
            v-model="question.options[4]"
          ></vue-editor>
        </b-form-group>
        <b-form-group>
          <h2>Kunci</h2>
          <select class="custom-select" v-model="question.key">
            <option value="A" selected>A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </b-form-group>
        <b-form-group v-if="event.name == 'OSM' && stage.name == 'preliminary'">
          <h2>Sesi</h2>
          <select class="custom-select" v-model="question.session">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </b-form-group>
        <b-form-group
          v-if="event.name == 'The One' && stage.name == 'preliminary'"
        >
          <h2>Poin</h2>
          <input
            type="number"
            placeholder="masukan Poin"
            v-model="question.poin"
            value="1"
          />
          <b-form-group>
            <h2>Mata Pelajaran</h2>
            <select class="custom-select" v-model="question.lesson">
              <option value="Matematika" selected>Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Kimia">Kimia</option>
              <option value="Biologi">Biologi</option>
            </select>
          </b-form-group>
        </b-form-group>
        <a
          @click="createQuestion()"
          href="#"
          class="btn btn-primary"
          type="submit"
        >
          <i class="far fa-save text-white"></i>
          Simpan
        </a>
      </b-form>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "CreateQuestionStage",
  data() {
    return {
      question: {
        stage: "",
        content: "",
        options: [],
        key: "",
      },
    };
  },
  computed: {
    questions() {
      return this.$store.state.question.questions;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
    event() {
      return this.$store.state.event.event;
    },
  },
  methods: {
    createQuestion() {
      var options = [];
      var index = 0;
      var letters = ["A", "B", "C", "D", "E"];
      this.question.options.forEach((option) => {
        options.push({
          letter: letters[index],
          content: option,
        });
        index++;
      });
      this.question.options = options;
      this.$store.dispatch("question/createQuestion", this.question);
    },
  },
  created() {
    this.question.stageId = this.$route.params.idStage;
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
