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
        <UserSettings />   
        <GeneralSettings/> 
    </div>
</template>

<script>
    import UserSettings from '@/components/UserSettings.vue';
    import GeneralSettings from '@/components/GeneralSettings.vue';
    import Header from '@/components/Header.vue';


    export default {
        name:"FirstStep",
        components: {
    UserSettings,
    GeneralSettings,
    Header,
    Header
}
    }
</script>

<style scoped>

.container {
 display: flex;
 background-color: #f5f5f5;
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




</style>