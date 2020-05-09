<template>
  <div id="app">
    <router-view />
  </div>
</template>

 <script>
/*<div id="nav">
      <router-link to="/">Home</router-link>
    </div>*/
export default {};
</script>
<style>
html {
  box-sizing: border-box;
  font-size: 62.5%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body {
  font-family: "verdana";
  font-weight: 300;
  font-size: 1.6rem;
}
.container {
  width: 80%;
  margin: auto;
  background-color: white;
  height: 100%;
}
#app {
  background-color: #c5c5c5;
  height: 100vh;
  padding: 4rem 0;
}
</style>