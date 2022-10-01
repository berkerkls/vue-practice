<template>
    <div class="container">
        <div class="settings">
            <div class="img-circle">
                <div class="circle"></div>
                <img src="https://cdn-icons-png.flaticon.com/512/1116/1116982.png?w=740&t=st=1664561851~exp=1664562451~hmac=f826c6610ffe08ead9111d4d45bef47adcbbb459b52f3034d3a91461b39c788f" alt="box" >
            </div>
            <div class="general-settings">
                <h5>Genel Mağaza Ayarları<i class="fas fa-thin fa-gear"></i></h5>
                <hr>
                <p>Ülke Döviz Kuru(1 USD)<i class="fas fa-duotone fa-circle-info"></i></p>
                <p class="description">Ülke Döviz Kuru(1 USD)</p>
                <div class="input">
                    <div class="dollar-input">
                        <span class="dollar">$</span>
                        <input type="text" placeholder="Input Text">
                        <span class="also">veya</span>
                    </div>
                    <div class="automatic">
                        <input type="checkbox">Otomatik <i class="fas fa-duotone fa-circle-info"></i>
                    </div>
                </div>
                <hr>
                <div class="dollar-percentage">
                    <p>Minimum Kar Oranı veya Tutarı <i class="fas fa-duotone fa-circle-info"></i></p>
                    <p class="description">Minimum kar oranı veya tutarı</p>
                    <div class="inputs">
                        <div class="percentage-side">
                            <span class="d-sign">%</span>
                            <input type="text" placeholder="Input Text">
                            <span class="and">ve</span>
                        </div>
                        <div class="dollar-side">
                            <span class="p-sign">$</span>
                            <input type="text" placeholder="Input Text">
                        </div>
                    </div>
                </div>

                <div class="button">
                    <button class="button-next">Sonraki Adım<i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
        </div>
   </div> 
</template>

<script>

    export default {
        name:"GeneralSettings",
        components: {
           class:"gen-settings"
        }
    }
</script>

<style scoped>
.container {
        display: flex;
        flex: 1;
    }


    .settings {
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        background-color: #fff;
        border:none;
        border-radius: 5px;
        width: 80%;
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
        width: 100%;
        margin: auto;
        margin-bottom: 50px;
        margin-left: 3.8rem;
        display: flex;
    }
    .general-settings .input .dollar-input {
        flex: 1;
        display: flex;
        margin-right: 20px;
    }
    .general-settings .input .dollar-input .also {
        margin-left: 10px;
        display: inline-block;
        margin: auto 0 auto 10px;
    }

    .general-settings .input .automatic {
        flex: 1;
        display: inline-block;
        margin: auto 0 auto 10px;
    }

    .general-settings .input .automatic input {
        margin-right: 10px;
    }

    .general-settings .input .dollar {
        background-color: #c6dee6;
        margin: auto;
        padding: 10px 20px;
        border: 1px solid #c6dee6;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;


    }
    .general-settings .input input {
        padding: 10px 20px;
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

    .dollar-percentage .inputs {
        display: flex;
        margin-left: 3.8rem;
        width: 100%;
    }

    .dollar-percentage .inputs .percentage-side input {
        padding: 10px 20px;
        border: 1px solid #c6dee6;
        border-radius: 5px;
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .dollar-percentage .inputs .dollar-side input {
        padding: 10px 20px;
        border: 1px solid #c6dee6;
        border-radius: 5px;
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .dollar-percentage .inputs .percentage-side .d-sign {
        background-color: #c6dee6;
        margin: auto;
        padding: 10px 20px;
        border: 1px solid #c6dee6;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .dollar-percentage .inputs .dollar-side .p-sign {
        background-color: #c6dee6;
        margin: auto;
        padding: 10px 20px;
        border: 1px solid #c6dee6;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .dollar-percentage .inputs .percentage-side .and {
        margin: 0 10px;
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
        justify-content: flex-end;
    }

    .button button {
        margin-right: 40px;
        padding: 10px 20px;
        border: none;
        color: #fff;
        background-color: #1919ff;
        border-radius: 5px;
        cursor: pointer;
    }

    .button button i {
        margin-left: 20px;
    }

</style>