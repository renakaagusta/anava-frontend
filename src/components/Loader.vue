<template>
    <div id="preloder">
        <div class="preloader-content">
            <b-row>
                <b-col sm="4">
                    <img class="logo" src="@/assets/logo-white.png"/>
                </b-col>
                <b-col sm="8">
                    <b-container class="text-center">     
                    <h4 class="title text-white">ANAVA 2020</h4>
                    <div class="loader"></div>
                    </b-container>
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
    height: 80px;
    width: 110px;
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
    width: 350px;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 175px);
}

.loader {
    width: 30px;
    height: 30px;
    margin-top: 15px;
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