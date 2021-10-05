import styled from 'styled-components';
import EmailIcon from './social-icons/email.png';
import GithubIcon from './social-icons/github.png';
import LinkedIcon from './social-icons/linkedin.png';

const Wrapper = styled.div`
	background: var(--secondary);
	height: 90vh;
	width: 100%;
	padding-top: 5rem;
	display: flex;
	flex-flow: row wrap;
	h3 {
		color: var(--primary);
		font-weight: 800;
		text-decoration: underline;
		margin-left: 10rem;
	}
	a {
		display: block;
		align-self: center;
		margin: 1rem 0 4rem 0;
	}
	li {
		color: var(--white);
	}
	p {
		color: var(--white);
		margin-left: 10rem;
	}
	ul {
		margin-bottom: 3rem;
		margin-left: 13rem;
	}
`;

const Title = styled.h1`
	color: var(--primary);
	text-align: center;
	margin-bottom: 3rem;
	text-transform: capitalize;
`;

const Social = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: column;
	flex: 0 0 25%;
`;

const TechStack = styled.div`
	justify-content: center;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	flex: 0 0 65%;
`;

const SocIcon = styled.img`
	width: 75px;
	height: auto;
	&:hover {
		transform: scale(1.5);
	}
`;

export const Stack: React.FC = () => {
	return (
		<Wrapper>
			<TechStack>
				<Title>Tech Stack!</Title>
				<h3>Domain names and Hosting</h3>
				<ul>
					<li>Namecheap - for domain name registration</li>
					<li>
						Netlify - easy deploment of application when more than
						just HTML and using Serverless Functions.
					</li>
					<li>
						Heroku - easy deploment of application when more than
						just HTML.
					</li>
				</ul>
				<h3>CDN</h3>
				<ul>
					<li>Cloudflare - free tier that is really easy to use.</li>
				</ul>
				<h3>Editor and Terminal</h3>
				<ul>
					<li>
						VS Code - my go to text editor, very easy to use with
						well built plug-ins.
					</li>
					<li>
						Windows Terminal - setting this up was such a nice qol,
						working out of multiple tabs changed the terminal game.
					</li>
				</ul>
				<h3>App Framework</h3>
				<p>
					Multiple options here, but there is always the right tool
					for the job.
				</p>
				<ul>
					<li>
						HTML, CSS, JavaScript, jQuery - these are for a basic
						app with minimal functionality.
					</li>
					<li>React.js - a go to for single page and static apps.</li>
					<li>Express.js with Nodejs server for REST API</li>
					<li>GraphQL with Apollo server</li>
					<li>Handlebars.js for non-React templating</li>
					<li>
						Material-UI or Styled-Components for my CSS Framework
					</li>
				</ul>
			</TechStack>
			<Social>
				<Title>connect with me!</Title>
				<a
					href="mailto:coleloui18@gmail.com"
					rel="noreferrer"
					target="_blank"
				>
					<SocIcon src={EmailIcon} alt="Email" />
				</a>
				<a
					href="https://github.com/coleloui"
					rel="noreferrer"
					target="_blank"
				>
					<SocIcon src={GithubIcon} alt="GithHub" />
				</a>
				<a
					href="https://www.linkedin.com/in/louis-coleman/"
					rel="noreferrer"
					target="_blank"
				>
					<SocIcon src={LinkedIcon} alt="LinkedIn" />
				</a>
			</Social>
		</Wrapper>
	);
};
