<template>
  <div class="reviews-section">
    <h3>
      Reviews <span class="label">{{ title.length }}</span>
    </h3>
    <div class="review-section-flex" v-for="(title, x) in title" :key="x">
      <div class="review-icon"></div>
      <div class="review-details-container">
        <div class="review-details">
          <div class="review-title">
            <span>{{ title.name }}</span
            ><span class="review-time">{{ title.time }}</span>
          </div>
          <span class="review-description">{{ title.description }}</span>
        </div>
        <div>
          <i class="fa fa-heart"></i>
          <span class="review-likes">{{ title.likes }}</span>
        </div>
      </div>
    </div>
    <div class="review-btn-container">
      <button class="label review-btn">See all reviews</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  components: {},
  data() {
    return {
      title: [
        {
          icon: "../assests/pic/profilepic.webp",
          name: "Ankit Jain",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "256"
        },
        {
          name: "Mansi Bhalsera",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "25"
        },
        {
          name: "Sameer Khan",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "2"
        },
        {
          name: "Collection",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "6"
        },
        {
          name: "Engaing",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "25"
        },
        {
          name: "Practical",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "256"
        },
        {
          name: "Projects",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "256"
        },
        {
          name: "Comprehensive",
          description: "The Only class youll need in marketig",
          time: "November 23 2021 at 11:23 a.m",
          likes: "256"
        }
      ]
    };
  }
};
</script>

<style scoped src="./reviews.css"></style>
