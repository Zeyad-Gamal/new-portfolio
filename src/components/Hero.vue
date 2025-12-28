
<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { useSiteDataStore } from "@/store/siteData";
  
  
  const site = useSiteDataStore();


      const words = site.jobTitles;

const jobTitles = ref(""); 

let i = 0;
let offset = 0;
let forwards = true;
let skipCount = 0;
const skipDelay = 15;
const speed = 70;


let titleTimer = null;


function startWordFlick() {
  titleTimer = setInterval(() => {
    let word = words[i];

    if (forwards) {
      if (offset >= word.length) {
        skipCount++;
        if (skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i = (i + 1) % words.length; // loop
      }
    }

    if (skipCount === 0) {
      offset += forwards ? 1 : -1;
    }

    jobTitles.value = word.substring(0, offset);
  }, speed);
}

onMounted(() => {
  startWordFlick();
});

onBeforeUnmount(() => {
  clearInterval(titleTimer);
});

</script>

<template>

<section
    id="home"
      class="main-section home"
      
      > 

      <div class="image" >
        <img id="pg1-img"   src="\src\assets\images\portfolioImage1.png" alt="" />
      </div>

      


      <div  class="content">
        <!-- Full-stack developer -->
        <h1 class="heading-title" style="color: whitesmoke;text-align: center;font-weight: 600;">{{ site.name }}</h1>

        <h1
          is="type-async"
          id="type-text"
          class="heading-title"
          style="
             color: #db8d76;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 4rem;text-align: center;
          "
        >
          <i
            class="bi bi-gear gear"></i>
        &nbsp;
          <span
          id="home-job"
            style="
 
              color: #db8d76;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
             "
            class="job-titles"
          >{{ jobTitles }}</span>
        </h1>
        <!-- <span class="blinking-cursor">_</span> -->

        <!-- rgba(233, 122, 11, 0.789) -->
        <p
          style="
            color: whitesmoke;
            font-size: 2rem;
            margin-top: 1rem;
            text-align: justify;
          "
        >
          I am Ziad Gamal. I work as a software developer and designer, and I graduated from the Faculty of Computers and Information Technology from the <strong>AAST</strong> in 2024
           .
        </p>

        <div class="refs">
          
          <a href="#about" class="btnref">About</a>
          <a href="#services" class="btnref">Services</a>
          <!-- <a href="" class="btnref">Blog</a> -->
          <a href="#portfolio" class="btnref">Portfolio</a>
          <a href="#skills" class="btnref">Skills</a>
          <!-- <a href="" class="btnref">Contact</a> -->
        </div>

        <div class="social-links">
          <a id="facebook-link-pg1" :href="site.socials.facebook" class="main-btn"
            ><i class="bi bi-facebook"></i
          ></a>
          <a id="linkedin-link-pg1" :href="site.socials.linkedin" class="main-btn"
            ><i class="bi bi-linkedin"></i
          ></a>
          <a id="whatsapp-link-pg1" :href="site.socials.whatsapp" class="main-btn"
            ><i class="bi bi-whatsapp"></i
          ></a>
          <a id="github-link-pg1" :href="site.socials.github" class="main-btn"
            ><i class="bi bi-github"></i
          ></a>
          <a id="instagram-link-pg1" :href="site.socials.instagram" class="main-btn"
            ><i class="bi bi-instagram"></i
          ></a>
          <a id="twitter-link-pg1" :href="site.socials.twitter" class="main-btn"
            ><i class="bi bi-twitter-x"></i
          ></a>
<br>
          <a id="hire-link-pg1" href="#review" class="main-btn">Hire me</a>
          <a
            id="resume-link-pg1"
            href="cv/Zeyad Gamal Abo setta   Software engineer.docx"
            class="main-btn"
            ><span>Resume&nbsp;</span><i class="bi bi-download"></i
          ></a>
        </div>
      </div>


    </section>
    


      
    
</template>


<style scoped>
  .gear{
                
              animation: rotation 2s infinite linear !important;
              display: inline-block;
              color: white;

              justify-content: center;

              justify-content: center;
              justify-self: center;
              justify-items: center;
              align-items: center;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  a{
    text-decoration: none;
  }
</style>