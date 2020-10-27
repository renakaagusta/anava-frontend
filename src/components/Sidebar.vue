<template>
    <div class="wrapper">
        <nav id="sidebar">
            <div class="sidebar-header">
                <div class="brand">
                    <img class="logo" src="@/assets/logo-white.png" style="height:40px; width:70px;" />
                </div>

                <div class="profile">
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="3">
                                <img class="img-profile" src="@/assets/logo-big.png"/>
                            </b-col>
                            <b-col class="text-left" lg="8">
                                <p class="name">Renaka Agusta</p>
                                <p class="type">Peserta</p>
                            </b-col>
                        </b-row>
                    </router-link>
                </div>
            </div>

            <ul class="list-unstyled components text-white">
                <li @click="selectedItem=0" v-bind:class="[selectedItem == 0 ? 'active' : '']">
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="fas fa-home"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Beranda
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="far fa-copy"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Dokumen
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="fas fa-money-bill-wave"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Pembayaran
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="far fa-calendar-alt"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Jadwal
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="fas fa-trophy"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Penyisihan
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
                <li>
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="fas fa-trophy"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Semifinal
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
                <li @click="selectedItem=3" v-bind:class="[selectedItem == 3 ? 'active' : '']">
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="fas fa-trophy"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Final
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
                <li @click="selectedItem=4" v-bind:class="[selectedItem == 4 ? 'active' : '']">
                    <router-link class="text-white" :to="{name: 'DashboardMain'}">
                        <b-row>
                            <b-col lg="1">
                                <div class="inline"><i class="fas fa-award"></i></div>
                            </b-col>
                            <b-col lg="10">
                                Sertifikat
                            </b-col>
                        </b-row>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name : 'Sidebar',
    data() {
        return {
            textBold: 'text-bold',
            selectedItem: 0,
            scrollY: 0,
        }
    },
    created() {
        if(window.location.href.includes("session"))
            this.selectedItem = 1;
        else if(window.location.href.includes("participant"))
            this.selectedItem = 2;
        else if(window.location.href.includes("candidate"))
            this.selectedItem = 3;
        else if(window.location.href.includes("setting"))
            this.selectedItem = 4;
        else
            this.selectedItem = 0;

        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

* {
    font-family: 'Poppins', sans-serif;
}

.wrapper {
    display: flex;
    align-items: stretch;
    position: fixed;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    min-height: 100vh;
}

#sidebar.active {
    margin-left: -250px;
}

.img-profile {
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
    /* don't forget to add all the previously mentioned styles here too */
    background: #555;
    color: #fff;
    transition: all 0.3s;
    text-align: left;
}

#sidebar .sidebar-header {
    background: #444;
}

#sidebar .sidebar-header .brand{
    padding: 12px;
    background: #252525;
    text-align: center;
}

#sidebar .sidebar-header .profile {
    padding: 20px;
    background: #333;
}

#sidebar .sidebar-header .profile a{
    color: white;
    text-decoration: none;
}

.profile .name {
    font-weight: bold;
}

.profile p {
    margin: 0;
    padding: 0;
}

#sidebar ul p {
    color: #fff;
    padding: 5px;
}

#sidebar ul li a {
    padding: 15px 25px;
    font-size: 16px;
    display: block;
}
#sidebar ul li a:hover {
    color: #454545;
    background: #aaa;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #aaa;
}
ul a {
    background: #454545;
    text-decoration: none;
    color: white;
}
ul a:hover {
    text-decoration: none;
}
.text-bold {
    font-weight: bold;
}
.text-normal {
    font-weight: normal;
}

</style>