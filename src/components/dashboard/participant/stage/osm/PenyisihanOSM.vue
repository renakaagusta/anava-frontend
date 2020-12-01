<template>
  <div id="working-page">
    <b-container class="bg-white p-3 rounded shadow-sm mb-4" v-if="step == 0">
      <vue-tabs>
        <v-tab title="Jadwal">
          <b-table stacked :items="itemsTab1"></b-table>
        </v-tab>
        <v-tab title="Data Peserta">
          <b-table stacked :items="itemsTab2"></b-table>
        </v-tab>
        <v-tab title="Teknis & Tata tertib">
          <b-container class="text-left p-3 border mt-2">
            Selama melakukan pengerjaan penyisihan OSM, peserta diwajibkan
            menaati peraturan berikut:<br/>
            <br />1. ..... <br />2. ..... <br />3. .....
          </b-container>
        </v-tab>
        <v-tab title="Tutorial">
          <b-container class="text-left p-3 border mt-2">
            <iframe
              width="600"
              height="320"
              src="https://www.youtube.com/embed/r0t4gHKE-0g"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </b-container>
        </v-tab>
      </vue-tabs>

      <input type="submit" value="Mulai" class="btn btn-purple mt-3" @click="nextStep()" />
    </b-container>
    <b-row v-if="step == 1">
      <!-- soal -->
      <b-col col cols="9" md="9">
        <b-card-group deck>
          <b-card
            border-variant="secondary"
            header="featured"
            header-tag="header"
            header-bg-variant="white"
            header-text-variant="black"
            align="center"
          >
            <template #header>
              <b-row class="text-left">
                <b-col md="8">Soal No. 25</b-col>
                <b-col md="4" class="text-right">
                  <b-button-group size="sm">
                    <b-button variant="secondary">Sisa Waktu</b-button>
                    <b-button variant="success">01:00:02</b-button>
                  </b-button-group>
                </b-col>
              </b-row>
            </template>
            <b-card-text class="text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium porro quas ea iusto voluptas ullam quisquam quis
              nostrum nemo ipsam obcaecati, nam illum hic. Unde ipsam nostrum
              debitis delectus nobis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, esse ab? Amet minima quaerat facilis,
              ratione corrupti odio! Nam deleniti accusamus reiciendis sit vero
              accusantium minus autem placeat voluptatibus sunt.
              <br />
              <b-form-group class="mt-2">
                <b-form-radio name="some-radios" value="A"
                  >Option A</b-form-radio
                >
                <b-form-radio name="some-radios" value="B"
                  >Option B</b-form-radio
                >
                <b-form-radio name="some-radios" value="C"
                  >Option C</b-form-radio
                >
                <b-form-radio name="some-radios" value="D"
                  >Option D</b-form-radio
                >
                <b-form-radio name="some-radios" value="E"
                  >Option E</b-form-radio
                >
              </b-form-group>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-row>
          <b-col id="nav-btn" cols="2" md="3">
            <b-button class="mt-3" block variant="primary">
              <i class="fas fa-arrow-left"></i>
              <p>Sebelumnya</p>
            </b-button>
          </b-col>
          <b-col cols="6 offset-1" md="4 offset-1">
            <b-button class="mt-3" block variant="warning">
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Ragu-Ragu
              </b-form-checkbox>
            </b-button>
          </b-col>
          <b-col id="nav-btn" cols="2 offset-1" md="3 offset-1">
            <b-button class="mt-3 mb-4" block variant="primary">
              <p>Selanjutnya</p>
              <i class="fas fa-arrow-right"></i>
            </b-button>
          </b-col>
        </b-row>
      </b-col>

      <!-- nomor soal -->
      <b-col col md="3">
        <b-card-group deck>
          <b-card
            border-variant="secondary"
            header="Nomor Soal"
            header-bg-variant="white"
            header-text-variant="black"
            align="center"
          >
            <b-card-text>
              <b-row>
                {{ JumlahSoal() }}
                <b-col
                  cols="2"
                  md="2 mr-1 mb-2"
                  v-for="number in data"
                  :key="number"
                >
                  <b-button id="number-question">
                    <p>{{ number }}</p>
                  </b-button>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-button class="mt-3 mb-5" block variant="danger"
          >Hentikan Ujian</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>
<script>
import * as datetime from "./../../../../../services/datetime";

export default {
  name: "PenyisihanOSM",

  data() {
    return {
      step: 0,
      data: [],
      answerForm: {},
      itemsTab1: [
        { "Mulai pengerjaan": 0, "Selesai pengerjaan": 0, Pengumuman: 0 },
      ],
      itemsTab2: [{ "Nomor pendaftaran": 0, "Terdaftar pada": 0 }],
    };
  },
  computed: {
    questions() {
      return this.$store.state.question.questions;
    },
    stage() {
      console.log(this.$store.state.stage.stage);
      return this.$store.state.stage.stage;
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    }
  },
  methods: {
    nextStep() {
      this.step = 1;
    },
    createAnswerForm() {
      let answerForm = new FormData();

      answerForm.append("participantId", this.answerForm.participantId);
      answerForm.append("stageId", this.answerForm.stageId);
      answerForm.append("file", this.$refs.file.files[0]);
      console.log(this.$refs.file.files[0]);

      console.log(this.answerForm);
      console.log(JSON.stringify(answerForm));

      this.$store.dispatch("answerForm/createAnswerForm", answerForm);
    },
    getQuestion() {
      this.$store.dispatch(
        "question/getAllQuestionByStage",
        this.$route.params.idStage
      );
    },
    updateQuestion() {
      this.$store.dispatch("question/updateQuestion", this.question);
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
    JumlahSoal() {
      for (let i = 0; i < 60; i++) {
        this.data[i] = i + 1;
      }
    },
  },
  created() {
    this.answerForm.stageId = this.$route.params.idStage;
    this.answerForm.participantId = this.participant.id;
    this.items = [
      {
        "Mulai pengerjaan": this.getDateTime("datetime", this.stage.started_at),
        "Selesai pengerjaan": this.getDateTime(
          "datetime",
          this.stage.finished_at
        ),
        "Pengumuman lolos": this.getDateTime("datetime", this.stage.started_at),
      },
    ];
  },
};
</script>
<style scoped>
#working-page {
  height: 100%;
}

#number-question {
  width: 40px;
  height: 40px;
}

#number-question p {
  font-size: 11px;
  margin-top: 5px;
}

#nav-btn p {
  display: inline;
}

@media (max-width: 767px) {
  #nav-btn p {
    display: none;
  }
  #number-question {
    width: 45px;
    height: 45px;
    margin-left: 15px;
  }
  #number-question p {
    font-size: 15px;
    margin-top: 5px;
  }
}
.btn-purple {
  border: 0;
  outline: 0;
  width: 30%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}
</style>
