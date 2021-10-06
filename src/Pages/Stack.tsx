import styled from 'styled-components';
import { Social } from '../components/social/Social';
import { Tech } from '../components/TechStack/Tech';

export const Stack: React.FC = () => {
	return (
		<Wrapper>
			<Tech />
			<Social />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: var(--secondary);
	height: 90vh;
	width: 100%;
	padding-top: 5rem;
	display: flex;
	flex-flow: row wrap;
	p {
		color: var(--white);
		margin-left: 10rem;
		@media (max-width: 768px) {
			text-align: center;
			margin: -0.25rem 0rem 0.5rem;
		}
	}
	@media (max-width: 992px) {
		height: 100%;
	}
`;
