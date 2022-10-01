<template>
    <div class="container">
        <div class="circle-img">
            <div class="circle"></div>
            <img src="https://cdn-0.emojis.wiki/emoji-pics/microsoft/laptop-microsoft.png" alt="">
        </div>
        <form class="register">
            <h1>Merhaba...</h1>
            <h3>Mağazanızı oluşturmak için alış ve satış kaynaklarını seçebilirsin.</h3>
            <div class="header">
                <p>Kaynak Mağaza</p>
                <i class="fas fa-duotone fa-circle-info"></i>
            </div>
            <span>Açıklama</span>
            <div class="region-select">
                <select class="countries" id="countries">
                    <option value="US Marketplace">US Marketplace</option>
                    <option value="US Marketplace">US Marketplace</option>
                    <option value="US Marketplace">US Marketplace</option>
                    <option value="US Marketplace">US Marketplace</option>
                </select>
            </div>
            <div class="header">
                <p>Kaynak Mağaza</p>
                <i class="fas fa-duotone fa-circle-info"></i>
            </div>
            <span>Açıklama</span>
            <div class="region-select">
                <select class="countries" id="countries">
                    <option class="special" value="US Marketplace">US Marketplace</option>
                    <option class="special" value="US Marketplace">US Marketplace</option>
                    <option class="special" value="US Marketplace">US Marketplace</option>
                    <option value="US Marketplace">US Marketplace</option>
                </select>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "Register",
        components: {}
    }
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    height: 80vh;
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
}

.circle-img .circle {
    width: 500px;
    height: 500px;
    border-radius: 51% 49% 53% 47% / 67% 63% 37% 33% ;
    background-color: #c6dee6;
    position: absolute;
    z-index: 1;
    opacity: 0.4;
}

.circle-img img {
    height: 70%;
    z-index: 2;
    width: 500px;
    height: 500px;
    position: absolute;
    object-fit: cover;
}

.register {
    flex: 1;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
}
.register h1 {
    text-align: center;
}

.register h3 {
    font-weight: 200;
    text-align:center;
    width: 70%;
    margin: auto;
}

.register .header {
    display: flex;
    margin-top: 40px;
}

.register .header p {
    font-size: 18px;
    font-weight: 200;
}


.register .header i {
    margin-top: 6px;
    margin-left: 8px;
    color: rgb(198, 222, 230);
}

.register span {
    color: rgb(198, 222, 230);
    font-weight: 200;
    margin-bottom: 5px;
}
.region-select {
    position: relative;
}

select {
  background-color: #ffffff;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  border: 1px solid rgb(198, 222, 230);
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  /* reset */

  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 15px 0;
  width: 80%;
  cursor: pointer;
}

select.countries {
    background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}

select.countries:focus {
    outline: 0;
}

@media only screen and (max-width: 600px) {
  .circle-img {
    display: none;
  }
  .container {
    margin-top: 20px;
  }
}



</style>
