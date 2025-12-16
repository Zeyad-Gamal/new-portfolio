<script setup>
import { ref, onMounted } from "vue";

const timeImagesPath = "/src/assets/images/time/";

const greeting = ref("");
const greetingIcon = ref("");

onMounted(() => {
  const now = new Date();
  const hours = now.getHours();
  greeting.value = hours < 12 ? "Good Morning" : "Good Evening";
  greetingIcon.value = hours < 12 ? timeImagesPath+"morning.png" : timeImagesPath+"night.png";
});
</script>


<template>
  <div  class="loader-wrap">

    <div class="greeting-container">
      <img :src="greetingIcon" alt="" width="120" height="120">
      <h1 class="greeting">{{ greeting }}</h1>
    </div>
    <i class="bi bi-airplane spinner"></i>

  </div>
</template>

<style scoped>

.loader-wrap {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: #0b0b1e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  
}

.greeting-container{
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center !important;
  align-items: center;
  gap: 5rem;
  position: absolute;  top: 20%;
}

.greeting-container .greeting {
  position: relative;

  color: whitesmoke;
  font-family: cursive;
  font-size: 5rem;
  text-align: center;
  z-index: 10000; /* above spinner if needed */
}

.spinner {
  font-size: 6rem;
  color: white;
  rotate: 5deg;
  transform: rotate(90deg);
  animation: spin 5s linear infinite;
  position: absolute;right: 0;

  margin-top: 2rem !important;
}

@keyframes spin {
  0% {
    transform: translate(-160rem);
    font-size: 6rem;
    opacity: 1;
  }
  25%{
    font-size: 9rem;
    opacity: 0.8;
  }

  50%{
    font-size: 12rem;
    opacity: 0.6;
  }

  75%{
    font-size: 9rem;
    opacity: 0.4;
  }

  100%{
    font-size: 6rem;
    opacity: 0.2;
  }

  125%{
    font-size: 3rem;opacity: 0.1;
  }
}



@media (max-width: 405px) {
  .greeting-container{
  top: 5%;
}
}
</style>
