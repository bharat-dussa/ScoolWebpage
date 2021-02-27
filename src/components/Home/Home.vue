<template>
  <div class="main-container">
    <!-- <div class="set-mr"></div> -->
    <MentorPlayer />
    <CourseDescription />
    <Learners />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
import CourseDescription from "../CourseDescription/CourseDescription";
import MentorPlayer from "../MentorPlayer/MentorPlayer";
import Learners from "../Learners/Learners";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";

export default {
  name: "Home",
  components: {
    MentorPlayer,
    CourseDescription,
    Learners,
    Reviews,
    Footer
  }
};
</script>

<style scoped src="@/components/assests/Styles/style.css"></style>
