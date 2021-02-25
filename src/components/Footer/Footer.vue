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
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped src="./Footer.css"></style>
