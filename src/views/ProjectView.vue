<script setup>
import { useRoute } from "vue-router";
import  'vue3-carousel/carousel.css';
import { Carousel , Slide , Pagination , Navigation } from "vue3-carousel";
import { useProjectsStore } from "@/store/projectsStore";


const route = useRoute();
const projectId = route.params.id;
const projectStore = useProjectsStore();
const project = projectStore.byId(parseInt(projectId));


// const images = Array.from({length: 10}, (_, index) => ({
//     id: index + 1,
//     src: `https://picsum.photos/seed/${Math.random()}/800/600?}`,
// }));

const config = {
  height: 1700,
  gap: 5,
   wrapAround: true,
  autoplay: true,
  transition: 2500,
  timeout: 0,
  pauseAutoplayOnHover: true,
  mouseDrag: true

//    autoplay: true,      // autoplay enabled
//   loop: true,          // loop enabled
// //   breakpoints: {
// //     768: { itemsToShow: 1, height: 150 },
// //     1024: { itemsToShow: 2, height: 180 },
// //   },


//     itemsToShow: 2,
//   wrapAround: true,          // <— infinite loop with no restart
//   autoplay: true,
//   transition: 1500,          // <— slow movement (5 seconds per shift)
//   timeout: 0,                // <— disables jumpy autoplay behavior
//   pauseAutoplayOnHover: true,
//   mouseDrag: true,
};


</script>




<template>

   <section
      class="main-section portfolio"
    >
          <router-link to="/" class="back-btn"><i class="bi bi-arrow-return-left"></i></router-link>

      <section
        id="home-packages"
        class="packages"
      >
        <div>
          
          <p class="section-title">
          <!-- Here are the latest projects I have implemented -->
          </p>
          <br />
         
          <br /><br />
         </div>

       
        <div class="view-container">
            <div class="images">
                    <Carousel v-bind="config"  :gap="20" >
                <Slide >
                <img :src="project.image"  draggable="false" style="width: 100%; height: 100% !important;" />
                
                </Slide>

                

                 <Slide >
                <img :src="project.image"  draggable="false" style="width: 100%; height: 100% !important;" />
                
                </Slide>
                
                    <!-- <template #addons>
                        <Pagination class="custom-pagination" />
                        <Navigation class="custom-navigation" />
                    </template> -->
                </Carousel>


                <div class="techns mt-5">
                  <div class="tech" v-for="tech in project.tech" :key="tech">    <img :src="tech"   alt=""> </div>

                  
                  </div>
            </div>

            <div class="content" >
                <div class="details">
                    <h2 class="p-name">{{ project.name }}</h2>
                    <p class="p-description">{{ project.description }}</p>

                    <div class="points">
                      <ul>
                        <li v-for="point in project.points" :key="point">
                          {{ point }}
                        </li>
                      </ul>
                    </div>
                </div>

                

                <div class="buttons">
                  <a class="project-details-btn github"><i class="bi bi-github"></i> <span>Github</span></a>
                  <a class="project-details-btn demo"><i class="bi bi-play-circle-fill"></i> <span>Demo</span></a>
                </div>
            </div>
        </div>

      </section>

    </section>



    

  
</template>

<style scoped>
:root{
    background-color: #111;
}
.carousel{
    --vc-pgn-background-color:rgba(255, 255, 255, 0.7);
    --vc-pgn-active-color:rgba(255, 255, 255, 1);
    --vc-nav-background:rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
    /* width: 80%; */
}




.carousel .slide img{
    border-radius: 8px;
    width: 100%;
    height: 100% !important;
    object-fit: cover;
     -webkit-user-drag: none;
  user-select: none;
  pointer-events: none; /* optional: if you don't need clicks */

}


    .portfolio{
        width: 100%;
        padding: 2%;
    }

    .packages{
        width: 100%;
        background-color: rgba(19, 19, 77, 0.551);
    }





   .view-container .images{
    flex: 1 1 41rem;

    display: flex;
    flex-direction: column;
   }

   .view-container .content .details .p-name{
    font-size: 5rem;
   }

   .carousel{
    width: 100%;
    padding: 0;
   }






/* New */



.view-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  flex-wrap: wrap;
}

.view-container .images {
  flex: 1 1 400px;
  max-width: 1000px;
}

.view-container .content {
  flex: 1 1 350px;
  max-width: 800px;
}

.view-container .content .points ul{
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  color: #ccc;
  /* font-size: 16px; */
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: left !important;
}

.view-container .content .points ul li{
  color: #ccc;
}

.view-container .content .points ul,li::marker{
  color: coral;
}

.details .p-name {
  font-size: 4rem !important;
  margin-bottom: 10px;
    color: coral;
  /* color: #fff; */
}

.details .p-description {
  line-height: 1.6;
  /* font-size: 16px; */
  font-size: 1.6rem;
  color: #ddd;
}


.carousel {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  /* background-color: #111; */
  height: fit-content;
}

.view-container .images .carousel .slide{
  height: 1000px !important;
}


.carousel .slide img {
  border-radius: 12px;
  width: 100%;
  height: 400px;     /* FIXED RESPONSIVE HEIGHT */
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}

.view-container .buttons{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.project-details-btn{
  font-size: 22px;
  font-weight: 500;

  height: fit-content;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;

  color: whitesmoke;

  text-align: center;
  text-decoration: none;


  transition: 1s;
}


.project-details-btn span{
  font-size: 22px;
  font-weight: 500;
  color: whitesmoke;

  text-align: center;
  cursor: pointer;

}

.project-details-btn.github{
  background-color: #111111a6;
}

.project-details-btn.github:hover{
  background-color: #111;
}

.project-details-btn.demo{
  background-color: rgb(172, 96, 33);
}
.project-details-btn.demo:hover{
  background-color: rgb(216, 113, 27);
}

.project-details-btn i{
  /* font-size: 20px; */
  color: white !important;cursor: pointer;
}


.view-container .images .techns {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;position: relative;
  /* max-width: 100%;width: 60%; */
}

.view-container .images .techns  .tech{
  background-color: rgba(245, 245, 245, 0.83);
  border-radius: 50%;
  border-style: double;border-color: rgba(19, 19, 77, 0.551);
  border-width: 0.3rem;
  position: relative;

  transition: 0.5s;
}

.view-container .images .techns  .tech:hover{
  background-color: whitesmoke;
}

.view-container .images .techns  .tech img{
  padding: 0.7rem;
  border-radius: 25%;

  width: 5rem;
}


@media (max-width: 768px) {
  .view-container {
    /* flex-direction: column;
    align-items: center; */
    text-align: center;
  }

  .details .p-name {
    font-size: 28px;
  }

  .carousel .slide img {
    height: 220px;
  }

  .project-details-btn ,.project-details-btn span{
    /* display: none; */
    font-size: 15px;
  }
}

</style>