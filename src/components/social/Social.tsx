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
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Links = styled.a`
	display: block;
	align-self: center;
	margin: 15px 0;
	@media (min-width: 992px) {
		&:hover {
			cursor: pointer;
		}
	}
`;

const SocIcon = styled.img`
	width: 50px;
	height: auto;
`;
