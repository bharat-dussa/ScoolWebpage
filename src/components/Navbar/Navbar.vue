<template>
  <div class="nav">
    <header class="header">
      <Logo />
      <input id="toggler" class="toggler" type="checkbox" />
      <label for="toggler" class="burger">
        <span><i class="fa fa-bars"></i></span>
      </label>

      <nav>
        <ul>
          <!-- For mobile -->
          <label for="toggler" class="close">
            <i class="fa fa-times" aria-hidden="true"></i>
          </label>
          <div class="mobile-navigation-bar">
            <div>
              <router-link class="mentor-text" :to="{ name: 'BecomeaMentor' }"
                >Become a Mentor</router-link
              >
            </div>
            <div>
              <router-link class="mentor-text" :to="{ name: 'BecomeaMentor' }"
                >About Us</router-link
              >
            </div>
            <div>
              <router-link class="mentor-text" :to="{ name: 'BecomeaMentor' }"
                >Terms and conditions</router-link
              >
            </div>
            <div>
              <router-link :to="{ name: 'JoinUs' }"
                ><button class="join-us-btn">Join Us</button></router-link
              >
            </div>
          </div>
          <!-- For Desktop -->
          <li class="desktop-li">
            <router-link class="mentor-text" :to="{ name: 'BecomeaMentor' }"
              >Become a Mentor</router-link
            >
          </li>
          <li class="desktop-li">
            <router-link :to="{ name: 'JoinUs' }"
              ><button class="join-us-btn">Join Us</button></router-link
            >
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <div class="set-mr"></div>
  <router-view />
</template>

<script>
import Logo from "../Logo/Logo";

export default {
  name: "Navbar",
  components: {
    Logo
  }
};
</script>

<style>
* {
  margin-top: 60px;
}
/* .set-mr {
  margin-top: 40px;
} */
span {
  color: #f3164d;
}
header {
  text-align: center;
  position: fixed;
  width: 100%;
  color: #333;
  z-index: 100;
  background-color: #fff;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
}
.desktop-li,
.toggler {
  display: none;
}
.close {
  color: #f3164d;
  display: flex;
  font-size: 29px;
  margin-left: 10px;
  margin-top: 10px;
}

nav ul {
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 16px;
  background: #ffff;
  left: 100%;
  transition: all 0.5s;
  list-style: none;
}
.mobile-navigation-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  margin-right: 100px;
  margin-top: 100px;
}
.mobile-navigation-bar > div > a {
  align-content: center;
  align-items: center;
  align-self: center;
  margin-right: 50px;
}
nav li {
  margin-bottom: 16px;
  margin-left: 16px;
}
nav a {
  color: black;
  text-decoration: none;
  font: 20px;
}
nav a:hover {
  text-shadow: 2px 2px 4px #333;
  transition: ease-in 0.1s;
}

.toggler:checked ~ nav ul {
  left: 40%;
}
.burger {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  font-size: 30px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid;
  padding: 5px 10px;
  border: ;
  border-radius: 50%;
  color: #f3164d;
}
.join-us-btn {
  cursor: pointer;
  background-color: #f3164d;
  padding: 14px 42px;
  border-radius: 8px;
  border: none;
  color: #ffff;
  text-transform: uppercase;
}
@media screen and (max-width: 369px) {
  .mobile-navigation-bar {
    margin-right: 80px;
  }
}
@media screen and (max-width: 329px) {
  .mobile-navigation-bar {
    margin-right: 80px;
  }
  .mobile-navigation-bar > div > a {
    font-size: 14px;
  }

  .join-us-btn {
    padding: 10px 32px;
  }
}
@media screen and (min-width: 500px) and (max-width: 769px) {
  .mobile-navigation-bar {
    /* margin-right: 100px; */
    margin-right: 200px;
  }
}
/* @media screen and (min-width: 768px) and (max-width: 846px) {
  nav {
    grid-column: 2/4;
    justify-content: center;
    margin-right: 45px;
    margin-top: 11px;
  }
} */
@media screen and (min-width: 846px) {
  .mobile-navigation-bar,
  .close,
  .burger {
    display: none;
  }
  .desktop-li {
    display: block;
  }

  .header {
    position: fixed;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    background-color: #fff;
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    width: 100%;
    z-index: 999;
  }
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header > nav:nth-child(4) > ul:nth-child(1) {
    display: flex;
    align-items: center;
  }
  .header ul {
    all: unset;
    margin-top: 1rem;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
    background: transparent;
    align-items: center;
    padding: 0px 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header li a {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
    color: black;
  }
}
</style>
