import javascript from '../assets/javascript.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import aws from '../assets/aws.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
import redux from '../assets/redux.png';
import github from '../assets/github.png';
import python from '../assets/python.png';
import swift from '../assets/swift.png';
import tailwind from '../assets/tailwind.png';
import phaser from '../assets/phaser.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import material from '../assets/material.png';
import hexle from '../assets/hexle.png';
import pizzashop from '../assets/pizzashop.gif';
import gimme from '../assets/gimme.gif';
import experimental from '../assets/experimental.png';
import linkedin from '../assets/linkedin.png';


const contentObj = {
    aboutMe: {
        body: `🤙 Aloha! \n 
        📍 My name is Kenny and I am a full stack web developer located in Washington, D.C. \n
        🎓 I was born and raised in Hawaii where I graduated with a Bachelor's degree in Nursing. \n 
        ❓ A couple years later, I decided to switch gears and scratch my itch for learning more about technology. \n 
        🌐 I attended DevLeague where I learned about web development and what it means to be a developer. \n
        🛠️ Fast forward 5 years later, my day-to-day consists of creating solutions to problems involving modernization, scaling, and accessibilty. \n
        🔥 My interests outside of tech include photography, gaming, exploring the outdoors, and weightlifting`
    },
    skills: {
        tech: [
            'Javascript',
            'Typescript',
            'React',
            'Angular',
            'Express',
            'Node',
            'HTML/CSS',
            'Version Control: Github',
            'Relational Databases: SQL',
            'Non-relational Databases: MongoDB',
            'Oracle/Peoplesoft',
            'Redux',
            'AWS - EC2, S3',
            'Material UI',
        ],
        learning: [
            'Python',
            'Vue',
            'Swift',
            'Tailwind',
            'Phaser',
            'React Native'
        ],
        icons: [
            {
                label: 'javascript',
                path: javascript
            },
            {
                label: 'typescript',
                path: typescript
            },
            {
                label: 'react',
                path: react
            },
            {
                label: 'angular',
                path: angular
            },
            {
                label: 'node',
                path: node
            },
            {
                label: 'html',
                path: html
            },
            {
                label: 'css',
                path: css
            },
            {
                label: 'github',
                path: github
            },
            {
                label: 'mongo',
                path: mongo
            },
            {
                label: 'redux',
                path: redux
            },
            {
                label: 'aws',
                path: aws
            },
            {
                label: 'material',
                path: material
            },
            {
                label: 'python',
                path: python
            },
            {
                label: 'swift',
                path: swift
            },
            {
                label: 'tailwind',
                path: tailwind
            },
            {
                label: 'phaser',
                path: phaser
            },
        ]
    },
    projects: {
        featured: [
            {
                id: 'hexle',
                name: 'Hexle',
                links: [{ active: true, link: 'https://www.supahkenneh.com/hexle' }, { active: false, link: 'https://github.com/supahkenneh/hexle' }],
                image: hexle,
                text: `Inspired by the game: Wordle. Players guess the hexcode for the color shown to them. App is front-end only where state is managed in the app and local storage.`,
                stack: ['React', 'Javascript']
            },
            {
                id: 'pizza',
                name: 'Pizza Shop',
                links: [{ active: false, link: 'https://github.com/supahkenneh/pizza-game' }],
                image: pizzashop,
                text: 'My first attempt at game development. Created to express my love for pizza. This project was challenging because game development introduced new challenges to me but was a fun experience overall.',
                stack: ['Phaser', 'Javascript', 'HTML']
            },
            {
                id: 'gimme',
                name: 'Gimme Gimme',
                links: [{ active: true, link: 'https://gimmemoar.herokuapp.com/' }, { active: false, link: 'https://github.com/supahkenneh/gimme-gimme' }],
                image: gimme,
                text: 'Node Knockout 2018 Hackathon entry. Inspired by a popular Hawaiian party game. Players are given a prompt and are given a time limit to take and submit a photo using their mobile phones to the server. Using IBM\'s photo recognition API, the photo is analyzed and a winner is declared when the photo submitted matches the prompt. Our project won the \'Most Popular\' category.',
                stack: ['Javascript', 'Socket.io', 'IBM Watson', 'AWS S3 Bucket', 'Node.js', 'Express.js', 'Docker', 'Heroku'],
            },
            {
                id: 'theme',
                name: 'Experimental Theme',
                links: [{ active: true, link: 'https://marketplace.visualstudio.com/items?itemName=supahkenneh.experimental-theme' }, { active: false, link: 'https://github.com/supahkenneh/experimental-theme' }],
                image: experimental,
                text: 'I wanted to create a Visual Studio Code theme with colors that I liked. Experimental Theme is a dark blue theme that is published and available on the Visual Studio Marketplace.',
                stack: ['VS Code', 'JSON']
            }
        ],
    },
    contact: {
        contacts: [
            {
                label: 'Phone',
                id: 'phone',
                ref: 'tel:+8084699635'
            },
            {
                label: 'Email',
                id: 'email',
                ref: 'mailto:chunghlken@gmail.com'
            }
        ],
        links: [
            {
                label: 'Github',
                id: 'github',
                link: 'https://github.com/supahkenneh',
                icon: github
            },
            {
                label: 'LinkedIn',
                id: 'linkedin',
                link: 'https://www.linkedin.com/in/chung-kenny/',
                icon: linkedin
            },
        ]
    }
};

export default contentObj;