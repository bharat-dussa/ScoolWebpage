<template>
  <div class="learner-section">
    <h2>What Our Learners Say About this Mentor</h2>
    <div class="learner-title-container">
      <div class="learner-title-item" v-for="(title, x) in title" :key="x">
        <button>{{ title.name }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Learners",
  components: {},
  data() {
    return {
      title: [
        { name: "Good Communication" },
        { name: "Crisp Content" },
        { name: "Interactive" },
        { name: "Collection" },
        { name: "Engaing" },
        { name: "Practical" },
        { name: "Projects" },
        { name: "Comprehensive" }
      ]
    };
  }
};
</script>

<style scoped src="./Learners.css"></style>
