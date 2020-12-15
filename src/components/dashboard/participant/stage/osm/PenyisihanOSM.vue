<template>
  <div id="working-page">
    <b-container class="bg-white p-3 rounded shadow-sm mb-4" v-if="step == 0">
      <b-container class="border">
        <vue-tabs>
          <v-tab title="Data Peserta">
            <table class="table table-border">
              <tr class="border">
                <td><b>Status Pembayaran</b></td>
                <td v-if="stageInformationOfParticipant.number.length == 0">
                  -
                </td>
                <td v-if="stageInformationOfParticipant.number > 0">
                  <i class="fas fa-check text-success"></i>
                </td>
              </tr>
              <tr class="border">
                <td><b>Nomor Peserta</b></td>
                <td v-if="stageInformationOfParticipant.number == null">-</td>
                <td v-if="stageInformationOfParticipant.number != null">
                  {{ stageInformationOfParticipant.number }}
                </td>
              </tr>
              <tr class="border">
                <td><b>Terdaftar pada</b></td>
                <td v-if="stageInformationOfParticipant.pay_at == null">-</td>
                <td v-if="stageInformationOfParticipant.pay_at != null">
                  {{
                    getDateTime(
                      "datetime",
                      stageInformationOfParticipant.pay_at
                    )
                  }}
                </td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Jadwal">
            <table class="table table-border">
              <tr class="border">
                <td><b>Sesi</b></td>
                <td>{{ stageInformationOfParticipant.session }}</td>
              </tr>
              <tr class="border">
                <td><b>Mulai pengerjaan</b></td>
                <td>-</td>
              </tr>
              <tr class="border">
                <td><b>Selesai pengerjaan</b></td>
                <td>-</td>
              </tr>
            </table>
          </v-tab>

          <v-tab title="Pakta Integritas"
            ><div id="dropFileForm">
              <input
                type="file"
                id="fileInput"
                ref="osis_card"
                @change="addFile('osis_card')"
              />

              <label for="fileInput" id="fileLabel">
                <i class="fa fa-upload fa-5x"></i>
                <br />
                <span id="fileLabelText">
                  Unggah pakta integritas
                </span>
                <br />
                <span id="uploadStatus"></span>
              </label>

              <input
                type="submit"
                value="Upload"
                class="btn btn-purple"
                @click="uploadFile('osis_card')"
                disabled="true"
              />
            </div>
          </v-tab>
          <v-tab title="Pengumuman">
            <div
              class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2"
            >
              <p>
                <i class="fas fa-exclamation-triangle fa-2x"></i>
                <br />
                Belum ada pengumuman
              </p>
            </div>
          </v-tab>
          <v-tab title="Dokumen">
            <b-container class="text-left p-3 border mt-2">
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a target="blank" href="http://anavaugm.com/OSM/guidebook.pdf">
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Guidebook</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border mt-3">
                <a target="blank" href="http://anavaugm.com/OSM/silabus.pdf">
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Silabus</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border mt-3">
                <a
                  target="blank"
                  href="http://anavaugm.com/OSM/pakta-integritas.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Pakta Integritas</h2>
                </a>
              </b-container>
            </b-container>
          </v-tab>
          <v-tab title="Tutorial">
            <div
              class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2"
            >
              <p>
                <i class="fas fa-exclamation-triangle fa-2x"></i>
                <br />
                Tutorial belum diunggah
              </p>
            </div>
          </v-tab>
        </vue-tabs>
      </b-container>

      <input
        type="submit"
        value="Mulai"
        class="btn btn-purple mt-3"
        @click="nextStep()"
        disbaled="false"
      />
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
                <b-col md="8">Soal No. {{ currentNumber + 1 }}</b-col>
                <b-col md="4" class="text-right">
                  <b-button-group size="sm">
                    <b-button variant="secondary">Sisa Waktu</b-button>
                    <b-button variant="success">01:00:02</b-button>
                  </b-button-group>
                </b-col>
              </b-row>
            </template>
            <b-card-text class="text-left">
              <div v-html="answerForm.questions[currentNumber].content" />
              <br />
              <b-form-radio-group
                class="mt-2"
                v-model="answerForm.answers[currentNumber]"
              >
                <b-form-radio
                  name="some-radios"
                  value="A"
                  @change="selectAnswer('A')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[0].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="B"
                  @change="selectAnswer('B')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[1].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="C"
                  @change="selectAnswer('C')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[2].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="D"
                  @change="selectAnswer('D')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[3].content
                    "
                  ></div></b-form-radio
                ><br />

                <b-form-radio
                  name="some-radios"
                  value="E"
                  @change="selectAnswer('E')"
                  ><div
                    v-html="
                      answerForm.questions[currentNumber].options[4].content
                    "
                  ></div
                ></b-form-radio>
              </b-form-radio-group>
            </b-card-text>
          </b-card>
        </b-card-group>
        <b-row>
          <b-col id="nav-btn" cols="2" md="3">
            <b-button class="mt-3" block variant="primary" @click="back()">
              <i class="fas fa-arrow-left"></i>
              <p>Sebelumnya</p>
            </b-button>
          </b-col>
          <b-col cols="6 offset-1" md="4 offset-1">
            
          </b-col>
          <b-col id="nav-btn" cols="2 offset-1" md="3 offset-1">
            <b-button class="mt-3 mb-4" block variant="primary" @click="next()">
              <p>Selanjutnya</p>
              <i class="fas fa-arrow-right"></i>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <!-- nomor soal -->
      <b-col col md="3">
        <b-card-group deck>
          <b-card header="Nomor Soal" align="center">
            <b-card-text>
              <b-row>
                <b-col
                  cols="2"
                  md="2 mr-1 mb-2"
                  v-for="(question, index) in answerForm.questions"
                  :key="question._id"
                >
                  <div
                    v-if="answerForm.answers[index] != 'F' && answerForm.answers[index] != null"
                    class="btn btn-primary"
                    @click="selectNumber(index)"
                  >
                    <p>{{ index + 1 }}</p>
                  </div>
                  <div
                    v-if="answerForm.answers[index] == 'F'"
                    class="btn btn-warning"
                    @click="selectNumber(index)"
                  >
                    <p>{{ index + 1 }}</p>
                  </div>
                  <div
                    v-if="answerForm.answers[index] == null"
                    class="btn btn-secondary"
                    @click="selectNumber(index)"
                  >
                    <p>{{ index + 1 }}</p>
                  </div>
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
      currentNumber: 0,
      stageInformationOfParticipant: {},
      itemsTab1: [],
      itemsTab2: [{ "Nomor pendaftaran": 0, "Terdaftar pada": 0 }],
    };
  },
  computed: {
    totalQuestion() {
      return this.$store.state.question.questions;
    },
    stage() {
      return this.$store.state.stage.stage;
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    nextStep() {
      this.step = 1;
      this.createAnswerForm();
    },
    selectNumber(number) {
      this.currentNumber = number;
    },
    next() {
      if (this.currentNumber < this.answerForm.questions.length - 1)
        this.currentNumber++;
    },
    back() {
      if (this.currentNumber > 0) this.currentNumber--;
    },
    setDoubtful() {
      this.answerForm.answers[this.currentNumber] = 'F';
    },
    selectAnswer(letter) {
      this.answerForm.answers[this.currentNumber] = letter;
    },

    createAnswerForm() {
      this.$store
        .dispatch("answerForm/createAnswerForm", this.answerForm)
        .then((response) => {
          this.answerForm = response;
          this.answerForm.answers = [];
          this.answerForm.questions.forEach(() => {
            this.answerForm.answers.push(null);
          });
        });
    },
    getAllQuestionByStage() {
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
    getStage() {
      this.$store.dispatch("stage/getStage", this.$route.params.idStage);
    },
    getStageInformationOfParticipant() {
      this.participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.stage._id) {
            this.stageInformationOfParticipant = stage;
            this.stageInformationOfParticipant.number = event.number;
          }
        });
      });
    },
    JumlahSoal() {
      for (let i = 0; i < 60; i++) {
        this.data[i] = i + 1;
      }
    },
  },
  created() {
    this.getStage();
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
    this.getStageInformationOfParticipant();
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
#dropFileForm {
  margin: 16px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.5s;
}

#dropFileForm #fileLabel {
  background-color: rgba(200, 200, 200, 0.5);
  display: block;
  padding: 16px;
  position: relative;
  cursor: pointer;

  border: 2px dashed #555;
}

#dropFileForm #fileInput {
  display: none;
}

#dropFileForm #fileLabel:after,
#dropFileForm #fileLabel:before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: -2;
  border-radius: 8px 8px 0 0;
}

#dropFileForm #fileLabel:before {
  z-index: -1;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5%,
    black 5%,
    black 10%
  );
  opacity: 0;
  transition: 0.5s;
}

#dropFileForm.fileHover #fileLabel:before {
  opacity: 0.25;
}

#dropFileForm .uploadButton {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}

#dropFileForm.fileHover {
  box-shadow: 0 0 16px limeGreen;
}

.btn-purple {
  border: 0;
  outline: 0;
  width: 100%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
}
</style>
