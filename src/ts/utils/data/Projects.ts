import { ProjectType } from '../../types/ProjectType';

const projects: ProjectType[] = [
    {
        id: 1,
        name: 'JustDoIt',
        description: 'An todo list application with a focus on simplicity and ease of use. The application is built with React and Typescript.',
        photo: 'justdoit.svg',
        url: 'https://todo.martvanweeghel.nl/',
        isVisible: true,
    },
    {
        id: 2,
        name: 'www.martvanweeghel.nl',
        description: 'This website is a personal website of Mart van Weeghel. It is built with React and Typescript.',
        photo: 'https://martvanweeghel.nl/favicon.ico',
        url: 'https://martvanweeghel.nl/',
        isVisible: true,
    },
    {
        id: 3,
        name: 'NarrowCasting',
        description: 'A NarrowCasting system made in Laravel, it shows the current weather in a city, or the current train times on a station.',
        photo: 'https://www.landstedembo.nl/images/mbo/logo.png',
        url: 'https://narrow.landstede.dev/',
        isVisible: false,
    },
    {
        id: 4,
        name: 'Minecraft Server',
        description: 'A Minecraft server website made in React and Typescript, it is a simple server made for a friend of mine.',
        photo: 'minecraft.png',
        url: 'https://minecraft.martvanweeghel.nl/',
        isVisible: true,
    }
];

export default projects;