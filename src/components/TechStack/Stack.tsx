import styled from 'styled-components';
import { Social } from '../social/Social';
import { Tech } from './Tech';

export const Stack: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<Tech />
				<Social />
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: block;
	margin-left: auto;
	width: 1600px;
`;

const Container = styled.div`
	background: var(--secondary);
	padding-top: 50px;
	display: flex;
	flex-flow: row wrap;
	margin-right: 40px;
	p {
		color: var(--white);
		margin-left: 10rem;
		@media (max-width: 768px) {
			text-align: center;
			margin: -0.25rem 0rem 0.5rem;
		}
	}
	@media (max-width: 992px) {
		width: 100%;
		height: 100%;
	}
`;
