<template>
    <div id="preloder">
        <div class="preloader-content">
            <b-row>
                <b-col lg="6">
                    <img class="logo" src="@/assets/logo-white.png"/>
                </b-col>
                <b-col lg="6">      
                    <h4 class="title text-white">ANAVA 2020</h4>
                    <div class="loader"></div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Loader'
}
</script>

<style scoped>
.logo {
    height: 130px;
    width: 80px;
}

.title {
    text-align:left;
}

#preloder {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999999;
    background: rgb(1, 0, 17);
    padding-top: 200px;
}

.preloader-content {
    width: 440px;
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 230px);
}

.loader {
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 60px;
    animation: loader 0.8s linear infinite;
    -webkit-animation: loader 0.8s linear infinite;
}

@keyframes loader {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border: 4px solid #eee;
        border-left-color: transparent;
    }
    50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        border: 4px solid #eee;
        border-left-color: transparent;
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        border: 4px solid #eee;
        border-left-color: transparent;
    }
}

@-webkit-keyframes loader {
    0% {
        -webkit-transform: rotate(0deg);
        border: 4px solid #eee;
        border-left-color: transparent;
    }
    50% {
        -webkit-transform: rotate(180deg);
        border: 4px solid #eee;
        border-left-color: transparent;
    }
    100% {
        -webkit-transform: rotate(360deg);
        border: 4px solid #eee;
        border-left-color: transparent;
    }
}
</style>