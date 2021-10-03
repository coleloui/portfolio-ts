import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	top: 0;
	position: fixed;
	width: 100%;
	height: 5rem;
	background: linear-gradient(#fff, #000);
`;

const NavLink = styled(Link)`
	display: flex;
	color: #000000;
	text-decoration: none;
	margin: 1rem 1.5rem;
	&:hover {
		transform: scale(1.5);
	}
`;

export const Header: React.FC = () => {
	return (
		<Nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			{/* <NavLink to="/contact">Stack/Contact</NavLink> */}
		</Nav>
	);
};
