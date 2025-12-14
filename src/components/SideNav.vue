
<script setup>
  
  import { ref, onMounted, onBeforeUnmount } from "vue";

  import { useSiteDataStore } from "@/store/siteData";
  
  
  const site = useSiteDataStore();

  const currentTime = ref("");

  function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  currentTime.value = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${amPm}`;
  }

  let timer = null;

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});



</script>

<template>



    <div id="side-nav"  class="nnav">
            <div class="side-nav-container"></div>

    
      <h1><span>Zeyad Gamal</span> <FontAwesomeIcon class="icon" id="nav-angle-right" icon="fa-solid fa-angle-right" /></h1>

      <div class="social-links-nav">
        <a id="facebook-link-nav" :href="site.socials.facebook"
          ><i class="bi bi-facebook"></i
        ></a>
        <a id="linkedin-link-nav" :href="site.socials.linkedin" 
          ><i class="bi bi-linkedin"></i
        ></a>
        <a id="whatsapp-link-nav" :href="site.socials.whatsapp"
          ><i class="bi bi-whatsapp"></i
        ></a>
        <a id="github-link-nav" :href="site.socials.github" 
          ><i class="bi bi-github"></i
        ></a>
        <a id="instagram-link-nav" :href="site.socials.instagram" 
          ><i class="bi bi-instagram"></i
        ></a>
        <a id="twitter-link-nav" :href="site.socials.twitter"
          ><i class="bi bi-twitter-x"></i
        ></a>

    
      </div>
      <a href="#home" class="btnref">Home</a>
      <a href="#about" class="btnref">About</a>
      <a href="#portfolio" class="btnref">Portfolio</a>
      <a href="#skills" class="btnref">Skills</a>
      <a href="#review" class="btnref">Contact</a>



      <h1 id="side-nav-current-time" class="time-content">{{ currentTime }}</h1>
     
      </div>



</template>







<style>
      .nnav{
        overflow: hidden;
        position: fixed;

        top: 1rem;left: 0;
        background-color: rgba(245, 245, 245, 0.567);
        padding: 3rem;
        margin-top: 35rem;
  transition: 0.4s;
         border-bottom-right-radius: 2rem;
         border-top-right-radius: 2rem;
         z-index: 1000;

       
      }

      .nnav .side-nav-container{
        position: absolute;
        height: 100%;width: 100%;
        left: 0;top: 0;
        z-index: -1;
      }

       .nnav a{
   transition: 0.1s;
  font-size: 2.1rem;
  margin-left: 2rem;
  color: var(--main-color);
  border-bottom: none;
  text-decoration: none;
  font-weight: 600;
  /* display: block; */
  display: none;
 
}

       .nnav a i{
        cursor: pointer;
       }



.nnav a:after {
    display:none;
  
  }

  /*  */
  .nnav .time-content{
   transition: 0.1s;
  font-size: 2.1rem;
  margin-left: 2rem;
  color: var(--main-color);
  border-bottom: none;
  text-decoration: none;
  font-weight: 600;
  position: absolute;
  top: 66%;
  /* display: block; */
  display: none;
 
}



.nnav .time-content:after {
    display:none;
  
  }

/*  */
 .nnav a:hover{
  transition: 0.4s;

  color:var(--main-color);
  /* border-bottom: .1rem solid var(--main-color); */
  border-width: 0.2rem;
  padding-left: .8rem;
  color: #111;
  /* color: #f19b2c; */

}

.nnav a:hover::first-letter{
color: #111 !important;
}



.nnav:hover{
  margin-top: 0rem;
  padding: 5rem;
  padding-bottom: 50rem;
  height: max-content;
}

.nnav:hover .side-nav-container{
  
        /* background: url(../assets/images/my.png); */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(10px);
}

.nnav:hover a{
  transition: 0.1s;
 display: block;
}


.nnav:hover .time-content{
  transition: 0.1s;
 display: block;
}


.nnav:hover h1 .icon{
  background-color: rgb(216, 194, 120);
  padding: 1rem;
  border-radius: 30%;
  margin-left: 5rem;
}

.nnav h1 span{
  color: var(--main-color);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 700;
display: none;
}
.nnav:hover h1 span{
  display: inline;
}

.social-links-nav a{
  display: none;
  
  background-color: transparent;
      color: var(--black);
    font-size: 2rem;
    cursor: pointer;
    margin-top: 4rem;
margin-left: .5rem;
   justify-content: center;
  
color: rgb(23, 11, 11);

}

.social-links-nav a:hover{
  color: rgb(19, 19, 77);
  padding: 0rem;
  scale: 1.5;
}

.nnav a::first-letter{
color: #f19b2c;
}

.nnav:hover .social-links-nav{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
    gap: 1rem;
}


#pg1-img{
  transform: rotateY(45deg);
  animation: anim-pg1-img 0.5s linear forwards;
}

 

/* #sendmsg{
  font-size: 2rem;
  margin: 1rem;
  border-radius: 1rem;
  padding: 0.8rem;
  padding-inline: 1.9rem;
  float: right;
  
  text-decoration: none;
  background-color: rgb(18, 49, 85);
  color: white;
  border-width: 0.1rem;
  border-color: white;
  border-style: solid;
  transition: 0.5s;
} */

/* #sendmsg:hover{
  background-color: rgb(18, 49, 65);

  
} */





@keyframes anim-pg1-img {
  0%{
    transform: translateX(-700px) rotate(180deg);
    background-color: white;
    opacity: 0;
    

  }

  100%{
    background-color: transparent;
    opacity: 1;
    transform: rotate(360deg);
  }
}



#nav-angle-right{
  animation: angle-right 0.7s  forwards infinite;

}


@keyframes angle-right {
  0%{
    transform: translateX(-10px);
  }

  100%{
    transform: translateX(4px);
  }

 
}




#select-portf-type{
  background-color: rgba(245, 245, 245, 0.838);
  color: #111;
  font-size: 2rem;

  display: none;
}

#select-portf-type option{
  padding: 10px;
  /* background-color: red; */
  border-radius: 2rem;
  border-style: solid;
  border-width: 2rem;
  border-color: aliceblue;
}

@media(max-width:825px){
  #select-portf-type{
    display:block;
  }

  #portfolio-button-menu{
    display: none;
  }
}

 



 </style>



