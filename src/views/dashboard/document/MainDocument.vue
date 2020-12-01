<template>
  <div>
    <b-container class="bg-white p-4">
      <vue-tabs>
        <v-tab title="Dokumen">
          <b-container class="bg-white p-4 mt-3">
            <h2 class="text-left ml-3">Scan Kartu Pelajar</h2>
            <form
              id="dropFileForm"
              action="http://localhost/upload.php"
              method="post"
              onsubmit="uploadFiles(event)"
            >
              <input
                type="file"
                name="files[]"
                id="fileInput"
                multiple
                onchange="addFiles(event)"
              />

              <label
                for="fileInput"
                id="fileLabel"
                ondragover="overrideDefault(event);fileHover();"
                ondragenter="overrideDefault(event);fileHover();"
                ondragleave="overrideDefault(event);fileHoverEnd();"
                ondrop="overrideDefault(event);fileHoverEnd();addFiles(event);"
              >
                <i class="fa fa-upload fa-5x"></i>
                <br />
                <span id="fileLabelText">
                  Unggah scan kartu pelajar
                </span>
                <br />
                <span id="uploadStatus"></span>
              </label>

              <input type="submit" value="Upload" class="uploadButton" />
            </form>
            <h2 class="text-left ml-3">Pas Foto</h2>
            <form
              id="dropFileForm"
              action="http://localhost/upload.php"
              method="post"
              onsubmit="uploadFiles(event)"
            >
              <input
                type="file"
                name="files[]"
                id="fileInput"
                multiple
                onchange="addFiles(event)"
              />

              <label
                for="fileInput"
                id="fileLabel"
                ondragover="overrideDefault(event);fileHover();"
                ondragenter="overrideDefault(event);fileHover();"
                ondragleave="overrideDefault(event);fileHoverEnd();"
                ondrop="overrideDefault(event);fileHoverEnd();addFiles(event);"
              >
                <i class="fa fa-upload fa-5x"></i>
                <br />
                <span id="fileLabelText">
                  Unggah pas foto
                </span>
                <br />
                <span id="uploadStatus"></span>
              </label>

              <input type="submit" value="Upload" class="uploadButton" />
            </form>
          </b-container>
        </v-tab>
        <v-tab title="Identitas">
          <b-container class="text-left p-3 border mt-3">
            <div class="mt-3">
              <label>Nama depan</label><br />
              <input
                type="text"
                name="email"
                placeholder="Ketik disini..."
                v-model="formParticipant.firstname"
              />
            </div>
            <div class="mt-3">
              <label>Nama belakang</label><br />
              <input
                type="text"
                name="email"
                placeholder="Ketik disini..."
                v-model="formParticipant.lastname"
              />
            </div>
            <div class="mt-3">
              <label>Tanggal lahir</label><br />
              <b-form-input
                type="date"
                id="started_date"
                v-model="formParticipant.birhDate"
              ></b-form-input>
            </div>
            <div class="mt-3">
              <label>Nomor HP</label><br />
              <input
                type="text"
                name="school"
                placeholder="Ketik disini..."
                v-model="formParticipant.schoolName"
              />
            </div>
            <div class="mt-3">
              <label>Alamat</label><br />
              <textarea
                type="text"
                name="school"
                row="5"
                class="w-100"
                placeholder="Ketik disini..."
                v-model="formParticipant.schoolName"
              />
            </div>
            <div class="mt-3">
                <label>Kelas</label><br/>
                <select class="custom-select" v-model="formParticipant.grade">
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
            </div>
            <div class="mt-3">
              <label>Nama Sekolah</label><br />
              <input
                type="text"
                name="school"
                placeholder="Ketik disini..."
                v-model="formParticipant.schoolName"
              />
            </div>
            <div class="mt-3">
              <label>Alamat Sekolah</label><br />
              <textarea
                type="text"
                row="5"
                name="school"
                class="w-100"
                placeholder="Ketik disini..."
                v-model="formParticipant.schoolAddress"
              />
            </div>

            <input
              type="submit"
              value="Submit"
              class="btn-purple rounded mt-3"
              @click="updateParticipant()"
            />
          </b-container>
        </v-tab>
      </vue-tabs>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "MainDocument",
  data() {
    return {
      formParticipant: {
        firstname: "",
        lastname: "",
        schoolName: "",
        schoolAddress: "",
      },
    };
  },
  computed: {
    participant() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    updateParticipant() {
      this.$store.dispatch(
        "participant/updateParticipant",
        this.formParticipant
      );
    },
  },
  created() {
    this.formParticipant.id = this.participant.id;
  },
};
</script>
<style>
input {
  width: 100%;
  padding: 3px 3px;
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
