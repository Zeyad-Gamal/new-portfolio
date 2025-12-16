<script setup>
  
  import { ref, onMounted } from "vue";
  import Loader from "@/components/Loader.vue";
  import Tfooter from './components/Footer.vue'

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 5000);
});
</script>



<template>
  <Loader v-if="loading" />

  <template v-else>
    <RouterView />
    <Tfooter />
  </template>
</template>


