import styled from 'styled-components';
// import Louis from './pics/Louis.jpg';
import Me from './pics/me.jpg';

const Wrapper = styled.div`
	top: 0;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.25),
			rgba(255, 255, 255, 0.25)
		),
		url(${Me});
	width: 100%;
	min-height: 100vh;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-blend-mode: lighten;
	div {
		padding-top: 35rem;
	}
	h1 {
		color: var(--primary);
		font-weight: 400;
		font-size: 350%;
		text-transform: capitalize;
		padding: 2.5rem 5rem 0;
	}
	h3 {
		color: var(--primary);
		font-weight: 400;
		font-size: 275%;
		padding-left: 3.5rem;
	}
`;

export const TheTitle: React.FC = () => {
	return (
		<Wrapper>
			<div>
				<h1>Hey,</h1>
				<h3>
					I'm Louis a Software Developer <br></br> and avid gamer!
				</h3>
			</div>
		</Wrapper>
	);
};
