<script setup>
import { onMounted } from "vue";

import { ref } from "vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

</script>


<template>
      <!-- <section
      class="header"
      id="header-data"
      style="
        background-color: rgba(255, 255, 255, 0.834);
        padding-bottom: 1rem;
        box-shadow: var(--box-shadow);
      "

    >
      <a
        href="home.html"
        class="logo"
        style="
          text-align: right;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          text-decoration: none;
          font-size: 3rem;
          font-weight: 600;
          color: #2c2765;
        "
        ><img src="../../public/favicon.ico" alt=""></a
      >




      <nav class="navbar" :class="{ active: isOpen }">


        <a href="#home" class="btnref">Home</a>
        <a href="#about" class="btnref">About</a>
        <a href="#portfolio" class="btnref">Portfolio</a>
        <a href="#review" class="btnref">Contact</a>
      </nav>

      <div id="menu-btn"  @click="toggleMenu">
    <FontAwesomeIcon
    class="icon"
    :icon="isOpen ? 'fas fa-times' : 'fas fa-bars'"
  /></div>
    </section> -->
</template>

<!-- <style scoped>

    .header{
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    background-color: var(--white);
    display: none;
    padding-top: 2rem;
    padding-bottom: 2rem;
    align-items: center;
    justify-content: space-between;
    padding-right: 7rem;
    width: 100%;

}

.header .logo img{
    font-size: 2.5rem;
    color: var(--black);
    width: 5rem;

}



.header .navbar a{
    transition: 0.1s;
    font-size: 2.1rem;
    margin-left: 2rem;
    color: var(--main-color);
    border-bottom: none;
    text-decoration: none;
    font-weight: 600;
    display: none;
    

}



.header .navbar a:hover{
    transition: 0.1s;

    color:var(--main-color);
    border-bottom: .1rem solid var(--main-color);
    border-width: 0.2rem;
    padding-bottom: .5rem;

}

#menu-btn{
    font-size: 2.5rem;
    cursor: pointer;
    color: rgb(0, 0, 0);
    display: none;
}


@media(max-width:768px){
.refs{
    display: none;
}
    .header{
        display: flex;
    }
    .header .navbar a{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1 1 41rem;
    }

    #menu-btn{
        display: inline-block;
        transition: .2s linear;
    }
    .header .navbar a{
        color: var(--black);
    }

    .header .navbar .icon.fa-times{
        transform: rotate(180deg);
        display: none !important;
    }


    .header .navbar{
        position: absolute;
        top: 99%; left: 0; right: 0;
        background-color: var(--white);
        border-top: var(--border);
        padding: 2rem;
        transition: .2s linear;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }

    .header .navbar.active{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .header .navbar a{
        display: block;
        margin: 2rem;
        text-align: center;
    }
}
</style> -->