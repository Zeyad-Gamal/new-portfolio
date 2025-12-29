import { point } from "leaflet";
import { defineStore } from "pinia";

const imagePath = "/new-portfolio/images/projects/";
const techImagePath = "@/assets/images/tech/";
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
    github_url: project.githubName ? githubProfile + `${project.githubName}` : null,
    
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
                tech:  ['html5','css3','javascript','bootstrap'],
                points:[
                    'From scratch design and development',
                    'It is have a dynamic menu that can be updated easily',
                    'Users can place orders online',
                    'Contact form for users to send inquiries'
                ],
                idea: {
                    overview:"A restaurant website that allows users to easily access the menu, place orders online, and contact the restaurant for inquiries or reservations.",
                    problem: "The restaurant was having trouble finding the menu easily, and there was also a rush for orders because there was no way to order other than going to the restaurant or by phone.",
                    solution: "The solution was to create a website that includes the restaurant's menu and is automatically updated based on new offerings, as well as a contact form for communicating with the restaurant and making reservations."
                },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],

                type: "frontend",

                role: "Solo",
                duration: "5 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 2,
                name: "Rusukh company",
                title: "Rusukh company system",
                description: "An internal system specific to the company helps company management control company operations, internal conversations, and file sharing.",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png"],
                tech:  ['html5','css3','javascript','bootstrap','jquery','php','mysql'],
                points:[
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'File sharing system',
                    'Internal messaging system',
                    'Task management system'
                ],

                idea: {
                    overview:"An internal system specific to the company helps the company's management to carry out administrative operations, such as organizing the company's digitized files and documents, creating organizational files, uploading any type of file, assigning files and tasks to employees, and creating employee emails. This system enjoys all security features.",
                    problem: "The company was facing challenges in managing its internal operations, communication, and file sharing among employees. There was a need for a centralized system to streamline these processes and improve overall efficiency.",
                    solution: "The solution was to develop a custom internal system that would address the specific needs of the company. This system would include features such as user authentication, file sharing, internal messaging, and task management, allowing employees to collaborate more effectively and manage their work more efficiently."
                },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],

                type: "fullstack",

                role: "Solo",
                duration: "4 days",
                status: "Completed",
                year: "2024"
            },

            {
                id: 3,
                name: "Egyptian Embassy",
                title: "Embassy organization system",
                description: "An internal system to manage the company processes",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"],
                tech:  ['html5','css3','javascript','bootstrap','jquery','php','mysql','websocket'],
                points:[
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Online visa and telegram application form',
                    'Approval workflow system',
                    'Paperless document management system',
                    'Complete the required paperwork online automatically and effortlessly.'
                ],

                idea: {
                    overview:"An internal system within the embassy assists the embassy administration in carrying out administrative processes, such as organizing files and digital documents. The application form allows for online visa and telegram applications, and the administrative office responsible for the site can then update or delete data, and approve or reject applications.",
                    problem: "The problem is the overcrowding that citizens experience when going to the consulate itself, as well as the many successive procedures and complicated steps, as the citizen goes to the headquarters and then moves from one office to another through numerous procedures.",
                    solution: "The solution is to create an internal system that includes an online application form for visas and telegrams, allowing citizens to complete the required paperwork online automatically and effortlessly. This system will help reduce overcrowding at the consulate and streamline the application process."
                },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "MVC architecture to organize the codebase and separate concerns",
                    "WebSocket to enable real-time communication for instant updates for visa and telegram application requests"
                ],

                type: "fullstack",

                role: "Team",
                duration: "10 days",
                status: "Completed",
                year: "2025"
            },

            {
                id: 4,
                name: "Baitak app",
                title: "M-commerce app",
                description: "A mobile commerce app that allows users to buy and sell products online",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:  ['php','mysql','paymob'],
                points:[
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Displaying products in their respective categories',
                    'Ordering products via social media from within the app',
                    'An application that allows merchants and users to buy and sell in exchange for a subscription.'
                ],

                idea: {
                    overview:"A mobile commerce application that enables users to buy and sell products online. The app provides a platform for merchants to showcase their products and for users to browse and make purchases conveniently from their mobile devices.",
                    problem: "The problem is the difficulty faced by merchants in reaching a wider audience and the inconvenience for users to find and purchase products from various sellers in one place.",
                    solution: "The solution is to develop a mobile commerce app that serves as a centralized platform for merchants and users. The app will allow merchants to create profiles, list their products, and manage orders, while users can easily browse through different categories, view product details, and make purchases directly from the app."
                },

                technologies: [
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "Paymob to facilitate secure online payments and transactions within the app",
                    "JWT for secure user authentication and authorization"
                ],

                type: "backend",

                role: "Solo",
                duration: "45 days",
                status: "Completed",
                year: "2025"
            },

            {
                id: 5,
                name: "Weather system",
                title: "Weather system",
                description: "A weather system that consists of all weather details for all countries on world",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png"],
                tech:["html5","css3","bootstrap","sass","javascript"],

                points:[
                    'From scratch design and development',
                    'Fetches real-time weather data from the OpenWeatherMap API',
                    'Displays weather information in an easy-to-understand format',
                    'Responsive design for optimal viewing on various devices'
                ],

                 idea: {
                    overview:"A weather system that provides comprehensive weather details for countries around the world. The system fetches real-time weather data from the OpenWeatherMap API and displays it in an easy-to-understand format.",
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3, Bootstrap, and Sass to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features",
                    "OpenWeatherMap API to fetch real-time weather data for various locations"
                ],
                type: "training",

                role: "Solo",
                duration: "2 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 6,
                name: "Old portfolio",
                title: "Personal Portfolio",
                description: "My old personal portfolio website to showcase my projects and skills",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:["html5","css3","bootstrap","javascript"],

                points:[
                    'From scratch design and development',
                    'Showcases my projects and skills',
                    'Includes sections for about me, projects, skills, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A personal portfolio website to showcase my projects and skills. The website includes sections for about me, projects, skills, and contact information.",
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],

                type: "frontend",

                role: "Solo",
                duration: "2 days",
                status: "Completed",
                year: "2023"
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
                tech:['html5','css3','javascript','bootstrap','jquery','php','mysql'],

                points: [
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Centralized system for managing medical processes',
                    'Access and manage patient information, appointments, and medical records'
                ],

                idea: {
                    overview:"A web dashboard for managing medical processes, designed as a graduation project. The dashboard provides an interface for healthcare professionals to access and manage patient information, appointments, and medical records.",
                    problem: "The problem is the lack of a centralized system for managing medical processes, which can lead to inefficiencies and difficulties in accessing patient information.",
                    solution: "The solution is to develop a web dashboard that consolidates medical processes into a single platform. This dashboard will allow healthcare professionals to easily access patient information and update medical records, improving overall efficiency and patient care."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],

                type: "fullstack",


                role: "Solo",
                duration: " 1 week",
                status: "Completed",
                year: "2024"
            },

            {
                id: 8,
                name: "Voyage",
                title: "Tourism company Website",
                description: "Tourism adv site that display travels of a tourism company on Egypt",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:["html5","css3","bootstrap"],
                
                points: [
                    'From scratch design and development',
                    'Displays travel packages and destinations',
                    'Includes sections for about us, services, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A tourism advertisement website that showcases the travel packages and destinations offered by a tourism company in Egypt. The website includes sections for about us, services, and contact information.",
                    problem: "The problem is the need for a platform to effectively showcase the tourism company's offerings and attract potential customers.",
                    solution: "The solution is to create a visually appealing and user-friendly website that highlights the company's travel packages and destinations. The website will provide essential information about the company and make it easy for visitors to get in touch for inquiries or bookings."
              },

              technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive"
                ],

                type: "frontend",

                role: "Solo",
                duration: " 2 days",
                status: "Completed",
                year: "2023"
            },

            {
                id: 9,
                name: "Management system",
                title: "Market Management Website",
                description: "A supermarket management casher system that allows to manage products and sales",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['java','mysql'],

                points: [
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Product management system',
                    'Sales tracking and reporting system'
                ],

                idea: {
                    overview:"A supermarket management cashier system that allows users to manage products and sales. The system provides features for product management, sales tracking, and reporting.",
                    problem: "The problem is the need for an efficient system to manage supermarket products and sales.",
                    solution: "The solution is to create a comprehensive management system that allows users to manage products, track sales, and generate reports."
              },

                technologies: [
                    "Java to handle application logic and user interface",
                    "MySQL to store and manage application data"
                ],

                type: "fullstack",

                role: "Solo",
                duration: " 18 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 10,
                name: "Aya Curtains company",
                title: "Market Website",
                description: "A website for a curtains company that allows users to browse products in Red-sea",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','jquery','php','mysql'],

                points: [
                    'From scratch design and development',
                    'User authentication and authorization system',
                    'Product browsing and searching system',
                    'Contact form for users to send inquiries',
                    'Admin panel for managing products and employees',
                ],

                idea: {
                    overview:"A website for a curtains company that allows users to browse products and make inquiries. The website includes a contact form for users to send inquiries and an admin panel for managing products and employees.",
                    problem: "The problem is the need for an online platform to showcase the company's products and facilitate communication with customers.",
                    solution: "The solution is to create a user-friendly website that allows users to easily browse products and contact the company for inquiries. The admin panel will help the company manage its products and employees more efficiently."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],
                
                type: "fullstack",

                role: "Solo",
                duration: " 10 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 11,
                name: "Mina Engineering company",
                title: "Engineering Website",
                description: "A website for an engineering company that allows users to browse services in Egypt",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png","4.png","5.png","6.png","7.png"],
                tech:['html5','css3','javascript','bootstrap'],

                points: [
                    'From scratch design and development',
                    'Displays engineering services offered by the company',
                    'Includes sections for about us, projects, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A website for an engineering company that allows users to browse the services offered by the company. The website includes sections for about us, projects, and contact information.",
                    problem: "The problem is the need for a platform to effectively showcase the engineering company's services and attract potential clients.",
                    solution: "The solution is to create a visually appealing and user-friendly website that highlights the company's engineering services. The website will provide essential information about the company and make it easy for visitors to get in touch for inquiries or project discussions."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],
                
                type: "frontend",

                role: "Solo",
                duration: " 3 days",
                status: "Completed",
                year: "2024"
            },
         
            {
                id: 12,
                name: "Bakery site",
                title: "Bakery Website",
                description: "A website for a bakery shop that allows users to browse products",
                githubName: "",
                demo_url:"",
                images: ["1.png","2.png","3.png"],
                tech:['html5','css3'],

                points: [
                    'From scratch design and development',
                    'Displays bakery products offered by the shop',
                    'Includes sections for about us, products, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A website for a bakery shop that allows users to browse the products offered by the shop. The website includes sections for about us, products, and contact information.",
                    // problem: "The problem is the need for a platform to effectively showcase the bakery shop's products and attract potential customers.",
                    // solution: "The solution is to create a visually appealing and user-friendly website that highlights the bakery shop's products. The website will provide essential information about the shop and make it easy for visitors to get in touch for inquiries or orders."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 to style the web pages and make them responsive"
                ],
                type: "frontend",

                role: "Solo",
                duration: " 2 days",
                status: "Completed",
                year: "2022"
            },
            
            
            {
                id: 13,
                name: "AUG platform",
                title: "Advertisment agancy",
                description: "A website for an advertisment agancy that allows users to browse services",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap'],

                points: [
                    'From scratch design and development',
                    'Displays advertisment services offered by the agancy',
                    'Includes sections for about us, services, and contact information',
                    'Responsive design for optimal viewing on various devices'
                ],

                idea: {
                    overview:"A website for an advertisment agancy that allows users to browse the services offered by the agancy. The website includes sections for about us, services, and contact information.",
                    problem: "The problem is the need for a platform to effectively showcase the advertisment agancy's services and attract potential clients.",
                    solution: "The solution is to create a visually appealing and user-friendly website that highlights the agancy's advertisment services. The website will provide essential information about the agancy and make it easy for visitors to get in touch for inquiries or service discussions."
              },

              technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features"
                ],

                type: "frontend",

                role: "Solo",
                duration: " 10 days",
                status: "Completed",
                year: "2023"
            },


            {
                id: 14,
                name: "Faroon academy",
                title: "Educational platform",
                description: "An educational platform that provides courses and learning materials for students",
                githubName: "j",
                demo_url:"u",
                images: ["1.png"],
                
                tech:['html5','css3','javascript','bootstrap','jquery','php','mysql'],

                points: [
                    'User authentication and authorization system',
                    'Course and lectures management system',
                    'Quizzes and assessments to track student progress',
                    'Discussion forums for student interaction',
                    'Admin panel for managing platform content and users',
                    'Teacher dashboard for managing courses and students',
                    'News section to keep students updated with the latest information',
                    'Payment gateway integration for course purchases & payment using codes cards'
                ],

                idea: {
                    overview:"An educational platform that provides courses and learning materials for students. The platform includes features such as user authentication, course management, quizzes, discussion forums, and an admin panel for managing courses and students.",
                    problem: "The problem is the need for an online platform that offers comprehensive educational resources and facilitates student interaction and progress tracking.",
                    solution: "The solution is to develop an educational platform that consolidates various learning resources and tools into a single platform. This platform will allow students to access courses, participate in discussions, take quizzes, and track their progress effectively."
              },

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript and jQuery to add interactivity and dynamic features",
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage application data"
                ],
                type: "fullstack",

                role: "Solo",
                duration: " +1 month",
                status: "Completed",
                year: "2024"
            },

            {
                id: 15,
                name: "Cancer detection app",
                title: "Medical Application",
                description: "A medical application that helps in detecting lung cancer using image processing techniques",
                shortLine:"App developed by the mobile developer using Flutter",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['php','python','flask','mysql'],


                points: [
                    'Image processing techniques for lung cancer detection',
                    'User-friendly interface for easy navigation',
                    'Secure storage of medical data',
                    'Integration with machine learning model for accurate detection',
                    'RESTful API to facilitate communication between the application and the machine learning model',
                    'Deployment of the machine learning model on Pythonanywhere to make it accessible via an API'
                ],

                idea: {
                    overview:"A medical application that utilizes image processing techniques to assist in the detection of lung cancer. The application provides a user-friendly interface for healthcare professionals to analyze medical images and identify potential signs of lung cancer.",
                    problem: "The problem is the need for an efficient and accurate method for detecting lung cancer, which can be challenging using traditional diagnostic methods.",
                    solution: "The solution is to develop a medical application that leverages advanced image processing techniques to analyze medical images and identify potential signs of lung cancer. This application will aid healthcare professionals in making more informed diagnoses and improving patient outcomes."
              },

                technologies: [
                    "PHP to handle server-side logic and database interactions",
                    "MySQL to store and manage medical data",
                    "RESTful API to facilitate communication between the application and the machine learning model",
                    "Pythonanywhere to deploy the machine learning model and make it accessible via an API"
                ],

                type: "backend",

                role: "Team",
                duration: " 12 days",
                status: "Completed",
                year: "2024"
            },

            {
                id: 16,
                name: "Hagzkora app",
                title: "Sports booking application",
                description: "An app for booking sports facilities that allows users to book sports fields.",
                shortLine:"App developed by the mobile developer using Flutter",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['php','laravel','mysql'],

                points: [
                    'User authentication and authorization system',
                    'Facility browsing and searching system',
                    'Booking management system',
                    'Payment gateway integration for booking payments',
                    'Admin panel for managing facilities and bookings',
                    'User dashboard for managing bookings and profile',
                    'Notification system for booking confirmations and reminders',
                    'Review and rating system for facilities',
                    'Reservation cancellation and refund system',
                    'SMS gateway integration for sending booking notifications via SMS',
                    'OTP verification system for secure user authentication during the booking process'
                ],

                idea: {
                    overview:"A sports booking application that allows users to book sports facilities such as fields and courts. The application provides features for browsing facilities, managing bookings, and processing payments.",
                    problem: "The problem is the need for a convenient and efficient way for users to book sports facilities, which can be challenging using traditional methods.",
                    solution: "The solution is to develop a sports booking application that provides a user-friendly interface for browsing and booking sports facilities. The application will streamline the booking process and provide essential features such as payment processing and booking management."
              },

                technologies: [
                    "PHP and Laravel to handle server-side logic and database interactions",
                    "MySQL to store and manage application data",
                    "Payment gateway to facilitate secure online payments for bookings",
                    "SMS gateway to send booking notifications via SMS",
                    'OTP verification system to ensure secure user authentication during the booking process',
                    'Websocket to enable real-time updates for booking status and availability',
                    'RESTful API to facilitate communication between the application and external services'
                ],
                type: "backend",
                role: "Team",
                duration: "1 month",
                status: "Completed",
                year: "2025"
            },

            {
                id: 17,
                name: "Tic-Tac-Toe game",
                title: "Tic-Tac-Toe Game",
                description: "A simple Tic-Tac-Toe game that allows two players to play against each other",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','sass'],

                points: [
                    'From scratch design and development',
                    'Two-player mode for local gameplay',
                    'Responsive design for optimal viewing on various devices',
                    'Simple and intuitive user interface'
                ],

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3, Bootstrap, and Sass to style the web pages and make them responsive",
                    "JavaScript to add interactivity and game logic"
                ],

                type: "training",
                role: "Solo",
                duration: "2 days",
                status: "Completed",
                year: "2022"
            },

            {
                id: 18,
                name: "Calculator app",
                title: "Calculator",
                description: "A simple calculator app that allows users to perform basic arithmetic operations",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','sass'],
                points: [
                    'From scratch design and development',
                    'Basic arithmetic operations: addition, subtraction, multiplication, and division',
                    'Responsive design for optimal viewing on various devices',
                    'Simple and intuitive user interface'
                ],

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3, Bootstrap, and Sass to style the web pages and make them responsive",
                    "JavaScript to add interactivity and calculator logic"
                ],
                type: "training",
                role: "Solo",
                duration: "1 day",
                status: "Completed",
                year: "2022"
            },

            {
                id: 19,
                name: "Portfolio v3",
                title: "Last portfolio version",
                description: "My last personal portfolio website to showcase my projects and skills",
                githubName: "",
                demo_url:"",
                images: ["1.png"],
                tech:['html5','css3','javascript','bootstrap','vuejs','vitejs'],
                points: [
                    'From scratch design and development',
                    'Showcases my projects and skills',
                    'Includes sections for about me, projects, skills, and contact information',
                    'Responsive design for optimal viewing on various devices',
                    'Built with Vue3 and Vitejs for improved performance and development experience',
                    'Pinia for state management to handle application state efficiently',
                    'Vue Router for seamless navigation between different sections of the portfolio'
                ],

                technologies: [
                    "Html5 to structure the web pages",
                    "Css3 and Bootstrap to style the web pages and make them responsive",
                    "JavaScript to add interactivity and dynamic features",
                    "Vue3 to build the user interface and manage application state",
                    "Vitejs to bundle and optimize the application for performance"
                ],
                type: "frontend",
                role: "Solo",
                duration: "1 week",
                status: "Completed",
                year: "2025"
            }

];

export const useProjectsStore = defineStore("projects", {
    state: () => ({

        projects: projectsData.map(createProject),
        activeFilter: "all"

    }),

    getters: {
    three: (state) => state.projects.slice(0, 6),
    all: (state) => state.projects,
    byId: (state) => (id) => {
        return state.projects.find(project => project.id === id);
    },
    filteredProjects(state) {
      if (state.activeFilter === "all") {
        return state.projects;
      }
      return state.projects.filter(
        project => project.type === state.activeFilter
      );
    },
  },

   actions: {
    setFilter(filter) {
      this.activeFilter = filter;
    },
  }
})