import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Foot = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	bottom: 0;
	position: fixed;
	width: 100%;
	height: 2rem;
	background: #fff;
	div {
		align-self: center;
	}
`;

const FootLink = styled(Link)`
	color: #000000;
	text-decoration: none;
`;
