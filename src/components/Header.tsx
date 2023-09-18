import styled from 'styled-components';
import Resume from './resume/LouisColemanResume.pdf';

export type HeaderProps = {
	setMainInfo: (val: string) => void;
};

export const Header: React.FC<HeaderProps> = ({ setMainInfo }) => {
	return (
		<Nav>
			<NavLink onClick={() => setMainInfo('projects')}>Projects</NavLink>
			<NavLink onClick={() => setMainInfo('stack')}>
				Stack/Contact
			</NavLink>
			<Download download href={Resume}>
				Resume
			</Download>
		</Nav>
	);
};

const Nav = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	top: 0;
	position: sticky;
	width: 100%;
	height: 30px;
	background: #fff;
`;

const Download = styled.a`
	display: flex;
	color: #000000;
	text-decoration: none;
	align-self: center;
	margin: 0rem 1.5rem;
	background: #fff;
	@media (min-width: 992px) {
		&:hover {
			text-decoration: underline;
		}
	}
`;

const NavLink = styled.div`
	display: flex;
	background: #fff;
	color: #000000;
	text-decoration: none;
	align-self: center;
	margin: 0rem 1.5rem;
	@media (min-width: 992px) {
		&:hover {
			text-decoration: underline;
		}
	}
`;
