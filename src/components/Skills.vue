<script scoped>
export default {
  data() {
    return {
      categories: [
        {
          title: "libraries",
          description: "Design languages, frameworks and libraries",
          items: [
                {name:"HTML" , percent: 90},
                {name: "CSS" , percent: 80}, 
                {name: "Bootstrap" , percent: 70}, 
                {name: "Vue js" , percent: 40}, 
                {name: "JQuery" , percent: 70},
                {name: "Ajax" , percent: 50},
                {name: "Laravel" , percent: 80},
                {name: "Flutter" , percent: 30},
                {name: "Flask" , percent: 40}
            ]
        },
        {
          title: "database",
          description: "Database management systems and database programming languages",
          items: [
                {name:"Oracle" , percent: 90},
                {name: "MySQL" , percent: 80}, 
                {name: "MongoDB" , percent: 40}, 
                {name: "PhpMyAdmin" , percent: 80}, 
                {name: "SQLite" , percent: 60},
                {name: "PostgreSQL" , percent: 50}

          ]
        },
        // {
        //     title: "tools",
        //     description: "Tools and platforms",
        //     items: ["Git", "GitHub", "Visual Studio Code","Android Studio","Postman","XAMPP","Firebase"]
        // },
        {
          title: "languages",
          description: "programming languages",
          items: [
                {name:"PHP" , percent: 85},
                {name: "Python" , percent: 70}, 
                {name: "Java" , percent: 75}, 
                {name: "C#" , percent: 30}, 
                {name: "C++" , percent: 90},
                {name: "JavaScript" , percent: 60},
                {name: "Dart" , percent: 40}
          ]
        },
        {
            title: "skills",
            description: "Skills",
            items: [
                {name:"Problem Solving" , percent: 85},
                {name: "UI / UX" , percent: 40}, 
                {name: "Marketing" , percent: 50}

            ]
        }
      ]
    };
  }
};
</script>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";

const animated = ref(false);

function onScroll() {
  animated.value = window.scrollY >= 960;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

</script>


<template>
 <section
      id="skills"
      class="main-section skills" style="width: 100%;"
    >
       
      <br /><br />
      
      <section
        class="skills-packages"
        style="background-color: rgba(19, 19, 77, 0.551);width: 100%;"
        >
                  <h1 id="title-skills" class="heading-title" style="color: whitesmoke">
            Skills
          </h1>
        <div v-for="cat in categories" :key="cat.title">
            <div>

          <p class="section-title">
            {{ cat.description }}
          </p>
          <hr class="section-title-line" />
        </div>

        <div class="box-container" >
          <div class="box" v-for="item in cat.items" :key="item.name" >
            <div class="progress" >
              <!-- IMPORTANT: width is 0 when not animated, then transitions to item.percent -->
              <div
                class="progress-bar"
  role="progressbar"
  :aria-valuenow="item.percent"
  aria-valuemin="0"
  aria-valuemax="100"
  :class="{ animated: animated }"
  :style="{ width: animated ? item.percent + '%' : '0%' }"

              >
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        <br  /><br  />
        <br  /><br  />
        </div>
        </div>


      </section>
 </section>

</template>



<style>




    .skills{
      display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* gap: 3rem; */
    }



    .skills .box-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 2rem;
}


.skills .box-container .box{
    box-shadow: var(--box-shadow);
    background:var(--white);
    align-items: center; 
    display: inline-block;
    

}


  .skills .skills-packages .box-container .box {
    background-color: transparent;
    box-shadow: none;
    margin: 4rem;
  }

  .skills .skills-packages .box-container .box .progress {
    border-top-right-radius: 10rem;
    border-bottom-left-radius: 10rem;
    box-shadow: 0 4px 8px 0 rgba(18, 9, 9, 0.2),
      0 6px 20px 0 rgba(15, 9, 9, 0.2);

    height: 3rem;
  }

  .skills .skills-packages .box-container .box .progress .progress-bar {
    border-top-right-radius: 10rem;
    background-color: rgba(178, 115, 63, 1);
    box-shadow: 0 4px 8px 0 rgb(18, 9, 9),
      0 6px 20px 0 rgba(15, 9, 9, 0.964);
    overflow: hidden; 
    white-space: nowrap; 
    animation: none;
  }

  .skills .skills-packages .box-container .box .progress .progress-bar span {
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }




  
  #title-skills {
    display: flex;
    flex-direction: row;

    font-size: 2rem;
  }
  #title-skills:before,
  #title-skills:after {
    content: "";
    flex: 0.1 0.1;
    border-bottom: 1px solid;
    margin: auto;
  }
  #title-skills:before {
    margin-right: 10px;
  }
  #title-skills:after {
    margin-left: 10px;
  }


.progress-bar.animated {
  animation: typingee 0.7s steps(200, end) forwards;
}

@keyframes typingee {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

</style>