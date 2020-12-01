<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-copy"></i>
        Twibbon
      </h3>
    </div>
    <hr />
    <b-container class="bg-white p-4 mb-3">
      <img class="twibbon-content" src="@/assets/logo.png" />
      <img class="twibbon" src="@/assets/twibbon.png" />
      <button class="btn btn-primary">
      <i class="fa fa-upload" />&nbsp;Unggah foto
    </button>
    <button class="btn btn-primary ml-3">
      <i class="fa fa-download" />&nbsp;Unduh
    </button>
    </b-container>
    
  </b-container>
</template>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
.twibbon-content {
  z-index: -2;
  height: 100%;
  width: 100%;
}
.twibbon {
  margin-top: -100%;
  height: 100%;
  width: 100%;
  background-color: transparent;
}
</style>
