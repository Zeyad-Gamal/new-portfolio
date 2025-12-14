import { defineStore } from "pinia";

const imagePath = "/src/assets/images/projects/";
const techImagePath = "/src/assets/images/tech/";
export const useProjectsStore = defineStore("projects", {
    state: () => ({

        projects: [
            {
                id: 1,
                name: "BiteQuick",
                title: "Restaurant Website",
                description: "A restaurant management system that allows users to browse the menu, place orders",
                image: imagePath + "restaurant-pr-1.png",
                tech:  ['html5','css3','javascript','bootstrap','vuejs']
                .map(t => techImagePath + t + '.svg'),
                points:[
                    'Restaurant menu',
                    'Make Order'
                ],
                url: "/project/1",
                demo_url: "",
                github_url: "",

            },
            {
                id: 8,
                name: "Voyage",
                title: "Tourism company Website",
                description: "Tourism adv site that display travels of a tourism company on Egypt",
                image: imagePath + "tourism-pr-8.png",
                tech:[],
                url: "/project/8"

            },
            {
                id: 9,
                name: "Management system",
                title: "Market Management Website",
                description: "A supermarket management casher system that allows to manage products and sales",
                image: imagePath + "desktop-pr-9.png",
                tech:[],
                url: "/project/9"
            },
            {
                id: 10,
                name: "Aya Curtains company",
                title: "Market Website",
                description: "A website for a curtains company that allows users to browse products in Red-sea",
                image: imagePath + "curtains-pr-10.png",
                tech:[],
                url: "/project/10"
            },
            {
                id: 11,
                name: "Mina Engineering company",
                title: "Engineering Website",
                description: "A website for an engineering company that allows users to browse services in Egypt",
                image: imagePath + "engineering-pr-11.png",
                tech:[],
                url: "/project/11"
            },
            {
                id: 12,
                name: "Bakery site",
                title: "Bakery Website",
                description: "A website for a bakery shop that allows users to browse products",
                image: imagePath + "bakery-pr-12.png",
                tech:[],
                url: "/project/12"
            },
            {
                id: 7,
                name: "Medical web dashboard",
                title: "Dashboard Website",
                description: "A web dashboard for medical processes for graduation project",
                image: imagePath + "medical-dashboard-pr-7.jpg",
                tech:[],
                url: "/project/7"
            }

            
        ]

    }),

    getters: {
    three: (state) => state.projects.slice(0, 6),
    all: (state) => state.projects,
    byId: (state) => (id) => {
        return state.projects.find(project => project.id === id);
    }
  },
})