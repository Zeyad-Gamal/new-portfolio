import { defineStore } from "pinia";

export const useSiteDataStore = defineStore("siteData", {
  state: () => ({
    name: "Zeyad Gamal",
    about_jobTitle: "Full-stack developer",
    jobTitles: [
      "Software Developer",
      "Full-stack Developer",
      "Web Designer"
    ],
    socials: {
      facebook: "https://www.facebook.com/zeyad.abosetta.9",
      linkedin: "https://www.linkedin.com/in/zeyad-abosetta-z25",
      whatsapp: "https://wa.me/+20109-701-1799",
      github: "https://github.com/Zeyad-Gamal",
      instagram: "https://www.instagram.com/zeyad_2552002",
      twitter: "https://x.com/ZAbosetta",
      
    },

    contact: {
        phone: "+20109-701-1799",
        phone_tel: "tel:+20 109-701-1799",
        email: "zeyadabosetta2@gmail.com"
    },

    location: "Egypt, Qena",

    resume: ""
    
  })
});
