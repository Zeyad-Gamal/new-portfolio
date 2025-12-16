<script setup>

import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Services from '../components/Services.vue'
import Projects from '../components/Projects.vue'
import Certificates from '../components/Certificates.vue'
import Contact from '../components/Contact.vue'
import Sidenav from '../components/SideNav.vue'
import Navbar from '../components/Nav.vue'
import Mobilenav from '../components/MobileNav.vue'



</script>


<template>

  
  <router-view />
  <navbar />
  <sidenav />
  <Mobilenav />
  <hero />
  <about />
  <skills />
  <services />
  <projects />
  <Certificates />
  <Contact />
  
</template>

