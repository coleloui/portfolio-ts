import styled from 'styled-components';
import { TechSections } from './TechSections';

export const Tech: React.FC = () => {
	return (
		<TechStack>
			<Title>Tech Stack!</Title>
			<TechSections />
		</TechStack>
	);
};

const TechStack = styled.div`
	justify-content: center;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	flex: 0 0 65%;
	@media (max-width: 992px) {
		flex: 0 0 100%;
	}
`;

const Title = styled.h1`
	color: var(--primary);
	text-align: center;
	margin-bottom: 3rem;
	text-transform: capitalize;
	font-size: 250%;
	@media (max-width: 768px) {
		text-align: center;
		margin: 0rem 0rem 1.5rem;
	}
`;
