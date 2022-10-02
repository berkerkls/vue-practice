<template>
    <header>
        <div class="container-header">
            <div class="circle passed">1</div>
            <span></span>
            <div class="circle selected">2</div>
            <span></span>
            <div class="circle"></div>
        </div>
    </header>
    <div class="container">
        <div class="sidebar">
            <div class="nav-link">
                <ul>
                    <li><router-link to="/firststep">Temel Ayarlar</router-link></li>
                    <li><router-link to="/improved">Gelişmiş</router-link></li>
                    <li><router-link to="/ultra">Ultra</router-link></li>
                </ul>
            </div>
        </div>

        <div class="settings">
            <h3>Ultra Settings</h3>
        </div>
    </div>
    <Buttons />
</template>

<script>
import Buttons from "../components/Buttons.vue"

export default {
    name:"UltraPage",
    components: {
        Buttons
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex: 1;
        margin-top: 2rem;
    }

    .sidebar {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: inherit;
    }
    
    .sidebar .nav-link ul {
        list-style: none;
        text-align: center;
    }

    .sidebar .nav-link ul li {
        margin-bottom: 15px;
        border: 1px solid blue;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: #fff;
        padding: 5px;
        border-right: none;
        
    }

    .sidebar .nav-link ul li a {
        text-decoration: none;
    }

    .settings {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vh;
        background-color: #fff;
        border: 1px solid blue;
        border-radius: 5px;
        overflow: hidden;
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        color: #fff;
        height: 80px;
    }

.circle.selected {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: skyblue;
        border-radius: 50%;
        font-weight: bold;
        text-align:center;
        border: none;
    }

    .circle.passed {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: skyblue;
        border-radius: 50%;
        font-weight: bold;
        text-align:center;
        border: none;
        opacity: 0.4;
    }

    .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #777;
        font-weight: bold;
        text-align:center
    }
    .container-header {
        display: flex;
        width: 208px;
        justify-content: space-between;
        align-items: center;
    }

    .container-header span {
        width: 30px;
        height: 10px;
        background-color: lightcyan;
        border-radius: 5px;
        
    }

    @media only screen and (max-width: 600px) {
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .sidebar .nav-link ul {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sidebar .nav-link ul li  {
            margin-right: 5px;
            width: 130px;
            height: 30px;
            border: 1px solid #f5f5f5;
        }
    }

</style>