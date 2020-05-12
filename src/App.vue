<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },
};
</script>
<style>
.container {
  background-color: white;
  height: 90%;
  overflow: visible;
}
#app {
  background-color: #c5c5c5;
  padding: 4rem 0;
}
body {
  background-color: #c5c5c5;
}
</style>
