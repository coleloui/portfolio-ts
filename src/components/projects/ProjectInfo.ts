import EPIC from './pics/epic-pt.jpg';
import Maple from './pics/MapleValleyNew.png';
import PoGo from './pics/pogo.png';
import PortMat from './pics/portfolio-material.jpg';
import Rocket from './pics/RocketList.png';

const Projects = [
	{
		projName: 'EPIC-PT',
		photo: EPIC,
		biograph: `Epic-PT is an application built for the EPIC Physical Therapy company allowing users ease of visiblity of the company and its locations. The application is built on React with Material-UI. Forms are connected through AWS-SES as well as MongoAtlas. The application is deployed using Netlify and Cloudflare.`
	},
	{
		projName: 'Portfolio-MaterialUI',
		photo: PortMat,
		biograph: `This is a previous iteration of one of my portfolios. It was built on React in JavaScript. It utilized MaterialUI for the css framework and a contact form that is connected to MongoAtlas. The application was deployed using Netlify and Cloudflare.`
	},
	{
		projName: 'RocketList',
		photo: Rocket,
		biograph: `This application is a React website built with inspiration from Craigslist, Yahoo Answers, and Reddit. It allows for different topics and for people to make a post where others can make comments. We also added a feature that allows users to join chat rooms within a specific post where they can discuss the topic at hand in more depth.`
	},
	{
		projName: 'MapleValley',
		photo: Maple,
		biograph: `Built to replace an outdated paper system, this online registration system will be utilized two fold. It will allow the volunteers and parents of campers attending the Girl Scouts Maple Valley Day Camp to register for camp and will facilitate camp planning by allowing registration details to be easily shared to the camp committee.`
	},
	{
		projName: 'PokeGoDex',
		photo: PoGo,
		biograph: `As avid Pokémon Go players, this application was built to provide utility to users to pull from two different API's to compare Pokémon and check their catch availability. You can filter through a list of all Pokémon and grab specific information about them. The stats that you receive are the name, type, generation, and the Pokédex entry. The filtered list allows you to see which Pokémon are available in the mobile game Pokemon GO.`
	}
];

export default Projects;
