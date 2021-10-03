import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Foot = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	bottom: 0;
	position: fixed;
	width: 100%;
	height: 3rem;
	background: linear-gradient(#000, #fff);

	div {
		margin-top: 1rem;
	}
`;

const FootLink = styled(Link)`
	color: #000000;
	text-decoration: none;
	&:hover {
		transform: scale(1.5);
	}
`;

export const Footer: React.FC = () => {
	return (
		<Foot>
			{' '}
			<div>
				© 2021 <FootLink to="/">Louis Coleman</FootLink>
			</div>
		</Foot>
	);
};
