import styled from 'styled-components';
import EmailIcon from './social-icons/email.png';
import GithubIcon from './social-icons/github.png';
import LinkedIcon from './social-icons/linkedin.png';

const Wrapper = styled.div`
	background: black;
	height: 90vh;
	width: 100%;
	padding-top: 5rem;
	display: flex;
	flex-flow: row wrap;
	h1 {
		color: var(--white);
		text-align: center;
		margin-bottom: 5rem;
		text-transform: capitalize;
	}
	a {
		display: block;
		align-self: center;
		margin: 1rem 0 4rem 0;
	}
`;

const Social = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: column;
	flex: 0 0 25%;
`;

const TechStack = styled.div`
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	flex: 0 0 75%;
`;

const SocIcon = styled.img`
	width: 75px;
	height: auto;
`;

export const Stack: React.FC = () => {
	return (
		<Wrapper>
			<TechStack>
				<h1>Tech Stack!</h1>
			</TechStack>
			<Social>
				<h1>connect with me!</h1>
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
