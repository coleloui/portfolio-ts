import styled from 'styled-components';
import Me from '../components/pics/me.jpg';
import { Social } from './social/Social';

export const Aside: React.FC = () => {
	return (
		<Container>
			<Portrait src={Me} alt="Louis Coleman" />
			<MainTitle>Louis Coleman</MainTitle>
			<SmallerTitle>Full Stack Developer</SmallerTitle>
			<Biog>
				with a strong attention to detail who aims to output the highest
				level of work. Driven by dedication, thirst for knowledge, and
				love of the craft. Who believes that excitement, collaboration,
				and creativity provide the best outlet for user products.
			</Biog>
			<Social />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 35px;
	margin-left: 10px;
	@media (min-width: 1250px) {
		width: 350px;
	}
`;

const MainTitle = styled.h1`
	color: var(--primary);
	font-weight: 400;
	font-size: 200%;
	text-align: center;
	@media (min-width: 1250px) {
		padding-left: 10px;
		text-align: start;
	}
`;

const SmallerTitle = styled.h3`
	color: var(--primary);
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
	width: 100%;
	@media (min-width: 1250px) {
		width: 300px;
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
	}
`;
