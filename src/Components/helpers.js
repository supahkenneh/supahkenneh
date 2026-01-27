import github from '../assets/github.png';
import auxbuddy from '../assets/auxbuddy.gif';
import hexle from '../assets/hexle.png';
import pizzashop from '../assets/pizzashop.gif';
import gimme from '../assets/gimme.gif';
import linkedin from '../assets/linkedin.png';
import logo from '../assets/logo-1.png';

// Obj format
// {
//     context: 'context-name',
//         layout: '1 or 2',
//             body: [
//                 {
//                     descr: 'Description text',
//                     listItems: [
//                         'can be any type'
//                     ]
//         ]
// }


export const homeObj = {
    home: {
        greeting: `hello! my name is`,
        header: `Kenny Chung`,
        subheader: [`💻 Full Stack Web Developer`, `🎧 DJ`, `📷 Photographer/Videographer`],
        descr: `I love creating applications that solve real world problems and provide engaging user experiences. When I'm not coding, you can find me behind the decks or capturing moments through my lens. Let's build something amazing together!`,
    },
    aboutMe: {
        body: [
            { item: 1, text: `Full Stack Web Developer`, key: 'dev' },
            { item: 2, text: `DJ`, key: 'dj' },
            { item: 3, text: `Photographer/Videographer`, key: 'photo' }
        ]
    }
}

export const skillsObj = {
    context: 'devskills',
    layout: ['1', '2'],
    body: [
        {
            descr: 'A few of the tools I have worked with:',
            listItems: [
                'Javascript',
                'Typescript',
                'React',
                'Angular',
                'Express',
                'Node',
                'HTML/CSS',
                'Github',
                'SQL',
                'MongoDB',
                'Oracle/Peoplesoft',
                'Redux',
                'AWS - EC2, S3',
                'Material UI',
            ]
        },
        {
            descr: 'Currently working on:',
            listItems: [
                'Python',
                'Homelabbing'
            ]
        }
    ]
};

export const projectsObj = {
    context: 'devprojects',
    layout: ['2', '2'],
    body: [
        {
            descr: 'A few of my personal projects:',
            listItems: [
                {
                    name: 'Lucky Number',
                    descr: 'A web app I built for the Chinese Chamber of Commerce Annual Golf Tournament that allowed participants to track their raffle tickets and prizes',
                    descr2: 'React, Javascript, Firebase, Firestore'
                },
                {
                    name: 'Aux Buddy',
                    descr: 'A Spotify playlist generator based on user mood and environment.',
                    descr2: 'React, Javascript, Node.js, Spotify API, Tailwind CSS, Heroku, Express.js'
                },
                {
                    name: 'Hexle',
                    descr: 'A color guessing game inspired by Wordle.',
                    descr2: 'React, Javascript'
                },
                {
                    name: 'Pizza Shop',
                    descr: 'A fun pizza-themed game developed using Phaser framework.',
                    descr2: 'Phaser, Javascript, HTML'
                },
                {
                    name: 'Gimme Gimme',
                    descr: 'A photo submission game using IBM Watson for photo recognition.',
                    descr2: 'Javascript, Socket.io, IBM Watson, AWS S3 Bucket, Node.js, Express.js, Docker, Heroku'
                },
            ]
        }
    ],
    featured: [
        {
            id: 'auxbuddy',
            name: 'Aux Buddy',
            links: [{ active: true, link: 'https://aux-buddy.herokuapp.com/' }, { active: false, link: 'https://github.com/supahkenneh/Aux-Buddy' }],
            image: auxbuddy,
            text: `Powered by Spotify API. Once users are logged in through Spotify OAuth, they can quickly create playlists for whatever mood their environment calls for by inputting artist names. Once the playlist has been generated, they can futher fine tune it by adding or removing songs.`,
            stack: ['React', 'Javascript', 'Node.js', 'Spotify API', 'Tailwind CSS', 'Heroku', 'Express.js']
        },
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
        // {
        //     id: 'theme',
        //     name: 'Experimental Theme',
        //     links: [{ active: true, link: 'https://marketplace.visualstudio.com/items?itemName=supahkenneh.experimental-theme' }, { active: false, link: 'https://github.com/supahkenneh/experimental-theme' }],
        //     image: experimental,
        //     text: 'I wanted to create a Visual Studio Code theme with colors that I liked. Experimental Theme is a dark blue theme that is published and available on the Visual Studio Marketplace.',
        //     stack: ['VS Code', 'JSON']
        // }
    ],
};

export const djObj = {
    context: 'dj',
    layout: ['2', '1'],
    body: [
        {
            descr: `I spend a lot of time listening to music and discovering new artists and genres. In 2019, I decided to take my passion for music a step further by learning how to DJ. Since then, I've played at various events and venues, honing my skills and developing my unique style. Below are some of my mixes:`,
            listItems: [
                {
                    descr: 'Mixes coming soon'
                }
            ]
        }
    ]
};

export const photoObj = {
    context: 'photo',
    layout: ['2', '1'],
    body: [
        {
            descr: `Below are some examples of my video work.`,
            listItems: [
                {
                    descr: 'Videos coming soon'
                }
            ]
        }
    ]
};

export const contactObj = {
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
};

export const appLogo = logo;

export const navBarClasses = {
    baseClasses: 'text-base font-mono hover:text-accent hover:underline hover:underline-offset-4 hover:cursor-pointer ease-in duration-200',
    activeClasses: 'text-base font-mono text-accent underline underline-offset-4 hover:cursor-pointer'
};

export const contentClasses = {
    baseClasses: 'font-sans text-2xl leading-10 cursor-pointer hover:text-accent hover:underline-offset-4 ease-in duration-200',
    activeClasses: 'font-sans text-2xl leading-10 cursor-pointer underline underline-offset-4 text-accent'
};
export const textClasses = {
    baseClasses: 'font-sans text-lg bg-content-text hidden',
    activeClasses: 'font-sans text-lg m-2 p-2 rounded bg-content-text block'
};