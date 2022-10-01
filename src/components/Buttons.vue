<template>
    <div class="container">
        <router-link to="/">
            <button class="btn-back"><i class="fa-solid fa-angle-left"></i>Önceki Adım</button>
        </router-link>
        <router-link to="/firststep">
            <button class="btn-next">Sonraki Adım<i class="fa-solid fa-angle-right"></i></button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Buttons",
        components: {}
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
       align-items: center;
    }

    .btn-back {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #1919ff;
        background-color: transparent;
        color: #aed8e7;
        font-weight: bold;
        cursor: pointer;
    }

    .btn-back i {
        margin-right: 10px;
    }


    .btn-next {
        padding: 10px 20px;
        border: none;
        color: #fff;
        background-color: #1919ff;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-next i {
        margin-left: 10px;
    }
</style>