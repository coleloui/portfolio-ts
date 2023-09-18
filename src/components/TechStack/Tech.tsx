import styled from 'styled-components';
import { TechSections } from './TechSections';

export const Tech: React.FC = () => {
	return (
		<TechStack>
			<TechSections />
		</TechStack>
	);
};

const TechStack = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: column;
	@media (max-width: 992px) {
		flex: 0 0 100%;
	}
`;
