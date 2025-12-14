<script scoped>
export default {
  data() {
    return {
      services: [
        {
            icon: 'desktop',
            title: 'Desktop applications'
            },
            {
            icon: 'fa-solid fa-diagram-project',
            title: 'Web services'
            },
            {
            icon: 'fa-solid fa-palette',
            title: 'Web designing',
            },
            {
            icon: 'fa-solid fa-mobile-alt',
            title: 'Mobile applications',
            },
            {
            icon: 'fa-solid fa-cloud-download-alt',
            title: 'Hosting services',
            },
      ]
    };
  }
};
</script>


<template>
     <section class="main-section" style="width: 100% !important;">
        <div class="services" id="services" style=" width: 100%;">
          <h1 id="title-pag3" class="heading-title address-title" style="color: whitesmoke">
            Services
          </h1>
          <p class="section-title">
          Here are the services I provide
          </p>
          <hr style="color: aliceblue" />

          <section class="services-container">
            <div class="box-container">
              <div class="box" v-for="service in services" :key="service.title">
                <i><FontAwesomeIcon class="icon" :icon="service.icon" /></i>
                <h3>{{ service.title }}</h3>
              </div>
            </div>
          </section>
        </div>
     </section>
</template>



<style scoped>

  

  .services .box-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 2rem;
}


.services .box-container .box{
    box-shadow: var(--box-shadow);
    background:var(--white);
    align-items: center; /* Center items vertically */
    display: inline-block;
    

}

  
  .services-container .box-container {
    display: flex;
    flex-wrap: wrap;
  }

  .services .services-container .box-container .box {
    padding: 3rem 2rem;
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(244, 113, 5, 0.4) 6%,
      rgba(244, 113, 5, 0.6) 90%
    );
    cursor: pointer;
    flex: 1 1 16rem;
    border-radius: 2rem;
    transition: 1s;
  }

  .services .services-container .box-container .box:hover {
    background-color: rgb(116, 124, 134);
    /* background: linear-gradient(90deg, rgb(116, 124, 134) 6%, rgb(244, 113, 5) 90%); */
  }

  .services-container .box-container .box img {
    height: 7rem;
  }
  .services-container .box-container .box i {
    /* color: #db8d76; */
    color: whitesmoke;
    /* color: rgb(238, 238, 131); */
    font-size: 8rem;
  }

  .services-container .box-container .box h3 {
    color: var(--white);
    font-size: 1.7rem;
    padding-top: 1rem;
  }
</style>