import styled from 'styled-components';

export const Footer: React.FC = () => {
	return <Foot>© 2021 Louis Coleman</Foot>;
};

const Foot = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	bottom: 0;
	position: fixed;
	width: 100%;
	height: 2rem;
	color: #fff;
	align-self: center;
`;
