<template>
  <br />
  <div class="player-container">
    <div class="player-item-left">
      <div class="video">
        <video controls>
          <source src="https://youtu.be/JJSoEo8JSnc" />
        </video>
      </div>
      <div class="video-description">
        <h3>{{ video.name }}</h3>
        <ul>
          <li><i class="fas fa-user"></i>{{ video.mentorname }}</li>
          <li><i class="fas fa-tag"></i>{{ video.totalLec }}</li>
          <li><i class="fas fa-clock"></i>{{ video.hours }}</li>
          <li><i class="fas fa-calendar"></i>{{ video.date }}</li>
        </ul>
        <button class="book-btn">Book Now</button>
      </div>
    </div>
    <div class="player-item-right">
      <div class="learner-section">
        <div class="mentor-icon"></div>
        <h2>Shanshank Mittal</h2>
        <p class="mentor-description">Master Marketeer</p>
        <div class="learner-title-container">
          <div class="learner-title-item" v-for="(title, x) in title" :key="x">
            <button>{{ title.name }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
// import image from '@/assets/Mentor/Mentor.png'

export default {
  name: "MentorPlayer",
  data() {
    return {
      title: [
        {
          name: "FMCG Marketing"
        },
        {
          name: "SEO"
        },
        {
          name: "CRO"
        },
        {
          name: "Branding"
        },
        {
          name: "SMMM"
        }
      ],
      video: {
        name: "Digital Marketing 101",
        mentorname: "By Shanshank MIttal",
        totalLec: "12 Lectures",
        hours: "5 Hours",
        date: "Last Updated Nov 25, 2020"
      }
    };
  }
};
</script>

<style scoped src="./MentorPlayer.css"></style>
