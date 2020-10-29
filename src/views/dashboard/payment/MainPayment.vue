<template>
    <b-container>
        <b-row>
            <b-col class="mt-5" lg="6 offset-3">
                <div class="container bg-danger p-3 text-center text-white rounded-lg shadow">
                    <p>
                        <i style="font-size:30px" class="fas fa-money-bill-wave"></i>
                        <br>
                        Anda Belum Mengupload Bukti Pembayaran, Silakan Upload Bukti Pembayaran dengan Klik Tombol Dibawah Ini!
                        <br>
                        <router-link :to="{name: 'CreatePayment'}">
                            <b-button class="btn mt-2" variant="danger">Upload Bukti Pembayaran</b-button>
                        </router-link>
                    </p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'MainPayment'
}
</script>
<style scoped>
.btn{
    padding: 10px 30px;
    background-color: rgba(0,0,0,0);
    border-color: rgb(255,255,255);
}
</style>