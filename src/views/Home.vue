<template>
  <div class="container principal">
    <div class="top">
      <div class="logo">
        <v-icon color="red" x-large>mdi-fire</v-icon>
        <span>Smoothie Match</span>
      </div>
      <div class="text">
        <span
          >Smoothie Match was designed by smoothie specialist to find the
          perfect flavor to match your mood and...</span
        >
      </div>
    </div>

    <div class="bottom">
      <v-btn color="green" x-large outlined rounded>
        <router-link to="/create">Create your own smoothie</router-link>
      </v-btn>
      <v-btn color="blue" x-large outlined rounded>
        <router-link to="/take">Take me to the smoothie</router-link>
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      jola: "saasdasasads",
    };
  },
};
</script>
<style scoped>
.top {
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  font-size: 1.4rem;
  padding: 3rem 0;
  align-items: center;
}
.top .logo {
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
}

.top .text {
  width: 85%;
  border-radius: 2rem;
  border: 0.04rem solid red;
  height: 10rem;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
}
.bottom {
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  align-items: center;
}
.container.principal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bottom .v-btn {
  width: 87%;
  height: 4rem;
  margin: 2rem 0;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
}
.bottom a {
  text-decoration: none;
  color: black;
}
@media (min-width: 768px) {
  .top .text {
    height: 3rem;
  }
}
</style>
