import EmailIcon from './social-icons/email.png';
import GithubIcon from './social-icons/github.png';
import LinkedIcon from './social-icons/linkedin.png';
import { Wrapper } from './Styles/Wrapper';
import { Title, MinorTitle } from './Styles/Title';
import { TechStack, Social } from './Styles/Containers';
import { SocIcon } from './Styles/Image';
import { List, ListItm } from './Styles/List';
import { Links } from './Styles/Link';

export const Stack: React.FC = () => {
	return (
		<Wrapper>
			<TechStack>
				<Title>Tech Stack!</Title>
				<MinorTitle>Domain names and Hosting</MinorTitle>
				<List>
					<ListItm>Namecheap - for domain name registration</ListItm>
					<ListItm>
						Netlify - easy deploment of application when more than
						just HTML and using Serverless Functions.
					</ListItm>
					<ListItm>
						Heroku - easy deploment of application when more than
						just HTML.
					</ListItm>
				</List>
				<MinorTitle>CDN</MinorTitle>
				<List>
					<ListItm>
						Cloudflare - free tier that is really easy to use.
					</ListItm>
				</List>
				<MinorTitle>Editor and Terminal</MinorTitle>
				<List>
					<ListItm>
						VS Code - my go to text editor, very easy to use with
						well built plug-ins.
					</ListItm>
					<ListItm>
						Windows Terminal - setting this up was such a nice qol,
						working out of multiple tabs changed the terminal game.
					</ListItm>
				</List>
				<MinorTitle>App Framework</MinorTitle>
				<p>
					Multiple options here, but there is always the right tool
					for the job.
				</p>
				<List>
					<ListItm>
						HTML, CSS, JavaScript, jQuery - these are for a basic
						app with minimal functionality.
					</ListItm>
					<ListItm>
						React.js - a go to for single page and static apps.
					</ListItm>
					<ListItm>
						Express.js with Nodejs server for REST API
					</ListItm>
					<ListItm>GraphQL with Apollo server</ListItm>
					<ListItm>Handlebars.js for non-React templating</ListItm>
					<ListItm>
						Material-UI or Styled-Components for my CSS Framework
					</ListItm>
				</List>
			</TechStack>
			<Social>
				<Title>connect with me!</Title>
				<Links
					href="mailto:coleloui18@gmail.com"
					rel="noreferrer"
					target="_blank"
				>
					<SocIcon src={EmailIcon} alt="Email" />
				</Links>
				<Links
					href="https://github.com/coleloui"
					rel="noreferrer"
					target="_blank"
				>
					<SocIcon src={GithubIcon} alt="GithHub" />
				</Links>
				<Links
					href="https://www.linkedin.com/in/louis-coleman/"
					rel="noreferrer"
					target="_blank"
				>
					<SocIcon src={LinkedIcon} alt="LinkedIn" />
				</Links>
			</Social>
		</Wrapper>
	);
};
