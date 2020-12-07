<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-image"></i>
        Twibbon
      </h3>
    </div>
    <hr />
    <b-container v-if="user.verification" class="bg-white mt-3 p-5">
      <div class="container bg-white p-3 text-center rounded-lg shadow">
        <p>
          <i class="fas fa-exclamation-triangle fa-2x"></i>
          <br />
          Halaman ini masih kosong
        </p>
      </div>
    </b-container>
    <div v-if="user.verification == 0">
      <div
        class="bg-white mt-3 p-3 pb-5 text-center text-dark rounded-lg shadow"
      >
        <p>
          <i style="font-size:30px" class="far fa-envelope"></i>
          <br />
          Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi Email
          Anda Terlebih Dahulu!
        </p>
      </div>
    </div>
  </b-container>
</template>
<script>
/* eslint-disable */

import domtoimage from "dom-to-image";

export default {
  name: "Twibbon",
  data() {
    return {
      image: "./../../../assets/logo.png",
      uploaded: 0,
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    onFileChange() {
      var preview = document.getElementById("twibbon");
      var file = document.getElementById("upload").files[0];
      var reader = new FileReader();

      var that = this;

      reader.addEventListener(
        "load",
        function() {
          preview.src = reader.result;
          that.uploaded = 1;
          console.log(that.uploaded);
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    download() {
      domtoimage
        .toJpeg(document.getElementById("twibbon-container"))
        .then(function(dataUrl) {
          var link = document.createElement("a");
          link.download = "twibbon";
          link.href = dataUrl;
          link.click();
        });
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  position: absolute;
}
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
.twibbon-content {
  z-index: -2;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.twibbon {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
}
#twibbon-container {
  height: 776px;
  width: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.mt-100 {
  margin-top: -800px;
}
</style>
