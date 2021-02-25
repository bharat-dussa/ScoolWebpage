<template>
  <Navbar />
  <div></div>
</template>

<script>
import Navbar from "./components/Navbar";
// import Home from '../src/components/Home/Home';
export default {
  name: "App",
  components: {
    Navbar
    // Home
  }
};
</script>

<style>
#app {
  max-width: 100%;
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
