import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Storage Management App',
        description: "I've designed a web storage which can identify each users automatically.The purpose of the most storage is just to provide some way to store data and access that one.So most developers are not care about their automaitc action.But if we use AI with the storate, it would be more comffortable for everyone.This project provide a lot of sensible ways to store and access data and they are look like a human.",
        tools: ['Express', 'MongoDB', 'AWS S3', 'EC2', 'PM2', 'Node JS'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Website',
        description: 'My team have built a perfect website by implementing AI. The ultimat goal of this project is to provide very friendly service for eveyone even some people who have wide range of disiblities.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: '3D Shopping Site',
        description: "My team have built perfect website The main purpose is to provid sensible ways to buy something in their mind by showing 3D Object. The main tech stack was three Js and most of my work was to make 3D models with 3D Max. ",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar","3D Max", "Three JS"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },