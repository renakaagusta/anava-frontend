<template>
    <div>
        <h5 class="text-left ml-3 mb-3">Uang Bekal : Rp 20,000</h5>
        <b-row class="container">
            <b-col v-for="question in questions" :key="question.id" cols="12" md="3" class="mb-4">
                <router-link :to="'babak-champion-rangking1/paket/'+ question.id">
                    <b-button block variant="success"> <h5>Paket {{ question.id }}</h5> Rp.{{ question.harga }}</b-button>
                </router-link>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name : 'BabakChampionRangking1',
    data() {
        return {
            questions : [
                {id : '1',harga : '1000'}, {id : '2',harga : '1500'},
                {id : '3',harga : '2000'}, {id : '4',harga : '1000'},
                {id : '5',harga : '3000'}, {id : '6',harga : '1500'},
                {id : '7',harga : '1500'}, {id : '8',harga : '1000'},
                {id : '9',harga : '1000'}, {id : '10',harga : '3000'},
                {id : '11',harga : '2000'}, {id : '12',harga : '2000'},
                {id : '13',harga : '1000'}, {id : '14',harga : '1500'},
                {id : '15',harga : '1000'}, {id : '16',harga : '1000'},
                {id : '17',harga : '1500'}, {id : '18',harga : '2000'},
                {id : '19',harga : '2000'}, {id : '20',harga : '3000'}
            ]
        }
    }
}
</script>