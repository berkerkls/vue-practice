<template>
    <div class="container">
        <button class="btn-back"><i class="fa-solid fa-angle-left"></i>Önceki Adım</button>
        <button class="btn-next">Sonraki Adım<i class="fa-solid fa-angle-right"></i></button>
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
        color: #1919ff;
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