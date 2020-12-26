<template>
  <div id="working-page">
    <b-container class="bg-white p-3 rounded shadow-sm mb-4" v-if="step == 0">
      <b-container class="border">
        <vue-tabs>
          <v-tab title="Jadwal">
            <table class="table table-border">
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
          <v-tab title="Surat Orisinalitas"
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
                  Unggah surat orisinalitas
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
                <a
                  target="blank"
                  href="http://anavaugm.com/STARTED/guidebook.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Guidebook</h2>
                </a>
              </b-container>
              <b-container class="bg-white p-3 rounded shadow-sm border mt-3">
                <a
                  target="blank"
                  href="http://anavaugm.com/STARTED/surat-orisinalitas.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Surat Orisinalitas</h2>
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
        click=""
        :disabled="false"
      />
    </b-container>
    <b-row class="pl-3 pr-3 mb-3" v-if="step == 1">
      <b-container class="bg-white p-4 shadow-sm">
        <b-row class="mt-0" style="font-size: 16px;">
                        <b-col
                          ><small>{{ displayHours }}</small></b-col
                        >
                        :
                        <b-col
                          ><small>{{ displayMinutes }}</small></b-col
                        >
                        :
                        <b-col
                          ><small>{{ displaySeconds }}</small></b-col
                        >:
                      </b-row>
        <h1>Ketentuan Poster</h1>
        <hr />
        <br />
        <b-row>
          <b-col cols="12" md="12">
            <p class="text-left">
              Membuat essay terkait Analisa Tema LKMM Pra-TD III FTE ITS yaitu
              Avatar [The Last Gen of FTE] dengan ketentuan : <br />
              1. Diketik di kertas ukuran A4 dengan margin 3333 <br />
              2. Font Times New Roman dengan ukuran 12 <br />
              3. Space 1.0 No Before-After <br />
              4. Rata kanan kiri (Justify) tanpa paragraf, dengan judul <br />
              5. Identitas di tulis di Header dengan berisikan Nama, NRP dan
              Nama Kelas Kecil <br />
              6. Minimal satu halaman penuh <br />
              7. Format file pdf.
            </p>
          </b-col>
          <b-col cols="12" md="12">
            <div id="dropFileForm" v-if="changeStartedPoster == 0">
              <input
                type="file"
                id="fileStartedPoster"
                ref="started_poster"
                @change="addFile('started_poster')"
              />

              <label for="fileStartedPoster" id="fileLabel">
                <i class="fa fa-upload fa-5x"></i>
                <br />
                <span id="fileLabelText" v-html="fileName.started_poster" />
              </label>

              <button class="uploadButton" @click="uploadAnswer()">
                <b-spinner v-if="loading" label="Spinning"></b-spinner>
                <p v-if="!loading" class="d-inline">Unggah</p>
              </button>
            </div>
            <div v-else>
              <b-card
                :img-src="
                  'http://anavaugm.com/started_poster_' + event._id + '.jpg'
                "
                style="width: 500px;"
                ><button
                  class="btn-purple"
                  v-if="true"
                  @click="changeStartedPoster = 1"
                >
                  Ganti
                </button>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </div>
</template>
<script>
import * as datetime from "./../../../../../services/datetime";
import Swal from "sweetalert2";

