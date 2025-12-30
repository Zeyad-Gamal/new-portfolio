<script setup>
import  'vue3-carousel/carousel.css';
import { Carousel , Slide , Pagination , Navigation } from "vue3-carousel";


const config = {
//   height: 1000,
  gap: 80,
   wrapAround: true,
  autoplay: 1000,
  transition: 2500,
//   timeout: 0,
  pauseAutoplayOnHover: true,
  mouseDrag: true,

//    autoplay: true,      // autoplay enabled
  loop: true,          // loop enabled
  breakpoints: {
    200: { itemsToShow: 1, height: 150 },
    300: { itemsToShow: 1, height: 150 },
    768: { itemsToShow: 1, height: 150 },
    1024: { itemsToShow: 2, height: 180 },
  },


    itemsToShow: 2,
//   wrapAround: true,          // <— infinite loop with no restart
//   autoplay: true,
//   transition: 1500,          // <— slow movement (5 seconds per shift)
//   timeout: 0,                // <— disables jumpy autoplay behavior
//   pauseAutoplayOnHover: true,
//   mouseDrag: true,
};




</script>


<script scoped>

const certificatesPath = (certificate) => `${import.meta.env.BASE_URL}images/certificates/${certificate}`;
export default {
  data() {
    return {
      certificates: [
            {
            image: certificatesPath('A U S.png'),
            title: ''
            },
            {
            image: certificatesPath('AAST graduation.jpeg'),
            title: ''
            },
            {
            image: certificatesPath('Branding.jpg'),
            title: '',
            },
            {
            image: certificatesPath('CIB training.jpeg'),
            title: '',
            },
            {
            image: certificatesPath('GDSC core team.jpeg'),
            title: '',
            },
            {
            image: certificatesPath('Google.png'),
            title: '',
            },
            {
            image: certificatesPath('hp life.png'),
            title: '',
            },
            {
            image: certificatesPath('ITI Software testing.jpg'),
            title: '',
            },
            {
            image: certificatesPath('Python.jpg'),
            title: '',
            },
            {
            image: certificatesPath('Sixty Seventh PlaceContestant537492-1_page-0001.jpg'),
            title: '',
            },
            
      ]
    };
  }
};

</script>


<template>
    
    <section
      class="main-section portfolio"
      style="width: 100%;"
    >
      <section
        id="home-packages"
        class="packages"
        style="background-color: rgba(19, 19, 77, 0.551);width: 100%;"
      >
        <div>
          <h1 class="heading-title address-title" style="color: whitesmoke">
            My certificates
          </h1>

          <p class="section-title">
          Some of the certificates I obtained
          </p>
          <br />
         
          <br /><br />
          <hr style="color: aliceblue" />
        </div>


        <div class="carousel-container">
                <Carousel v-bind="config" >
                <Slide v-for="certificate in certificates" :key="certificate.title">
                <img :src="certificate.image"  draggable="false" style="width: 100%; height: 100% !important;" />
                
                </Slide>

                
                    <!-- <template #addons>
                        <Pagination class="custom-pagination" />
                        <Navigation class="custom-navigation" />
                    </template> -->
                </Carousel>
        </div>

    </section>
    </section>
    </template>


<style scoped>

  

  .certificates .packages {
    padding-inline: 2rem;
  }

  .certificates .packages .box-container .box .certf-slider:hover{
    animation-play-state:paused;
  }

  .certificates .packages .box-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    gap: 2rem;
    /* background-color: antiquewhite; */
    /* grid-template-columns: 32rem 32rem 32rem; */
  }

  .certificates .packages .box-container .box {
    box-shadow: var(--box-shadow);
    background-color: transparent;
    border-color: rgba(211, 211, 223, 0.258);
    border-style: solid;
    border-width: 0.3rem;
    /* background:rgba(211, 211, 223, 0.258); */
    align-items: center; /* Center items vertically */
    display: inline-block;

    border-radius: 2rem;
  }
/* --- */


  .certificates .packages .box-container{
    display: flex;
    justify-content: center;
  }


.certificates .packages .box-container .box{
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: nowrap;
    justify-items: center;
   overflow: hidden;
   justify-content: center;
   /* background-color: #e2b33d; */
   border-radius: 1rem;
   border-style: solid;
   border-color: transparent;
   width: 100%;
   height: 40rem;
   margin: auto;
   background-color: rgba(255, 255, 255, 0);
}


.certificates .packages .box-container .box .certf-slider{
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: nowrap;
    justify-items: center;

    animation: moveslid 40s ease-in-out infinite ;
    animation-delay: 0.1s;
}



.certificates .packages .box-container .box .certf-slider img{
      
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  width: 53rem;
  height: 40rem;

overflow: hidden;
}

@media(max-width:376px){
  .certificates .packages .box-container .box .certf-slider img{
    width: 33rem;
    height: 20rem;
  }
}

@media(max-width:426px){
  .certificates .packages .box-container .box .certf-slider img{
    width: 43rem;
    height: 30rem;
  }
}

@media(max-width:321px){
  .certificates .packages .box-container .box .certf-slider img{
     height: 22rem;
  }
}


.carousel__slide {
  opacity: 0.4;
  transition: opacity 0.3s ease;

      height: fit-content !important;
      margin: auto;

}

.carousel__slide--active {
  opacity: 1;
}

:root{
    background-color: #111;
}
.carousel{
    --vc-pgn-background-color:rgba(255, 255, 255, 0.7);
    --vc-pgn-active-color:rgba(255, 255, 255, 1);
    --vc-nav-background:rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
    
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  height: fit-content;
  padding: 0;
}








.carousel-container .carousel .carousel__slide img{
  height: 100% !important;
  max-height: 350px;
  -webkit-user-drag: none;
  border-radius: 12px;
  pointer-events: none;
  user-select: none;

  align-items: center;
}


@media (max-width: 768px) {


  .carousel .carousel__slide img {
    height: 220px;
    max-height: 200px !important;
  }


}




</style>