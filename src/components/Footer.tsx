import styled from 'styled-components';

export const Footer: React.FC = () => {
	return <Foot>© 2021 Louis Coleman</Foot>;
};

const Foot = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 2rem;
	color: #fff;
	text-align: center;
`;
