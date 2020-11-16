<template>
    <div>
        <ParticipantSemifinalOSMSesi2 v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import ParticipantSemifinalOSMSesi2 from './../../../../components/dashboard/participant/stage/osm/SemifinalOSMSesi2.vue'

export default {
    name: "PenyisihanOSM",
    components: {
        ParticipantSemifinalOSMSesi2
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