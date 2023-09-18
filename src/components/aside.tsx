import styled from 'styled-components';
import Me from '../components/pics/me.jpg';

export const Aside: React.FC = () => {
	return (
		<Container>
			<Portrait src={Me} alt="Louis Coleman" />
			<MainTitle>Louis Coleman</MainTitle>
			<SmallerTitle>Full Stack Developer</SmallerTitle>
			<Biog>
				Passionate Full Stack Developer living in Seattle, Washington. I
				have always had a huge fascination with computers which became a
				love during my time as a student in University of Washington
				Full Stack Web Development Coding Bootcamp.
			</Biog>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 35px;
	@media (min-width: 1250px) {
		width: 260px;
		position: fixed;
	}
`;

const MainTitle = styled.h1`
	color: var(--primary);
	font-weight: 400;
	font-size: 150%;
	text-align: center;
	@media (min-width: 1250px) {
		padding-left: 10px;
		text-align: start;
	}
`;

const SmallerTitle = styled.h3`
	color: var(--white);
	font-weight: 200;
	font-size: 125%;
	text-align: center;
	padding-bottom: 1rem;
	@media (min-width: 1250px) {
		padding-left: 10px;
		text-align: start;
	}
`;

const Biog = styled(MainTitle)`
	color: var(--white);
	font-size: 100%;
	@media (min-width: 1250px) {
		width: 260px;
		padding-left: 10px;
		text-align: start;
	}
`;

const Portrait = styled.img`
	width: 300px;
	height: auto;
	align-self: center;
	padding: 0 0 1rem;
	@media (max-width: 767px) {
		display: none;
	}
	@media (min-width: 1250px) {
		padding-left: 10px;
		align-self: normal;
		width: 250px;
		height: auto;
	}
`;
