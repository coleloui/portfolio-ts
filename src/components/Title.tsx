import styled from 'styled-components';
// import Louis from './pics/Louis.jpg';
import Me from './pics/me.jpg';

const Wrapper = styled.div`
	background: #404040;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-flow: row wrap;
`;

const Container = styled.div`
	padding-top: 15rem;
	display: flex;
	flex-direction: column;
	flex: 0 0 45%;
`;

const Title = styled.h1`
	color: var(--primary);
	font-weight: 400;
	font-size: 350%;
	padding-left: 5.5rem;
`;

const Portrait = styled.img`
	padding: 0 4.5rem 0;
	width: 500px;
	height: auto;
`;

const SmallerTitle = styled.h3`
	color: var(--white);
	font-weight: 200;
	font-size: 200%;
	padding-left: 5rem;
`;

const BioContainer = styled(Container)`
	padding: 0 0 7rem;
	align-self: center;
	flex: 0 0 50%;
`;

const Biog = styled(Title)`
	color: var(--white);
	font-size: 150%;
	/* text-align: center; */
	padding-right: -5rem;
`;

// const LargerPortrait = styled(Portrait)`
// 	padding-top: 3rem;
// 	height: 500px;
// 	width: auto;
// 	border-radius: 20%;
// `;

export const TheTitle: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<Portrait src={Me} alt="Louis Coleman" />
				<Title>Louis Coleman</Title>
				<SmallerTitle>Software Developer</SmallerTitle>
			</Container>
			<BioContainer>
				<Biog>
					Passionate Software Engineer living in Seattle, Washington.
					I have always had a huge fascination with computers which
					became a love during my time as a student in University of
					Washington Full Stack Coding Bootcamp. <br /> <br />
					Since graduating I have worked hard as a TA of the same
					class from which I graduated, improving my skills and
					knowledge while additionally broading my horizons through
					both my own learning and the developing curriculum.
				</Biog>
			</BioContainer>
		</Wrapper>
	);
};
