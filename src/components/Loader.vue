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
    <i class="bi bi-gear spinner"></i>
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
  font-size: 5rem;
  text-align: center;
  z-index: 10000; /* above spinner if needed */
}

.spinner {
  font-size: 6rem;
  color: white;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(360deg);
    font-size: 6rem;
  }
  25%{
    font-size: 9rem;
  }

  50%{
    font-size: 12rem;
  }

  75%{
    font-size: 9rem;
  }

  100%{
    font-size: 6rem;
  }

  125%{
    font-size: 3rem;
  }
}
</style>
