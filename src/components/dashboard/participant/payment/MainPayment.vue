<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="container bg-white p-3 text-center rounded-lg shadow">
          <h3>Tata Cara Pembayaran</h3>
          <hr />
          <p class="text-left p-3">
              1. ... <br/>
              2. ... <br/>
              3. ... <br/>
              4. ... <br/>
          </p>
        </div>
      </b-col>
      <b-col md="12 mt-3">
        <div class="container bg-white p-3 text-center rounded-lg shadow">
          <h3>Rekening Pembayaran</h3>
          <hr />
          <div style="border: 1px solid #ddd; border-radius:5px; padding: 5px;">
            <b-row>
              <b-col col="1"
                ><img
                  src="https://cdn.ayobandung.com/upload/bank_image/medium/polisi-periksa-12-saksi-kasus-pembobolan-bni.jpg"
                  style="width:200px;height:100px;"
              /></b-col>
              <b-col col="11">
                <div class="text-left p-3">
                  <b>No. Rekening: </b>XXXXXXXXX<br />
                  <b>Atas Nama: </b>XXXXXXXXX<br />
                  <b>WA Konfirmasi: </b>XXXXXXXXX<br />
                </div>
              </b-col>
            </b-row>
          </div>
          <div
            style="border: 1px solid #ddd; border-radius:5px; padding: 5px; margin-top:10px;"
          >
            <b-row>
              <b-col col="1"
                ><img
                  src="https://mmc.tirto.id/image/2016/05/11/LogoBRI_050_ratio-16x9.JPG"
                  style="width:180px;height:100px;"
              /></b-col>
              <b-col col="11">
                <div class="text-left p-3">
                  <b>No. Rekening: </b>XXXXXXXXX<br />
                  <b>Atas Nama: </b>XXXXXXXXX<br />
                  <b>WA Konfirmasi: </b>XXXXXXXXX<br />
                </div>
              </b-col>
            </b-row>
          </div>
          <div
            style="border: 1px solid #ddd; border-radius:5px; padding: 5px; margin-top:10px;"
          >
            <b-row>
              <b-col col="1"
                ><img
                  src="https://logos-download.com/wp-content/uploads/2017/03/BCA_logo_Bank_Central_Asia.png"
                  style="width:180px;height:100px;"
              /></b-col>
              <b-col col="11">
                <div class="text-left p-3">
                  <b>No. Rekening: </b>XXXXXXXXX<br />
                  <b>Atas Nama: </b>XXXXXXXXX<br />
                  <b>WA Konfirmasi: </b>XXXXXXXXX<br />
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
      <b-col md="12 mt-3">
        <div class="container bg-white p-3 text-center rounded-lg shadow">
          <h3>Riwayat Pembayaran</h3>
          <hr />
          <p>
            <i class="fas fa-exclamation-triangle fa-2x"></i>
            <br /><br />
            Anda belum memiliki riwayat pembayaran
            <br />
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "MainPayment",
};
</script>
<style scoped>
.btn {
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}
</style>
