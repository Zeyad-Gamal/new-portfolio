<script setup>

import { useProjectsStore } from "@/store/projectsStore";
const projectStore = useProjectsStore();


</script>


<template>
    
    <section
      id="portfolio"
      class="main-section portfolio"
      style="width: 100%;"
    >
      <section
        class="packages"
        style="background-color: rgba(19, 19, 77, 0.551);width: 100%;"
      >
        <div>
          <h1 class="heading-title address-title" style="color: whitesmoke">
            Portfolio
          </h1>

          <p class="section-title">
          Here are the latest projects I have implemented
          </p>
          <br />
         
          <br /><br />
          <hr style="color: aliceblue" />
        </div>

        <div class="box-container">
          
          <div class="box" v-for="project in projectStore.three" :key="project.id">
            <div class="image">
              <img :src="project.images[0]" alt="" />
            </div>

            <div class="content" >
            
              <div class="container" >
                <h3 class="project-title">{{ project.title }}</h3>
                <router-link :to="project.url" class="portfolio-project-btn"><FontAwesomeIcon class="icon" icon="fas fa-circle-info" />&nbsp;Visit</router-link>
              <p class="project-description">
                <span>{{ project.name }}</span>
                <br>
                {{ project.description }}
              </p>
              </div>
              
            </div>
          </div>

          



        </div>

        <div class="box-container" style="place-items: center;"> 
          <router-link class="more-btn" to="/projects">More</router-link>
        </div>

      </section>

    </section>

    </template>


<style scoped>
  
  .portfolio .packages {
    padding-inline: 2rem;
  }

  
  .portfolio .packages .box-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
  }

  .portfolio .packages .box-container .box {
    box-shadow: var(--box-shadow);
    background-color: transparent;
    border-color: rgba(211, 211, 223, 0.258);
    border-style: solid;
    border-width: 0.3rem;
    align-items: center; /* Center items vertically */
    display: inline-block;
    
    border-radius: 2rem;
    position: relative;
  }



  .portfolio .packages .box-container .box .content i img {
    width: 9%;
    padding-right: 2rem;
  }
  
  .portfolio .packages .box-container .box .image {
    height: 26rem !important;
    max-height: 30rem !important;
    width: 100%;
    overflow: hidden;
    flex-shrink: 0; /* Prevent the image from shrinking */
    display: block !important;
    flex-wrap: nowrap;
    justify-content: center !important; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    border-radius: 2rem;
    background-color: brown;
    /* box-shadow: 0 .5rem 1rem rgba(243, 2, 2, 0.989); */
    /* background-color: ; */
  }

  .portfolio .packages .box-container .box .image img {
    height: 100% !important;
    max-height: 30rem !important;
    /* max-width: 100%; */
    object-fit: fill;
    /* transition: 2s linear; */
    /* width: 55%;  */
    width: 100%;
    border-radius: 2rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    
  }




 .portfolio .packages .box-container .box .content {

  padding: 2rem;
  text-align: center;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 2rem;

  /* Gradient background */
  background: linear-gradient(
    10deg,
    rgb(0, 0, 0),       /* dark */
    rgba(255, 255, 255, 0)    /* light/transparent */
  );

  opacity: 0;                 /* hidden but still present */
  transition: opacity 0.4s ease;   /* smooth fade in */
  cursor: pointer;
}

.portfolio .packages .box-container .box:hover .content {
  opacity: 1;                 /* fade in smoothly */
}

.portfolio .packages .box-container .box:hover .image img{
  opacity: 0.8;
}

.portfolio .packages .box-container .box .content .container {
  position: absolute;
  bottom: 10px;
  left: 0;
  margin: auto;
  width: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
}



  .portfolio .packages .box-container .box .content .container .project-title {
    font-size: 2rem;
    color: var(--white);
  }

  .portfolio .packages .box-container .box .content .container .project-description {
    font-size: 1.3rem;
    color: var(--white);

    text-align: left;
    margin-left: 2rem;
  }

  .portfolio .packages .box-container .box .content .container .project-description span{
    font-size: 2rem;
    font-weight: 800;
    color: rgb(238, 127, 36);
  }


    .portfolio
    .packages
    .box-container
    .box
    .content
    .portfolio-project-btn {
    text-decoration: none;

    margin-left: 2rem;

    font-size: 1.8rem;
    padding: 0.8rem 1rem;
    
    height: 4.2rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    text-align: center;
    
    border-radius: 2.5rem;
    transition: 0.5s;
    
    background: rgb(255, 154, 46);
    color: #202020;
    font-weight: 800;
    width: 32%;margin: auto;
    margin-top: rem;
    cursor: pointer;
    
    }

    .portfolio
    .packages
    .box-container
    .box
    .content
    .portfolio-project-btn .icon
    {
      cursor: pointer !important;
    }


    .portfolio
    .packages
    .box-container
    .box
    .content
    .portfolio-project-btn:hover{
    box-shadow: 0 0 10px 10px rgb(42, 42, 41);
    }




  .portfolio-button-menu {
    display: flex;
    margin: auto;
    margin-right: 2rem;
    justify-content: center;
  }

  .portfolio-button-menu a {
    text-decoration: none;

    display: inline-block;
    border-radius: 2rem;

    /* margin-top: 3rem; */
    margin-left: 2rem;
    color: var(--black);
    font-size: 2.1rem;
    padding: 0.8rem 1rem;
    cursor: pointer;

    width: 7rem;
    height: 4.5rem;
    justify-content: center;
    border-radius: 50%;
    /* border-color: #3535357e; */
    border-style: solid;
    border-width: 0.3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    text-align: center;
    background-color: rgb(0, 200, 200);
    /* color: rgba(178, 115, 63, 1); */
    color: #000;
    border-radius: 1rem;
    border-color: rgb(33, 33, 34);
    transition: 0.5s;
    box-shadow: 0 0 1px 1px rgba(250, 249, 248, 0.704);

    background-color: var(--white);
    background-size: 200% 100%;
    text-transform: capitalize;
  }

  .portfolio-button-menu a:hover {
    /* background-color: rgb(255, 238, 55); */
    border-color: rgb(255, 238, 55);
    color: var(--black);
  }

  .portfolio .packages .form .portfolio-button-menu a:nth-child(1) {
    background-color: rgb(255, 238, 55);
  }


  .portfolio .packages .box-container {
    justify-content: center;
  }
  
  @media (max-width: 380px) {
    .portfolio .packages .box-container {
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    }

  }

  @media (max-width: 342px) {
    .portfolio .packages .box-container {
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    }

  }

</style>