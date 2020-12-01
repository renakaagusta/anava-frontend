<template>
  <b-container class="bg-white p-4 shadow-sm">
    <h1>Ketentuan Poster</h1>
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
          5. Identitas di tulis di Header dengan berisikan Nama, NRP dan Nama
          Kelas Kecil <br />
          6. Minimal satu halaman penuh <br />
          7. Format file pdf.
        </p>
      </b-col>
      <b-col cols="12" md="12">
        <div class="bg-white">
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
                Unggah Poster
              </span>
              <br />
              <span id="uploadStatus"></span>
            </label>

            <input type="submit" value="Upload" class="uploadButton" />
          </form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "IndexPoster",
  props: ["title"],
};
</script>
<style scoped>
#card-upload {
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgb(175, 164, 164);
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
</style>
