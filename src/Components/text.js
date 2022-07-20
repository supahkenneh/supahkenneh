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
            'AWS - EC2, S3 Buckets',
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
                link: 'https://www.supahkenneh.com/hexle',
                image: hexle,
                text: `Inspired by the game: Wordle. Players guess the hexcode for the color shown to them. App is front-end only where state is managed in the app and local storage.`,
                stack: ['React', 'Javascript']
            },
            {
                id: 'pizza',
                name: 'Pizza Shop',
                link: '',
                image: '',
                text: '',
                stack: ['Phaser', 'Javascript', 'HTML']
            },
            {
                id: 'gimme',
                name: 'Gimme Gimme',
                link: '',
                image: '',
                text: '',
                stack: ['Javascript', 'Socket.io', 'IBM Watson API', 'AWS S3 Bucket API', 'Node.js', 'Docker', 'Heroku'],
            },
            {
                id: 'theme',
                name: 'Experimental Theme',
                link: '',
                image: '',
                text: '',
                stack: ['VS Code', 'JSON']
            }
        ],
        others: [
            {
                id: 'garden',
                name: 'Garden Guru',
                link: '',
                image: '',
                text: '',
                stack: ['Angular', 'Node.js', 'PostgreSQL', 'AWS EC2']
            },
            {
                id: 'pixel',
                name: 'Pixel Painter',
                link: 'http://pixelpainterkenny123.s3-website-us-west-2.amazonaws.com',
                image: '',
                text: '',
                stack: ['HTML', 'CSS', 'Javascript']
            }
        ]
    }
};

export default contentObj;