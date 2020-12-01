<template>
  <div>
    <h2 class="text-left">Buat Pengumuman</h2>
    <b-container class="bg-white p-3 mt-3 shadow-sm rounded">
      <b-form class="text-left ml-5 mt-4 mr-5">
        <b-form-group label="Judul :" label-for="title">
          <b-form-input
            type="text"
            id="title"
            placeholder="Masukan Judul"
            v-model="announcement.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Deskripsi :" label-for="short">
          <vue-editor
            type="text"
            id="short"
            aria-describedby="namaHelp"
            placeholder="Masukan Deskripsi"
            v-model="announcement.description.short"
          ></vue-editor>
        </b-form-group>
        <a @click="addData()" href="#" class="btn btn-primary" type="submit">
          <i class="far fa-save text-white"></i>
          Simpan
        </a>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import * as datetime from "./../../../../services/datetime";

export default {
  name: "CreateAnnouncement",
  data() {
    return {
      announcement: {
        eventId: "",
        participantId: "",
        adminId: "",
      },
      step: 1,
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    participants() {
      return this.$store.state.participant.participants;
    },
    events() {
      return this.$store.state.event.events;
    },
  },
  methods: {
    getParticipants() {
      this.$store.dispatch("participant/getAllParticipant");
    },
    getEvents() {
      this.$store.dispatch("event/getAllEvent");
    },
    createAnnouncement() {
      alert(JSON.stringify(this.announcement));
      this.$store.dispatch(
        "announcement/createAnnouncement",
        this.announcement
      );
    },
    chooseParticipant(participant) {
      (this.announcement.participantId = participant._id),
        (this.announcement.adminId = this.user.id),
        (this.step = 2);
    },
    chooseEvent(event) {
      this.announcement.eventId = event._id;
      this.createAnnouncement();
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
  },
  created() {
    this.getParticipants();
    this.getEvents();
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
