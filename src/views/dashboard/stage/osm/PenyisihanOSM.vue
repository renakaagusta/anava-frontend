<template>
    <div>
        <ParticipantPenyisihanOSM v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import ParticipantPenyisihanOSM from './../../../../components/dashboard/participant/stage/osm/PenyisihanOSM.vue'

export default {
    name: "PenyisihanOSM",
    components: {
        ParticipantPenyisihanOSM
    },
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    }
}
</script>
<style scoped> 
.header{
    min-height: 90px;
    min-width: 100%;
    padding: 30px; 
}
</style>