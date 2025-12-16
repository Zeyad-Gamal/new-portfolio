import { defineStore } from "pinia";

const imagePath = "/src/assets/images/projects/";
const techImagePath = "/src/assets/images/tech/";
const githubProfile = "https://github.com/Zeyad-Gamal/";

function createProject(project) {
  return {
    ...project,
    images: project.images.map(
      img => imagePath+`${project.id}/${img}`
    ),
    tech: project.tech.map(
      techn => techImagePath+`${techn}`+'.svg'
    ),
    url: `/project/${project.id}`,
    github_url: githubProfile+`${project.githubName}`,
    
  };
}

const projectsData = [

            {
                id: 1,
                name: "BiteQuick",
                title: "Restaurant Website",
                description: "A restaurant management system that allows users to browse the menu, place orders",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:  ['html5','css3','javascript','bootstrap','vuejs'],
                points:[
                    'Restaurant menu',
                    'Make Order'
                ],
            },

            {
                id: 2,
                name: "Rusukh company",
                title: "Rusukh company system",
                description: "An internal system to manage the company processes",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png"],
                tech:  ['html5','css3','javascript','bootstrap','jquery'],
                points:[

                ],
            },

            {
                id: 3,
                name: "Egyptian Embassy",
                title: "Embassy organization system",
                description: "An internal system to manage the company processes",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"],
                tech:  ['html5','css3','javascript','bootstrap','jquery'],
                points:[

                ],
            },

            {
                id: 5,
                name: "Weather system",
                title: "Weather system",
                description: "A weather system that consists of all weather details for all countries on world",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png"],
                tech:["html5","css3","bootstrap","sass","javascript"]
            }

            ,
            {
                id: 7,
                name: "Medical web dashboard",
                title: "Dashboard Website",
                description: "A web dashboard for medical processes for graduation project",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:[]
            },

            {
                id: 8,
                name: "Voyage",
                title: "Tourism company Website",
                description: "Tourism adv site that display travels of a tourism company on Egypt",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:["html5","css3","bootstrap","javascript"]
            },
            {
                id: 9,
                name: "Management system",
                title: "Market Management Website",
                description: "A supermarket management casher system that allows to manage products and sales",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:[]
            },
            {
                id: 10,
                name: "Aya Curtains company",
                title: "Market Website",
                description: "A website for a curtains company that allows users to browse products in Red-sea",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:[]
            },
            {
                id: 11,
                name: "Mina Engineering company",
                title: "Engineering Website",
                description: "A website for an engineering company that allows users to browse services in Egypt",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png","7.png"],
                tech:[]
            },
            {
                id: 12,
                name: "Bakery site",
                title: "Bakery Website",
                description: "A website for a bakery shop that allows users to browse products",
                githubName: "",
                demo_url:"",
                images: ["2.png","3.png"],
                tech:[]
            }

];

export const useProjectsStore = defineStore("projects", {
    state: () => ({

        projects: projectsData.map(createProject)

    }),

    getters: {
    three: (state) => state.projects.slice(0, 6),
    all: (state) => state.projects,
    byId: (state) => (id) => {
        return state.projects.find(project => project.id === id);
    }
  },
})