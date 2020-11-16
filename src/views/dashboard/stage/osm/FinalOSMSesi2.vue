<template>
    <div>
        <ParticipantFinalOSMSesi2 v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import ParticipantFinalOSMSesi2 from './../../../../components/dashboard/participant/stage/osm/FinalOSMSesi2.vue'

export default {
    name: "FinalOSMSesi2",
    components: {
        ParticipantFinalOSMSesi2
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