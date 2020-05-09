<template>
  <div class="container principal">
    <div class="top">
      <div class="logo">
        <img src alt />
        <span>Smoothie Match</span>
      </div>
      <div class="text">
        <span>Smoothie Match was designed by smoothie specialist to find the perfect flavor to match your mood and...</span>
      </div>
    </div>

    <div class="bottom">
      <router-link to="/about" class="b-green btn">Create your own smoothie</router-link>
      <router-link to="/about" class="b-blue btn">Take me to the smoothie</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      jola: "saasdasasads"
    };
  }
};
</script>
<style >
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
}
.top .text {
  width: 85%;
  border-radius: 2rem;
  border: 0.2rem solid red;
  height: 10rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
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
.bottom .btn {
  width: 70%;
  height: 4rem;
  margin: 3rem 0;
  background-color: rgba(255, 255, 255, 0);
  font-weight: bold;
  border-radius: 5rem;
  text-decoration: none;
  color: black;
  text-align: center;
  padding: 0.7rem 0;
}
.btn.b-green {
  border: 0.2rem solid green;
}
.btn.b-blue {
  border: 0.2rem solid blue;
}
</style>