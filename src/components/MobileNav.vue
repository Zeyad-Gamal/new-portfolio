
<script setup>
    import {ref} from "vue";
    
    // const btnIsClicked = ref(false);
    const clicked = ref([false, false, false, false]);
    const btns = [
        {
            title: "home",  
            icon:"bi-house",
            link: ""
        },
        {
            title: "services",
            icon:"bi-gear",
            link: ""
        },

        {
            title: "portfolio",
            icon:"bi-laptop",
            link: ""
        },
        {
            title: "skills",
            icon:"bi-code",
            link: ""
        },
    ];



    function activeBtn(index){
  clicked.value = clicked.value.map(() => false);

  clicked.value[index] = true;
    }


</script>

<template>

    <div class="mobile-nav-container">

        <div class="mobile-nav">
            <a :href="'#'+btns[index].title" v-for="(isClicked, index) in clicked"
            :key="index"
            class="mobile-nav-btn"
            :class="{ clicked: isClicked }"
            :disabled="isClicked"
            @click="activeBtn(index)"
            >
        <i :class="['bi', btns[index].icon]"></i>
        </a>
        </div>


    </div>

</template>

<style scoped>

    .mobile-nav-container{
        /* background-color: rgb(136, 62, 35); */
        background-color: rgba(18, 49, 85, 1);
        z-index: 9999;

        position: fixed;bottom: 3rem;
        border-radius: 40px;
        border-style: double;
        border-color: whitesmoke;border-width: 0.2rem;
        padding-block: 15px;
        padding-inline: 25px;
/* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
/* box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset; */
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

display: none;
    }

    .mobile-nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        /* background: yellow; */
        border-radius: 15px;
    }

    .mobile-nav .mobile-nav-btn{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    border-style: solid;
    border-color: rgba(226, 181, 136, 0.245);
    border-width: 0.3rem;
    
    cursor: pointer;

    display: flex;justify-content: center;
    align-items: center;



    background: -webkit-linear-gradient(90deg, rgb(210, 176, 254) 25%, rgb(226, 181, 136) 0%, rgba(234,118,23,1) 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    

    .mobile-nav .mobile-nav-btn i{
        font-size: 1.7rem;
        cursor: pointer;
    }

    .mobile-nav .clicked{

    border-color: rgba(234,118,23,1);
    -webkit-text-fill-color: rgba(234,118,23,1);
    }



    @media (max-width:768px) {
    .mobile-nav-container{
        display: block !important;
    }
    }



</style>