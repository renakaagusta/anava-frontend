<template>
  <div>
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

            <button class="btn btn-primary mb-2" @click="reset()">Reset</button>
          </v-tab>
          <v-tab title="Jadwal">
            <table class="table table-border">
              <tr class="border">
                <td><b>Mulai pengerjaan</b></td>
                <td v-if="stage.started_at != null">
                  {{ getDateTime("datetime", started_at) }}
                </td>
                <td v-else>-</td>
              </tr>
              <tr class="border">
                <td><b>Selesai pengerjaan</b></td>
                <td v-if="stage.finished_at != null">
                  {{ getDateTime("datetime", finished_at) }}
                </td>
                <td v-else>-</td>
              </tr>
            </table>
          </v-tab>
          <v-tab title="Pengumuman">
            <div class="mt-3" v-if="stageAnnouncements">
              <b-row
                class="bg-white p-2 mb-2 shadow-sm rounded"
                no-gutters
                v-for="announcement in stageAnnouncements"
                :key="announcement._id"
              >
                <b-col md="9" class="text-left p-3">
                  <h4 class="text-bold">{{ announcement.title }}</h4>
                  <p v-if="announcement"></p>

                  <p class="text-secondary">
                    {{ getDateTime("datetime", announcement.created_at) }}
                  </p>
                </b-col>
                <b-col md="3" class="p-3">
                  <a
                    class="btn btn-primary"
                    @click="showAnnouncement(announcement)"
                  >
                    <i class="fas fa-search"></i>&nbsp;Detail
                  </a>
                </b-col>
              </b-row>
            </div>
          </v-tab>
          <v-tab title="Dokumen">
            <b-container class="text-left p-3 border mt-2">
              <b-container class="bg-white p-3 rounded shadow-sm border">
                <a
                  target="blank"
                  href="http://simulasi.anavaugm.com/THE ONE/guidebook.pdf"
                >
                  <i class="fa fa-download fa-3x text-dark"></i>
                  <h2 class="d-inline ml-4">Guidebook</h2>
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
      />
    </b-container>
    <div v-if="step == 1">
      <div class="bg-white p-3" v-if="detail == false">
        <b-row class="mb-3">
          <b-col md="5">
            <h5 class="text-left ml-3 mb-3">
              Uang Bekal : Rp {{ answerForm.money }}
            </h5>
          </b-col>
          <b-col md="7" class="text-right">
            <b-button-group size="sm">
              <b-button variant="secondary">Sisa Waktu</b-button>
              <b-button variant="success"
                ><b-row class="mt-0" style="font-size: 16px;">
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
                </b-row></b-button
              >
            </b-button-group>
          </b-col>
        </b-row>
        <b-row class="container">
          <b-col
            v-for="(question, index) in answerForm.questions"
            :key="question._id"
            cols="12"
            md="3"
            class="mb-4"
          >
            <b-button
              block
              variant="success"
              @click="selectQuestion(index)"
              v-if="answerForm.questions[index].selected != false"
            >
              <h5>Paket {{ index + 1 }}</h5>
              <p>{{ question.lesson }}</p>
              Rp. {{ question.price }}
            </b-button>
            <b-button
              block
              variant="secondary"
              @click="selectQuestion(index)"
              v-else
            >
              <h5>Paket {{ index + 1 }}</h5>
              <p>{{ question.lesson }}</p>
              Rp. {{ question.price }}
            </b-button>
          </b-col>
        </b-row>
        <b-button
          class="mt-3"
          block
          variant="primary"
          @click="submitAnswerForm()"
          >Selesai</b-button
        >
      </div>
      <div v-if="detail == true">
        <b-row>
          <b-col col cols="12" md="12">
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
                    <b-col md="5"
                      ><b>Paket No. {{ selectedQuestion._number }}</b></b-col
                    >
                    <b-col md="7" class="text-right">
                      <b-button-group size="sm">
                        <b-button variant="secondary">Sisa Waktu</b-button>
                        <b-button variant="success"
                          ><b-row class="mt-0" style="font-size: 16px;">
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
                          </b-row></b-button
                        >
                      </b-button-group>
                    </b-col>
                    <b-col md="12">Mapel : {{ selectedQuestion.lesson }}</b-col>
                    <b-col md="12"
                      >Harga : Rp. {{ selectedQuestion.price }}</b-col
                    >
                    <b-col md="12"
                      >Sisa bekal : Rp. {{ answerForm.money }}</b-col
                    >
                  </b-row>
                </template>
                <b-card-text class="text-left">
                  <div v-html="selectedQuestion.content" />
                  <br />
                  <b-form-radio-group
                    class="mt-2"
                    v-model="answerForm.answers[selectedQuestion._number - 1]"
                  >
                    <b-form-radio
                      name="some-radios"
                      value="A"
                      @change="selectAnswer('A')"
                      ><div
                        v-html="selectedQuestion.options[0].content"
                      ></div></b-form-radio
                    ><br />

                    <b-form-radio
                      name="some-radios"
                      value="B"
                      @change="selectAnswer('B')"
                      ><div
                        v-html="selectedQuestion.options[1].content"
                      ></div></b-form-radio
                    ><br />

                    <b-form-radio
                      name="some-radios"
                      value="C"
                      @change="selectAnswer('C')"
                      ><div
                        v-html="selectedQuestion.options[2].content"
                      ></div></b-form-radio
                    ><br />

                    <b-form-radio
                      name="some-radios"
                      value="D"
                      @change="selectAnswer('D')"
                      ><div
                        v-html="selectedQuestion.options[3].content"
                      ></div></b-form-radio
                    ><br />

                    <b-form-radio
                      name="some-radios"
                      value="E"
                      @change="selectAnswer('E')"
                      ><div v-html="selectedQuestion.options[4].content"></div
                    ></b-form-radio>
                  </b-form-radio-group>
                  <b-button
                    class="mt-3"
                    block
                    variant="primary"
                    @click="setAnswer()"
                    >Jawab</b-button
                  >
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </div>
    </div>
    <div v-if="step == 2" class="pl-3 pr-3">
      <b-container class="bg-white p-4 shadow rounded text-left">
        <h2>{{ announcement.title }}</h2>
        <p
          v-if="announcement.stage == null && announcement.participant == null"
        >
          Umum
        </p>
        <p v-if="announcement.stage != null">
          {{ "Kepada peserta " + getEventName(announcement.stage._id) }}
        </p>
        <p v-if="announcement.participant != null">
          {{ "Kepada " + announcement.participant.username }}
        </p>
        <br />
        <small>{{ getDateTime("datetime", announcement.created_at) }}</small>
        <hr />
        <div class="mt-4" v-html="announcement.content" />
      </b-container>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import * as datetime from "./../../../../../services/datetime";

