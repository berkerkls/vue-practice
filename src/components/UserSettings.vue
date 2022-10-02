<template>
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
            <div class="img-circle">
                <div class="circle"></div>
                <img src="https://cdn-icons-png.flaticon.com/512/1255/1255257.png?w=740&t=st=1664485174~exp=1664485774~hmac=90bcdcbf698db96b01904b22dc161f550311768273922a70faab625cb8e8943e" alt="box" >
            </div>
            <div class="general-settings">
                <h5>Genel Tedarikçi Ayarları<i class="fas fa-thin fa-gear"></i></h5>
                <hr>
                <p>Ekstra Vergi Ortalaması <i class="fas fa-duotone fa-circle-info"></i></p>
                <p class="description">Ekstra vergi ortalaması</p>
                <div class="input">
                    <span class="percentage">%</span>
                    <input type="text" placeholder="Input Text">
                </div>
                <hr>
                <div class="check-discount">
                    <label class="control">
                        <input type="checkbox">İndirimli fiyat kullan <i class="fas fa-duotone fa-circle-info"></i>
                    </label>
                </div>
            </div>
            <div class="button">
                <router-link to="/">
                    <button class="btn"><i class="fa-solid fa-angle-left"></i>Önceki Adım</button>
                </router-link>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserSettings",
    components: {
        class:"user-settings"
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
        border-right: hidden;
        
    }

    .sidebar .nav-link ul li a {
        text-decoration: none;
    }

    .settings {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        background-color: #fff;
        border: 1px solid blue;
        border-radius: 5px;
        overflow: hidden;
    }

    .img-circle {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    .general-settings {
        flex: 1;
    }

    .general-settings h5 {
        margin-top: 20px;
        text-align: center;
    }
    .general-settings h5 i {
        margin-left: 10px;
    }

    .general-settings hr {
        margin-bottom: 40px;
        width: 80%;
        margin: auto;
    }

    .general-settings p {
        width: 80%;
        margin: 30px auto 0 auto;
    }

    .general-settings i {
        color: #c6dee6;
    }

    .general-settings .description {
        color: #c6dee6;
        font-size: 14px;
        font-weight: 200;
        width: 80%;
        margin: 0 auto 0 auto;
    }
    .general-settings .input {
        width: 80%;
        margin: auto;
        margin-bottom: 50px;
    }
    .general-settings .input .percentage {
        background-color: #c6dee6;
        margin: auto;
        padding: 5px 20px;
        border: 1px solid #c6dee6;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;


    }
    .general-settings .input input {
        padding: 5px 80px;
        border: 1px solid #c6dee6;
        border-radius: 5px;
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    .general-settings .check-discount {
        width: 80%;
        margin: auto;
        margin-top: 50px;
    }
    .general-settings .control input[type="checkbox"] {
        margin-right: 20px;
    }

    .general-settings .control i {
        margin-left: 10px;
    }

    .img-circle .circle {
        position: absolute;
        border-radius: 47% 53% 50% 50% / 69% 75% 25% 31% ;
        width: 416px;
        height: 300px;
        background-color: #c6dee6;
        opacity: 0.4;
    }

    .img-circle img {
        width: 200px;
        height: 200px;
        position: absolute;
        object-fit: cover;
        z-index: 2;
    }

    .button {
        margin: 4rem 0;
        display: flex;
        justify-content: flex-start;
    }

    .button button {
        margin-left: 40px;
        border: 1px solid blue;
        background-color: transparent;
        color: blue;
        font-weight: bold;
        cursor: pointer;
    }

    .button button i {
        margin-right: 20px;
    }

    @media only screen and (max-width: 600px) {
  .sidebar .nav-link ul {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
  .sidebar .nav-link ul li  {
    margin-right: 10px;
    width: 150px;
    height: 40px;
    border: 1px solid #f5f5f5;
  }

  .img-circle {
    display: none;
  }
  .general-settings .input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .general-settings .input input {
    padding: 5px 50px;
    margin-right: 20px;

  }
  .general-settings .input .percentage {
    margin-left: 20px;
  }
}


</style>