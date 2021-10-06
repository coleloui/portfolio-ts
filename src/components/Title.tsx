import styled from 'styled-components';
// import Louis from './pics/Louis.jpg';
import Me from './pics/me.jpg';
import { TitleWrapper } from './Styles/Wrapper';
import { Container } from './Styles/Containers';
import { MainTitle, SmallerTitle } from './Styles/Title';

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

export const Biog = styled(MainTitle)`
	color: var(--white);
	font-size: 150%;
	padding: 0rem 0.2rem 0.5rem;
	@media (min-width: 992px) {
		padding-right: -5rem;
	}
`;

const BioContainer = styled(Container)`
	@media (min-width: 992px) {
		padding: 0 0 7rem;
		align-self: center;
		flex: 0 0 50%;
	}
`;

export const TheTitle: React.FC = () => {
	return (
		<TitleWrapper>
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
		</TitleWrapper>
	);
};
