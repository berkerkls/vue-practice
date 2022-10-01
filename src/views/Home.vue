<template>
    <Header />
    <Register />
    <Buttons />
</template>

<script>
    import Header from "../components/Header.vue"
    import Register from "../components/Register.vue"
    import Buttons from "../components/Buttons.vue"

    export default {
        name: "Home",
        components: {
    Header,
    Register,
    Buttons,
}
    }
</script>

