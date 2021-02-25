<template>
  <div class="footer-section">
    <div class="footer-1">
      <ul>
        <li>
          <a href="/" class="logo">Scool<span>.</span></a>
        </li>
        <li>
          <span class="copyright"
            >© 2020 Hundred Eyes Educational Services Pvt Ltd</span
          >
        </li>
      </ul>
    </div>
    <section class="ft-social">
      <ul class="ft-social-list">
        <li>
          <a href="#"><i class="fab fa-facebook icon-color"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-twitter icon-color"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-instagram icon-color"></i></a>
        </li>
      </ul>
    </section>
    <div class="footer-2">
      <ul>
        <li><router-link :to="{ name: 'About' }">About </router-link></li>
        <li>
          <router-link :to="{ name: 'privacypolicy' }"
            >Privacy Policy
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'termsandconditions' }"
            >Terms and Conditions</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Logo from '../Logo/Logo';

export default {
  name: "Footer",
  components: {
    // Logo
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.footer-section {
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex: nowrap;
  background-color: black;
  align-items: center;
  justify-content: space-between;
}
.footer-1 {
  margin-top: 10px;
  flex: 4;
  text-align: left;
  margin-left: 7rem;
}
.logo {
  color: white;
  font-size: 2em;
  text-decoration: none;
  /* font-family: 'Montserrat', sans-serif; */
  font-weight: 900;
}
.copyright {
  /* font-family: 'Montserrat', sans-serif; */
  font-size: 0.8rem;
  opacity: 50%;
  color: white;
}
.ft-social {
  padding: 0 1.875rem 1.78rem;
}
.ft-social-list {
  display: flex;
  justify-content: center;
  padding-top: 1.25rem;
  margin-left: -60rem;
}
.ft-social-list li {
  margin: 0.5rem;
  font-size: 1.25rem;
}
.icon-color {
  color: white !important;
}
.ft-social ul li {
  background-color: #333;
  padding: 10px;
  border-radius: 30px;
}
.footer-2 {
  display: flex;
  flex: 3;
  transition: max-height 0.2s ease-out;
}
.footer-2 > ul {
  display: flex;
  flex: wrap;
}
.footer-2 li a {
  float: right;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  color: #fff;
  opacity: 70%;
  align-items: center;
  justify-content: space-between;
  margin: 28px;
}
@media screen and (max-width: 768px) {
  .footer-2 {
    display: none;
  }
  .logo {
    margin-left: -4rem;
  }
  .copyright {
    margin-left: -4rem;
  }
  .ft-social-list {
    /* display:flex; */
    margin-top: -1rem;
    padding-left: 40rem;
  }
}
</style>
