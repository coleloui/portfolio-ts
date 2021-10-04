import styled from 'styled-components';
import Louis from './pics/Louis.jpg';
import Me from './pics/me.jpg';

const Wrapper = styled.div`
	background: #000;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-flow: row wrap;
`;

const Container = styled.div`
	background: #000;
	padding-top: 10rem;
	display: flex;
	flex-direction: column;
	flex: 0 0 45%;
`;

const Title = styled.h1`
	color: var(--white);
	font-weight: 400;
	font-size: 350%;
	padding: 2.5rem 3.5rem 0;
`;

const Portrait = styled.img`
	margin: 0 0 0 3rem;
	width: 400px;
	height: auto;
	border-radius: 20%;
	align-self: center;
`;

const SmallerTitle = styled.h3`
	color: var(--white);
	font-weight: 400;
	font-size: 275%;
	padding-left: 3.5rem;
`;

const BioContainer = styled(Container)`
	padding-top: 10rem;
	flex: 0 0 50%;
`;

const Biog = styled(Title)`
	font-size: 150%;
	text-align: center;
	padding-right: -5rem;
`;

const LargerPortrait = styled(Portrait)`
	padding-top: 3rem;
	height: 500px;
	width: auto;
	border-radius: 20%;
`;

export const TheTitle: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<Portrait src={Me} alt="Louis Coleman" />
				<Title>Welcome!</Title>
				<SmallerTitle>I'm Louis, a Software Developer</SmallerTitle>
			</Container>
			<BioContainer>
				<Biog>
					I am a passionate Software Engineer living in Seattle,
					Washington. I have always had a huge fascination with
					computers. This fascination became a love during my time as
					a student in University of Washington Full Stack Coding
					Bootcamp, which i graduated from in May of 2020. Since
					graduating I have worked hard as a TA of the same class from
					which I graduated, improving my skills and knowledge while
					additionally broading my horizons through both my own
					learning and the developing curriculum.
				</Biog>
				<LargerPortrait src={Louis} alt="Louis Bandit and Niko" />
			</BioContainer>
		</Wrapper>
	);
};
