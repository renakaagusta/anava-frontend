<template>
    <div>
        <h3 class="text-left ml-3">{{title}}</h3><hr/>
        <b-row class="container">
            <b-col cols="12" md="8">
                <p class="text-left">
                    Membuat essay terkait Analisa Tema LKMM Pra-TD III FTE ITS yaitu Avatar [The Last Gen of FTE] dengan ketentuan : <br>
                    1. Diketik di kertas ukuran A4 dengan margin 3333 <br>
                    2. Font Times New Roman dengan ukuran 12 <br>
                    3. Space 1.0 No Before-After <br>
                    4. Rata kanan kiri (Justify) tanpa paragraf, dengan judul <br>
                    5. Identitas di tulis di Header dengan berisikan Nama, NRP dan Nama Kelas Kecil <br>
                    6. Minimal satu halaman penuh <br>
                    7. Format file pdf.
                </p>                                                
            </b-col>
            <b-col cols="12" md="4">
                <b-card id="card-upload">
                    <h5 class="text-left mb-3">Upload Disini</h5>
                    <b-button class="mb-3" block variant="outline-secondary">Pilih File</b-button>
                    <b-button block variant="success">Submit</b-button>
                    <b-card-text></b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name: 'IndexPoster',
    props: ['title']
}
</script>
<style scoped>
#card-upload {
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgb(175, 164, 164);
}
</style>