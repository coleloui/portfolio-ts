import styled from 'styled-components';
import EmailIcon from './social-icons/email.png';
import GithubIcon from './social-icons/github.png';
import LinkedIcon from './social-icons/linkedin.png';

export const Social: React.FC = () => {
	return (
		<SocWrapper>
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
	margin-left: 100px;
	@media (max-width: 992px) {
		flex: 0 0 100%;
		flex-direction: row;
		flex-wrap: wrap;
		h1 {
			flex: 0 0 100%;
		}
	}
`;

const Links = styled.a`
	display: block;
	align-self: center;
	margin: 1rem 0 4rem 0;
`;

const SocIcon = styled.img`
	width: 50px;
	height: auto;
	@media (min-width: 992px) {
		margin: 0rem;
		&:hover {
			transform: scale(1.5);
		}
	}
`;
