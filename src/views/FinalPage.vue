<template>
    <header>
        <div class="container-header">
            <div class="circle passed">1</div>
            <span></span>
            <div class="circle passed">2</div>
            <span></span>
            <div class="circle selected">3</div>
        </div>
    </header>
        <div class="container">
            <div class="circle-img">
                <img src="https://cdn-icons-png.flaticon.com/512/839/839734.png?w=740&t=st=1664647857~exp=1664648457~hmac=2e6141b6e631e60411b06a81b6240a3228ef9706cf1dbf8d4e8d40099772e549" alt="checked-list">
                <div class="circle-background"></div>
            </div>
            <div class="final">
                <h3>Kurulum Tamamlandı</h3>
                <p>Lorem ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
            </div>
            <div class="button">
                <router-link to="/" class="btn-final">
                    Ana Ekrana Git<i class="fa-solid fa-angle-right"></i>
                </router-link>
                <span>6 sn. sonra yönlendirileceksiniz.</span>
            </div>
        </div>
</template>

<script>
    export default {
        name:"FinalPage",
        components: {}
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .circle-img {
    flex: 1;
    width: 100%;
    height: 75%;
    background-color: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}

.circle-img .circle-background {
    width: 400px;
    height: 300px;
    border-radius: 51% 49% 53% 47% / 67% 63% 37% 33% ;
    background-color: #c6dee6;
    z-index: 1;
    opacity: 0.4;
}

.circle-img img {
    height: 70%;
    z-index: 2;
    width: 250px;
    height: 250px;
    position: absolute;
    object-fit: cover;
}

.final {
    flex: 1;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.final h3 {
    font-weight: bold;
}

.final p {
    font-size: 20px;
}

.button {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.button .btn-final {
   display: block;
   margin: auto;
   padding: 15px;
   border-radius: 5px;
   color: #fff;
   background-color: #1919ff;
   border: 1px solid #1919ff;
   text-decoration: none;
}

.button .btn-final:hover {
    opacity: 0.5;
}

.button .btn-final i {
    margin-left: 10px;
}


.button span {
    color: #c6dee6;
    margin-top: 10px;
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
        .final p {
            text-align: center;
        }

        .final {
            margin-top: 10px;
        }

        .button .btn-final {
            display: block;
            margin: auto;
        }

    }


</style>