export default {
  name: "PenyisihanStarted",
  data() {
    return {
      step: 0,
      data: [],
      answerForm: {},
      stageInformationOfParticipant: {},
      itemsTab1: [],
      itemsTab2: [{ "Nomor pendaftaran": 0, "Terdaftar pada": 0 }],
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      doubtful: [],
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      timer: null,
      formParticipant: {
        firstname: "",
        lastname: "",
        grade: 10,
        birthDate: "",
        address: "",
        phoneNumber: "",
        schoolName: "",
        schoolAddress: "",
        region: 1,
      },
      document: {
        type: "",
      },
      changeStartedPoster: 0,
      changeEventDocument: 0,
      loading: false,
      fileName: {
        started_poster: "Unggah file poster",
        event_document: "Unggah surat orisinalitas",
      },
    };
  },
  computed: {
    stage() {
      return this.$store.state.stage.stage;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
    answerFormByParticipantAndStage() {
      return JSON.parse(localStorage.getItem("answerForm"));
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
    time() {
      var today = new Date();
      var started_at = new Date(this.stage.started_at);
      var finished_at = new Date(this.stage.finished_at);

      today = new Date(
        today.getTime() + (today.getTimezoneOffset() + 420) * 60 * 1000
      );
      started_at = new Date(
        started_at.getTime() + (today.getTimezoneOffset() + 420) * 60 * 1000
      );
      finished_at = new Date(
        finished_at.getTime() + (today.getTimezoneOffset() + 420) * 60 * 1000
      );

      return today > started_at && today < finished_at;
    },
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month - 1,
        this.date,
        this.hour,
        this.minute
      );
    },
  },
  methods: {
    nextStep() {
      this.step = 1;

      this.createAnswerForm();
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
    addFile(type) {
      if (type == "started_poster")
        this.fileName.started_poster = this.$refs.started_poster.files[0].name.toString();
      else
        this.fileName.event_document = this.$refs.event_document.files[0].name.toString();
    },
    uploadAnswer() {
      var document = new FormData();

      this.loading = true;
      document.append("file", this.$refs.started_poster.files[0]);

      var formAnswer = {
        id: this.answerForm.answers[0],
        data: document,
      };

      this.$store.dispatch("answer/uploadAnswer", formAnswer).then(
        () => {
          Swal.fire({
            title: "Berhasil mengunggah poster",
            icon: "success",
            showConfirmButton: true,
          }).then();
          this.loading = false;
        },
        () => {}
      );
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
            this.stageInformationOfParticipant.document = event.document;
          }
        });
      });
    },
    getAnswerFormByParticipantAndStage() {
      var answerForm = {};

      answerForm.stageId = this.$route.params.idStage;
      answerForm.participantId = this.participant.id;

      this.$store.dispatch(
        "answerForm/getAnswerFormByParticipantAndStage",
        answerForm
      );
    },
    saveAnswerForm(_answerForm) {
      localStorage.setItem("answerForm", JSON.stringify(_answerForm));
    },
    createAnswerForm() {
      if (this.stageInformationOfParticipant.document == 0) {
        var _answerForm = {};
        _answerForm.stageId = this.$route.params.idStage;
        _answerForm.participantId = this.participant.id;

        this.$store
          .dispatch("answerForm/createAnswerForm", _answerForm)
          .then((answerForm) => {
            var _answerForm = JSON.parse(JSON.stringify(answerForm));

            if (!_answerForm.session) {
              var today = new Date();
              var started_at = new Date(this.stage.started_at);
              var finished_at = new Date(this.stage.finished_at);

              started_at = new Date(
                started_at.getTime() + today.getTimezoneOffset() * 60 * 1000
              );
              finished_at = new Date(
                finished_at.getTime() + today.getTimezoneOffset() * 60 * 1000
              );

              started_at.setHours(
                started_at.getHours() +
                  parseInt(this.stageInformationOfParticipant.session)
              );
              finished_at.setHours(
                finished_at.getHours() +
                  parseInt(this.stageInformationOfParticipant.session)
              );

              _answerForm.started_at = started_at.toISOString();
              _answerForm.finished_at = finished_at.toISOString();

              _answerForm.session = this.stageInformationOfParticipant.session;

              const format = _answerForm.finished_at.split("-");
              this.year = parseInt(format[0]);
              this.month = parseInt(format[1]);
              const time = format[2].split("T");
              this.date = parseInt(time[0]);
              const clock = time[1].split(":");
              this.hour = parseInt(clock[0]);
              this.minute = parseInt(clock[1]);

              this.showRemaining();

              localStorage.setItem("answerForm", JSON.stringify(_answerForm));
              alert(JSON.stringify(_answerForm));
            }
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Surat Orisinalitas belum diunggah",
          text: this.message,
          showConfirmButton: true,
        }).then(() => {});
      }
    },
    submitAnswerForm() {
      this.answerForm.eventName = "Started";
      this.answerForm.stageName = "preliminary";
      this.$store
        .dispatch("answerForm/submitAnswerForm", this.answerForm)
        .then((response) => {
          console.log("submitResponse" + JSON.stringify(response));
        });
    },
    showRemaining() {
      const timer = setInterval(() => {
        var now = new Date();

        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          this.submitAnswerForm();
        }

        if (distance < 0) {
          clearInterval(timer);
          this.show = false;
          return;
        }
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    },
    getAnswerForm() {
      this.timer = setInterval(() => {
        console.log(this.event.name);
        console.log(this.stage.name);
        if (this.answerForm != null) {
          if (
            this.stageInformationOfParticipant.id == this.$route.params.idStage
          ) {
            if (this.step == 1) {
              if (this.answerFormByParticipantAndStage.score != null)
                clearInterval(this.timer);

              this.answerForm = JSON.parse(localStorage.getItem("answerForm"));

              if (this.answerForm != null) {
                this.step = 1;

                const format = this.answerForm.finished_at.split("-");
                this.year = parseInt(format[0]);
                this.month = parseInt(format[1]);
                const time = format[2].split("T");
                this.date = parseInt(time[0]);
                const clock = time[1].split(":");
                this.hour = parseInt(clock[0]);
                this.minute = parseInt(clock[1]);

                this.showRemaining();
              }
            }
          } else {
            this.getStage();
            this.answerForm.stageId = this.$route.params.idStage;
            this.answerForm.participantId = this.participant.id;
            this.items = [
              {
                "Mulai pengerjaan": this.getDateTime(
                  "datetime",
                  this.stage.started_at
                ),
                "Selesai pengerjaan": this.getDateTime(
                  "datetime",
                  this.stage.finished_at
                ),
                "Pengumuman lolos": this.getDateTime(
                  "datetime",
                  this.stage.started_at
                ),
              },
            ];
            this.getStageInformationOfParticipant();
          }
        }
      }, 200);
    },
  },
  created() {
    this.answerForm.stageId = this.$route.params.idStage;
    this.answerForm.participantId = this.participant.id;

    this.getStage();
    this.getAnswerForm();

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

#dropFileForm #fileEventDocument {
  display: none;
}

#dropFileForm #fileStartedPoster {
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
