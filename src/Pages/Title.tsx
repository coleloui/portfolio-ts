import styled from 'styled-components';
import Me from '../components/pics/me.jpg';

export const TheTitle: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<Portrait src={Me} alt="Louis Coleman" />
				<MainTitle>Louis Coleman</MainTitle>
				<SmallerTitle>Software Developer</SmallerTitle>
			</Container>
			<BioContainer>
				<Biog>
					Passionate Software Engineer living in Seattle, Washington.
					I have always had a huge fascination with computers which
					became a love during my time as a student in University of
					Washington Full Stack Coding Bootcamp.
				</Biog>
				<Biog>
					Since graduating I have worked hard as a TA of the same
					class from which I graduated, improving my skills and
					knowledge while additionally broading my horizons through
					both my own learning and the developing curriculum.
				</Biog>
			</BioContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: var(--secondary);
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	height: 100vh;
	@media (max-width: 768px) {
		height: 100%;
		padding: 4.5rem 0rem 3rem;
	}
`;

const Container = styled.div`
	display: flex;
	flex: 0 0 100%;
	flex-direction: column;
	@media (min-width: 992px) {
		padding-top: 15rem;
		display: flex;
		flex-direction: column;
		flex: 0 0 45%;
	}
`;

const BioContainer = styled(Container)`
	@media (min-width: 992px) {
		padding: 0 0 7rem;
		align-self: center;
		flex: 0 0 50%;
	}
`;

const MainTitle = styled.h1`
	color: var(--primary);
	font-weight: 400;
	font-size: 350%;
	text-align: center;
	@media (min-width: 992px) {
		padding-left: 5.5rem;
		text-align: start;
	}
`;

const SmallerTitle = styled.h3`
	color: var(--white);
	font-weight: 200;
	font-size: 200%;
	text-align: center;
	padding-bottom: 1rem;
	@media (min-width: 992px) {
		padding-left: 5rem;
		text-align: start;
	}
`;

const Biog = styled(MainTitle)`
	color: var(--white);
	font-size: 150%;
	padding: 0rem 0.2rem 0.5rem;
	@media (min-width: 992px) {
		padding-right: -5rem;
	}
`;

const Portrait = styled.img`
	width: 300px;
	height: auto;
	align-self: center;
	padding: 0 0 1rem;
	@media (min-width: 992px) {
		padding: 0 4.5rem 0;
		align-self: normal;
		width: 500px;
		height: auto;
	}
`;
