import styled from 'styled-components';
import EmailIcon from './social-icons/email.png';
import GithubIcon from './social-icons/github.png';
import LinkedIcon from './social-icons/linkedin.png';

export const Social: React.FC = () => {
	return (
		<SocWrapper>
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
		</SocWrapper>
	);
};

const SocWrapper = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: column;
	flex: 0 0 25%;
	@media (max-width: 992px) {
		flex: 0 0 100%;
		flex-direction: row;
		flex-wrap: wrap;
		h1 {
			flex: 0 0 100%;
		}
	}
`;

const Title = styled.h1`
	color: var(--primary);
	text-align: center;
	margin-bottom: 3rem;
	text-transform: capitalize;
	font-size: 250%;
	@media (max-width: 768px) {
		text-align: center;
		margin: 0rem 0rem 1.5rem;
	}
`;

const Links = styled.a`
	display: block;
	align-self: center;
	margin: 1rem 0 4rem 0;
`;

const SocIcon = styled.img`
	width: 75px;
	height: auto;
	margin: 0 1rem;
	@media (min-width: 992px) {
		margin: 0rem;
		&:hover {
			transform: scale(1.5);
		}
	}
`;
