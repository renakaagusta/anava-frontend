<template>
<div>
    <h3 class="text-left ml-4">Semifinal OSM Sesi 1 (Knowledge Test)</h3><hr/>
    <div id="working-page">
        <b-row>
            <!-- soal -->
            <b-col col cols="12" md="9">
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
                                <b-col cols="7" md="8">Soal No. 25</b-col>
                                <b-col cols="4" md="4" class="text-right">
                                    <b-button-group size="sm">
                                        <b-button variant="secondary">Sisa Waktu</b-button>
                                        <b-button variant="success">01:00:02</b-button>
                                    </b-button-group>
                                </b-col>
                            </b-row>
                        </template>
                        <b-card-text class="text-left">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium porro quas ea iusto voluptas ullam quisquam quis nostrum nemo ipsam obcaecati, nam illum hic. Unde ipsam nostrum debitis delectus nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, esse ab? Amet minima quaerat facilis, ratione corrupti odio! Nam deleniti accusamus reiciendis sit vero accusantium minus autem placeat voluptatibus sunt.
                            <br>
                            <b-form-group class="mt-3">
                                <b-form-input required placeholder="Masukkan Jawaban Anda"></b-form-input>
                            </b-form-group>
                        </b-card-text>
                    </b-card>
                </b-card-group>
                <b-row>
                    <b-col id="nav-btn" cols="2" md="3">
                        <b-button class="mt-3" block variant="primary">
                            <i class="fas fa-arrow-left"></i>
                            <p> Sebelumnya</p>  
                        </b-button>
                    </b-col>
                    <b-col cols="6 offset-1" md="4 offset-1">
                        <b-button class="mt-3" block variant="warning">
                            <b-form-checkbox
                            id="checkbox-1"
                            v-model="status"
                            name="checkbox-1"
                            value="accepted"
                            unchecked-value="not_accepted"
                            >
                            Ragu-Ragu
                            </b-form-checkbox>
                        </b-button>
                    </b-col>
                    <b-col id="nav-btn" cols="2 offset-1" md="3 offset-1">
                        <b-button class="mt-3 mb-4" block variant="primary">
                            <p>Selanjutnya </p>
                            <i class="fas fa-arrow-right"></i>
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>

            <!-- nomor soal -->
            <b-col col md="3">
                <b-card-group deck>
                    <b-card
                        border-variant="secondary"
                        header="Nomor Soal"
                        header-bg-variant="white"
                        header-text-variant="black"
                        align="center"
                    >
                        <b-card-text>
                            <b-row>
                                {{ JumlahSoal() }}
                                <b-col cols="2" md="2 mr-1 mb-2" v-for="number in data" :key="number">
                                    <b-button id="number-question">
                                        <p>{{ number }}</p>
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </b-card>
                </b-card-group> 
                <b-button class="mt-3 mb-5" block variant="danger">Hentikan Ujian</b-button>
            </b-col>
        </b-row>
    </div>
</div>
</template>
<script>
export default {
    name: 'SemifinalOSMSesi1',
    data() {
        return {
            data : []
        }
    },
    methods: {
        JumlahSoal() {
            for(let i=0; i<20; i++) {
                this.data[i] = i+1;
            }
        }
    }
}
</script>
<style scoped>
#working-page {
    position: absolute;
    height: 100%;
    padding: 20px;
}

#number-question {
    width: 35px;
    height: 35px;
}

#number-question p {
    font-size:11px;
    margin-left: -5px; 
}

#nav-btn p {
    display: inline;
}

@media (max-width: 767px) {
    #nav-btn p {
        display: none;
    }
    #number-question {
        width: 45px;
        height: 45px;
        margin-left: 15px;
    }
    #number-question p{
        font-size:15px; 
        margin-top: 5px;
    }
}
</style>