export default {
  name: "BabakChampionTheOne",
  data() {
    return {
      //started_at: new Date(2021, 0, 1, 14, 0, 0),
      //finished_at: new Date(2021, 0, 17, 31, 0, 0),
      started_at: new Date(2021, 0, 1, 14, 0, 0),
      finished_at: new Date(2021, 0, 23, 31, 0, 0),
      step: 0,
      data: [],
      detail: false,
      answerForm: {},
      stageInformationOfParticipant: {},
      selectedQuestion: null,
      itemsTab1: [],
      itemsTab2: [{ "Nomor pendaftaran": 0, "Terdaftar pada": 0 }],
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      disable: [],
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      timer: null,
      announcement: {},
    };
  },
  computed: {
    answerFormByParticipantAndStage() {
      return JSON.parse(
        localStorage.getItem("answerForm2" + this.$route.params.idStage)
      );
    },
    totalQuestion() {
      return this.$store.state.question.questions;
    },
    stage() {
      return JSON.parse(
        localStorage.getItem("stage" + this.$route.params.idStage)
      );
    },
    events() {
      return this.$store.state.event.events;
    },
    event() {
      return JSON.parse(localStorage.getItem("event"));
    },
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
    stageAnnouncements() {
      return this.$store.state.announcement.participantAnnouncements;
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
  },
  methods: {
    reset() {
      if (
        localStorage.getItem("answerForm2" + this.$route.params.idStage) != null
      ) {
        localStorage.removeItem("answerForm2" + this.$route.params.idStage);
      }

      var answerForm = {
        idParticipant: this.participant.id,
        idStage: this.$route.params.idStage,
      };

      this.$store
        .dispatch("answerForm/deleteAnswerForm", answerForm)
        .then(() => {
          this.$router.go();
        });
    },
    selectQuestion(index) {
      if (this.answerForm.money < this.answerForm.questions[index].price) {
        this.answerForm.questions[index].selected = true;
        this.answerForm.money -= this.answerForm.questions[index].price;

        var selectedQuestion = this.answerForm.questions[index];
        localStorage.setItem(
          "selectedQuestion",
          JSON.stringify(selectedQuestion)
        );
        this.selectedQuestion = selectedQuestion;

        this.saveAnswerForm(this.answerForm);
        this.detail = true;
      } else {
        Swal.fire({
          title: "Uang yang anda miliki tidak mencukupi",
          icon: "error",
          showConfirmButton: true,
        });
      }
    },
    selectAnswer(letter) {
      if (this.selectedQuestion != null) {
        var _answerForm = this.answerForm;
        _answerForm.answers[this.selectedQuestion._number - 1] = letter;

        this.saveAnswerForm(_answerForm);
      }
    },
    setAnswer() {
      localStorage.removeItem("selectedQuestion");
      this.detail = false;
    },
    saveAnswerForm(_answerForm) {
      localStorage.setItem(
        "answerForm2" + this.$route.params.idStage,
        JSON.stringify(_answerForm)
      );
    },
    getEventName(stageId) {
      var name = "";
      this.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stageId == stage._id) {
            switch (event.name) {
              case "OSM":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Penyisihan";
                    break;
                  case "semifinal":
                    name = event.name + " Semifinal";
                    break;
                  case "final":
                    name = event.name + " Final";
                    break;
                }
                break;
              case "The One":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Babak Gugur";
                    break;
                  case "semifinal":
                    name = event.name + " Babak Championship";
                    break;
                }
                break;
              case "Started":
                switch (stage.name) {
                  case "preliminary":
                    name = event.name + " Pekan Kreativitas";
                    break;
                  case "semifinal":
                    name = event.name + " Final";
                    break;
                }
                break;
              case "Sigma":
                name = event.name;
                break;
              case "Open House":
                name = event.name;
                break;
            }
          }
        });
      });
      return name;
    },
    showAnnouncement(announcement) {
      this.announcement = announcement;
      this.step = 2;
    },
    nextStep() {
      this.step = 1;
      if (this.answerFormByParticipantAndStage == null) {
        this.createAnswerForm();
      }
    },
    getAllAnnouncementByStage() {
      this.$store
        .dispatch(
          "announcement/getAllAnnouncementByStage",
          this.$route.params.idStage
        )
        .then((response) => {
          console.log(response);
        });
    },
    createAnswerForm() {
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

            _answerForm.answers = [];

            var index = 0;

            _answerForm.questions.forEach(() => {
              _answerForm.questions[index]._number = index + 1;
              _answerForm.questions[index].selected = false;
              _answerForm.answers.push(null);

              index++;
            });

            localStorage.setItem(
              "answerForm2" + this.$route.params.idStage,
              JSON.stringify(_answerForm)
            );

            this.answerForm = _answerForm;
          }
        });
    },
    submitAnswerForm() {
      new Swal({
        title: "Apakah anda yakin untuk menyelesaikan saat ini?",
        showDenyButton: true,
        buttons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.answerForm.eventName = "The One";
          this.answerForm.stageName = "semifinal";
          this.$store
            .dispatch("answerForm/submitAnswerForm", this.answerForm)
            .then((response) => {
              this.answerForm = response;
              this.saveAnswerForm(response);
              //this.step = 0;
            });
        }
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
    getAnswerFormByParticipantAndStage() {
      if (this.answerFormByParticipantAndStage == null) {
        this.$store.dispatch(
          "answerForm/getAnswerFormByParticipantAndStage",
          this.answerForm
        );
      }
    },
    getStageInformationOfParticipant() {
      this.participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.$route.params.idStage) {
            this.stageInformationOfParticipant = stage;
            this.stageInformationOfParticipant.number = event.number;
            this.stageInformationOfParticipant.document = event.document;

            this.stageInformationOfParticipant.started_at = this.started_at.toISOString();
            this.stageInformationOfParticipant.finished_at = this.finished_at.toISOString();
          }
        });
      });
    },
    showRemaining() {
      const timer = setInterval(() => {
        var now = new Date();
        now.setHours(now.getHours() + 7);

        const distance = this.finished_at.getTime() - now.getTime();

        if (this.answerForm.correct != 0 && this.answerForm.wrong != 0) {
          if (this.step == 1) this.step = 0;
        }

        if (distance < 0) {
          clearInterval(timer);
          this.show = false;
          if (this.step == 1) this.step = 0;
          return;
        }

        if (distance < 0) {
          this.answerForm.eventName = "The One";
          this.answerForm.stageName = "semifinal";
          this.$store
            .dispatch("answerForm/submitAnswerForm", this.answerForm)
            .then((response) => {
              //this.step = 0;
              this.answerForm = response;
              this.saveAnswerForm(response);
            });
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
        if (
          this.answerForm.stage == this.$route.params.idStage ||
          this.answerForm.stageId == this.$route.params.idStage
        ) {
          if (this.answerFormByParticipantAndStage != null) {
            if (this.answerFormByParticipantAndStage.score != null)
              clearInterval(this.timer);
          }

          if (this.answerFormByParticipantAndStage != null)
            this.answerForm = JSON.parse(
              localStorage.getItem("answerForm2" + this.$route.params.idStage)
            );

          if (this.answerForm != null && this.answerForm.finished_at != null) {
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
        } else {
          /*this.answerForm.stageId = this.$route.params.idStage;
          this.answerForm.participantId = this.participant.id;

          this.getStage();
          this.showRemaining();
          this.getAnswerFormByParticipantAndStage();

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
          this.getStageInformationOfParticipant();*/
        }
      }, 200);
    },
  },
  created() {
    this.answerForm.stageId = this.$route.params.idStage;
    this.answerForm.participantId = this.participant.id;

    this.getStage();
    this.showRemaining();
    this.getAllAnnouncementByStage();
    this.getAnswerFormByParticipantAndStage();
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

    /*localStorage.setItem(
      "answerForm2" + this.$route.params.idStage,
      JSON.stringify(answerForm)
    );*/

    if (localStorage.getItem("selectedQuestion") != null)
      this.selectedQuestion = JSON.parse(
        localStorage.getItem("selectedQuestion")
      );

    if (this.selectedQuestion != null) {
      this.detail = true;
    }
  },
};
</script>
<style>
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
