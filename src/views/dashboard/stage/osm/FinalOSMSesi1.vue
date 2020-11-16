<template>
    <div>
        <ParticipantFinalOSMSesi1 v-if="user.roles.includes('participant')"/>
    </div>
</template>
<script>
import ParticipantFinalOSMSesi1 from './../../../../components/dashboard/participant/stage/osm/FinalOSMSesi1.vue'

export default {
    name: "FinalOSMSesi1",
    components: {
        ParticipantFinalOSMSesi1
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