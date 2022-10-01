<template>
    <header>
        <div class="container">
            <div class="circle selected">1</div>
            <span></span>
            <div class="circle"></div>
            <span></span>
            <div class="circle"></div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "App",
        components: {
        },
    }
</script>

<style scoped>
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

    .container {
        display: flex;
        width: 208px;
        justify-content: space-between;
        align-items: center;
    }

    .container span {
        width: 30px;
        height: 10px;
        background-color: lightcyan;
        border-radius: 5px;
        
    }
    @media only screen and (max-width: 600px) {
  header {
    display: none;
  }
}

</style>