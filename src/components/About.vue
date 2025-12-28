
<script setup>
  import { useSiteDataStore } from "@/store/siteData";
  
  
  const site = useSiteDataStore();

</script>

<template>
     <section
    id="about"
      class="main-section"
      style="width: fit-content;display: flex;justify-content: center;"
      >

      <section  class="about" style="">
        <div class="content" style="margin-top: 5rem">
          <h1 id="title-pag2" class="heading-title" style="color: whitesmoke;">
            about
          </h1>
          <h1
          id="Full-stack-developer-h1"
            class="heading-title about-job-title"
            style="
              color: #db8d76;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            "
          >
            {{ site.about_jobTitle }}
          </h1>
          <!-- rgba(233, 122, 11, 0.789) -->
          <p
            style="
              color: whitesmoke;
              font-size: 2rem;
              margin-top: 1rem;
              text-align: left;justify-content: justify; line-height: 1.4;
            "
          >
            I am <strong style="color: coral">Zeyad Gamal</strong>. I work as a
            software developer and my field of work is based on designing and
            developing web pages. I also create and develop desktop and mobile
            programs. I graduated from computer science at <strong>AAST</strong> in 2024.
          </p>

          <div class="about-contact">
            <li class="contact-ref">
              <FontAwesomeIcon class="contact-ref-icon" icon="phone" />&nbsp;{{ site.contact.phone }}
            </li>
            <li class="contact-ref">
              <FontAwesomeIcon class="contact-ref-icon" icon="envelope" />&nbsp;{{ site.contact.email }}
            </li>
            <li class="contact-ref">
              <FontAwesomeIcon class="contact-ref-icon" icon="location-dot" />&nbsp;{{ site.location }}
            </li>
          </div>
        </div>

     

        <div class="image-container" >
          <img src="/src/assets/images/my.png" alt="" style="width: 34rem;transform: rotateY(180deg);margin-bottom: 7rem;filter: grayscale(0.5);" />
        </div>
      </section>
    </section>

</template>




<style>

  

.about{
   
  background-color: rgba(19, 19, 77, 0.551);
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap; 
   align-items: center;
    gap: 3rem;
  justify-content: space-around !important;
}

.about .image-container{
    flex: 1 1 21rem;
    text-align: center;
    align-items: center;
    align-content: center;
    background: url(/src/assets/images/backgrounds/curves/about-bg.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
}

.about .image-container img{
    width: 70%;
    height: 40rem;
}

.about .content{
    margin-bottom: 10rem;
    flex: 1 1 41rem;
   text-align: left;margin: 0;

}


.about .content h3{
    font-size: 3rem;
    color: var(--black);
}

.about .content p{
    font-size: 1.5rem;
    color: var(--light-black);
    line-height: 2;
    padding: 1rem 0;
}





.about .about-contact {
        margin-top: 4rem;
      }
      .about .about-contact .contact-ref {
        display: block;
        background-color: transparent;
        margin-top: 1rem;
        margin-left: 2rem;
        color: var(--white);
        text-decoration: none;
        font-size: 2rem;
        cursor: text;

        justify-content: center;
      }




/* ssssss */



@media(max-width:340px){
  
.about .about-job-title{
    font-size: 2.9rem !important; 
}

.about .image-container{
    flex: 1 1 41rem;
    text-align: center;
    align-items: center;
    align-content: center;
}

.about .image-container img{
    width: 100% !important;
    height: 40rem;
}

.about .content p{
  font-size: 1.8rem !important;
}

.about .about-contact .contact-ref ,  .about .about-contact .contact-ref .contact-ref-icon{
  font-size: 1.5rem !important;
}
}



@media(max-width:260px){
.about .about-job-title{
    font-size: 2.5rem !important;
}
}

</style>
