import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Resume from './resume/LouisColemanResume.pdf';

export const Header: React.FC = () => {
	return (
		<Nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			<NavLink to="/stack">Stack/Contact</NavLink>
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
	position: fixed;
	width: 100%;
	height: 3rem;
	background: #fff;
`;

const Download = styled.a`
	display: flex;
	color: #000000;
	text-decoration: none;
	align-self: center;
	margin: 0rem 1.5rem;
	@media (min-width: 992px) {
		&:hover {
			transform: scale(1.5);
		}
	}
`;

const NavLink = styled(Link)`
	display: flex;
	color: #000000;
	text-decoration: none;
	align-self: center;
	margin: 0rem 1.5rem;
	@media (min-width: 992px) {
		&:hover {
			transform: scale(1.5);
		}
	}
`;
