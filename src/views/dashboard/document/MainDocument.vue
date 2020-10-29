<template>
    <div class="text-left">
        <router-link :to="{name: 'CreateDocument'}">
            <b-button class="btn mt-2 ml-4" variant="success">Tambah Dokumen</b-button>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'MainDocument'
}
</script>