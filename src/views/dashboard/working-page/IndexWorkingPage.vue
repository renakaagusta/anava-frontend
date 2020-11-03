<template>
    <div>
        <!-- <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand class="mt-3 mb-3" href="#">
                <img class="rounded-circle" src="@/assets/logo-white.png" alt="" id="brand-logo" />
                anava 14
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                    <template #button-content>
                        <em>Dafa Raisya</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar> -->
        <div id="working-page">
            <b-row>
                <b-col col lg="9">
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
                                    <b-col lg="8">Soal No. 25</b-col>
                                    <b-col lg="4" class="text-right">
                                        <b-button-group size="sm">
                                            <b-button variant="secondary">Sisa Waktu</b-button>
                                            <b-button variant="success">01:00:02</b-button>
                                        </b-button-group>
                                    </b-col>
                                </b-row>
                                <!-- <h5 class="text-right">Sisa Waktu : 02:00</h5> -->
                            </template>
                            <b-card-text class="text-left">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium porro quas ea iusto voluptas ullam quisquam quis nostrum nemo ipsam obcaecati, nam illum hic. Unde ipsam nostrum debitis delectus nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, esse ab? Amet minima quaerat facilis, ratione corrupti odio! Nam deleniti accusamus reiciendis sit vero accusantium minus autem placeat voluptatibus sunt.
                                <br>
                                <b-form-group class="mt-2">
                                    <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
                                    <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
                                    <b-form-radio name="some-radios" value="C">Option C</b-form-radio>
                                    <b-form-radio name="some-radios" value="D">Option D</b-form-radio>
                                    <b-form-radio name="some-radios" value="E">Option E</b-form-radio>
                                </b-form-group>
                            </b-card-text>
                        </b-card>
                    </b-card-group>
                    <b-row>
                        <b-col lg="3">
                            <b-button class="mt-3" block variant="primary">
                                <i class="fas fa-arrow-left"></i>
                                Sebelumnya
                            </b-button>
                        </b-col>
                        <b-col lg="4 offset-1">
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
                        <b-col lg="3 offset-1">
                            <b-button class="mt-3" block variant="primary">
                                Selanjutnya
                                <i class="fas fa-arrow-right"></i>
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col col lg="3">
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
                                    <b-col lg="2" class="mr-1 mb-2" v-for="number in data" :key="number">
                                        <b-button id="number-question">
                                            <p style="font-size:13px; margin-top: 5px">{{ number }}</p>
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card>
                    </b-card-group> 
                    <b-button class="mt-3" block variant="danger">Hentikan Ujian</b-button>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IndexWorkingPage',
    data() {
        return {
            data : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
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
#brand-logo {
    margin-top: -10px;
    max-width: 80px;
    max-height: 80px;
}
#number-question {
    width: 42px;
    height: 42px;
}
</style>