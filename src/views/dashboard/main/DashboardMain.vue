<template>
    <b-container>
        <h3 class="text-left ml-4 mt-5 pt-5">Beranda</h3>
        <b-row>
            <b-col lg="12 mt-3">
                <div class="container bg-white p-3 mb-3 text-center rounded-lg shadow">
                    <p>
                        <i style="font-size:30px" class="fas fa-home"></i>
                        <br>
                        <b>SELAMAT DATANG PESERTA ANAVA 14!</b>
                        Ini adalah Dashboard anda <br> berbagai jenis informasi terkait lomba dapat dilihat disini 
                    </p>
                </div>
            </b-col>
            <b-col lg="6 mt-3">
                <div class="container bg-danger p-3 text-center text-white rounded-lg shadow">
                    <p>
                        <i style="font-size:30px" class="far fa-envelope"></i>
                        <br>
                        Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi Email Anda Terlebih Dahulu!
                    </p>
                </div>
            </b-col>
            <b-col lg="6 mt-3">
                <div class="container bg-danger p-3 text-center text-white rounded-lg shadow">
                    <p>
                        <i style="font-size:30px" class="fas fa-money-bill-wave mb-4"></i>
                        <br>
                        Anda Belum Mengupload Bukti Pembayaran, Untuk Dapat Melanjutkan Tahap Selanjutnya, Silakan Upload Bukti Pembayaran dengan Klik Tombol Dibawah Ini!
                        <br>
                        <router-link :to="{name: 'CreatePayment'}">
                            <b-button class="btn mt-5 mb-2" variant="danger">Upload Bukti Pembayaran</b-button>
                        </router-link>
                    </p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'DashboardMain'
}
</script>
<style scoped>
.btn{
    padding: 10px 30px;
    background-color: rgba(0,0,0,0);
    border-color: rgb(255,255,255);
}
</style>