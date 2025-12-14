
<script setup>
  import { useSiteDataStore } from "@/store/siteData";
  
  
  const site = useSiteDataStore();

</script>


<template>

     <section class="footer" id="footer" dir="ltr">
      <div class="box-container">
        <div class="box">
          <h3>Quick links</h3>
          <a href="#home"> <i><FontAwesomeIcon icon="fas fa-angle-right" /></i> Home</a>
          <a href="#about"> <i><FontAwesomeIcon icon="fas fa-angle-right" /></i> About</a>
          <a href="#portfolio"> <i><FontAwesomeIcon icon="fas fa-angle-right" /></i> Portfolio</a>
          <a href="#review">
            <i><FontAwesomeIcon icon="fas fa-angle-right" /></i> Contact me</a
          >
          <a href="#services"> <i><FontAwesomeIcon icon="fas fa-angle-right" /></i> Services</a>

        </div>

        <div class="box">
          <h3>Contact info</h3>
          <a :href="site.contact.phone_tel" title="Call me" target="_blank">
            <i><FontAwesomeIcon icon="fas fa-phone" /></i> Call me
          </a>
          <a :href="site.socials.whatsapp" title="Whatsapp" target="_blank">
            <i><FontAwesomeIcon icon="fab fa-whatsapp" /></i> Whatsapp
          </a>
          <a  title="Map">
            <i><FontAwesomeIcon icon="fa-regular fa-map" /></i>{{ site.location }}</a
          >
         
        </div>


        <div class="box">
          <h3>Social links</h3>

          <a :href="site.socials.github" title="Github" target="_blank">
            <i class="bi bi-github"></i> Github
          </a>

          <a :href="site.socials.linkedin" title="Linkedin" target="_blank">
            <i class="bi bi-linkedin"></i> Linkedin
          </a>

          <a :href="site.socials.facebook" title="Facebook" target="_blank">
            <i class="bi bi-facebook"></i> Facebook
          </a>

          <a :href="site.socials.twitter" title="Twitter" target="_blank">
            <i class="bi bi-twitter-x"></i> Twitter
          </a>

          
          
        </div>

        <!-- <div class="box">
          <h1 style="font-size: 15rem;color: coral;text-decoration: underline dotted;">ZA</h1>
        </div> -->
        
      </div>

      <div class="credit">
        created by <span> zeyad abosetta</span> | all rights reserved!
      </div>
    </section>
    </template>


<style scoped>
  
  .footer{
    /* background:  rgb(4, 21, 40); */
    background:  rgb(2, 17, 35);
    background-size: cover;
    background-position: center;
    width: 100%;
}

.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3rem;
}

.footer .box-container .box h3{
    color: var(--white);
    font-size: 2.5rem;
    padding-bottom: 2rem;
}

.footer .box-container .box a{
    color: var(--light-white);
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
    text-decoration: none;
    display: block;
    cursor: pointer;
}

.footer .box-container .box a i{
    color: coral;
    padding-right: .5rem;
    transition: .2s linear;
}


.footer .box-container .box a:hover i{
    padding-right: 2rem;
}

.footer .credit{
    text-align: center;
    padding-top: 3rem;
    margin-top: 3rem;
    border-top: .1rem solid var(--light-white);
    font-size: 2rem;
    color: var(--white);
}

.footer .credit span{
    color: coral;
}
</style>