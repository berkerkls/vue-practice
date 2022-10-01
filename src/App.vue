<template> 
    <router-view />
</template>

<script>
import Home from "./views/Home.vue"
import FirstStep from "./views/FirstStep.vue"
import FinalPage from "./views/FinalPage.vue";
import Buttons from "./components/Buttons.vue"






export default {
  name: 'App',
  components: {
    Home,
    FirstStep,
    FinalPage,
    Buttons,
}
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}

.btn {
  display: inline-block;
  background-color: #1919ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: 0;
}


</style>
