<template>
  <div class="nav">
    <header class="header">
      <Logo />
      <div class="nav">
        <!-- <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" /> -->
        <div class="humberger"><div></div></div>
        <ul class="menu">
          <li>
            <router-link class="mentor-text" :to="{ name: 'BecomeaMentor' }"
              >Become a Mentor</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'JoinUs' }"
              ><button class="join-us-btn">Join Us</button></router-link
            >
          </li>
        </ul>
      </div>
    </header>
  </div>

  <router-view />
</template>

<script>
import Logo from "../Logo/Logo";

export default {
  name: "Navbar",
  components: {
    Logo
  },
  methods: {
    openNav: function() {
      document.getElementById("myNav").style.width = "100%";
    },

    closeNav: function() {
      document.getElementById("myNav").style.width = "0%";
    }
  }
};
</script>

<style>
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  background-color: #fff;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  background: #fff;
  width: 100%;
  z-index: 3;
}
.header ul {
  display: flex;
  flex-flow: row wrap;
  margin-top: 1rem;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
  background: transparent;
}
.header li a {
  font-family: "Montserrat", sans-serif;
  display: block;
  padding: 20px 20px;
  text-decoration: none;
  color: black;
}

.header .logo {
  text-transform: lowercase;
  color: black;
  display: block;
  float: left;
  font-size: 2em;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
}
span {
  color: #f3164d;
}
/* join-us-btn */
.join-us-btn {
  cursor: pointer;
  background-color: #f3164d;
  padding: 14px 42px;
  margin-right: 74px;
  margin-top: -10px;
  border-radius: 8px;
  border: none;
  color: #ffff;
  text-transform: uppercase;
}
.mentor-text {
  font-family: "Montserrat", sans-serif;
  color: black;
}

/* 48em = 768px */
@media screen and (max-width: 768px) {
}
</style>
