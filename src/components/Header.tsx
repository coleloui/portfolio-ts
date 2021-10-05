import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const NavLink = styled(Link)`
	display: flex;
	color: #000000;
	text-decoration: none;
	align-self: center;
	margin: 0rem 1.5rem;
	&:hover {
		transform: scale(1.5);
	}
`;

export const Header: React.FC = () => {
	return (
		<Nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			<NavLink to="/stack">Stack/Contact</NavLink>
		</Nav>
	);
};
