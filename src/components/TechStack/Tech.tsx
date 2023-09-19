import styled from 'styled-components';
import { TechSections } from './TechSections';
import { Notables } from '../notables/Notables';

export const Tech: React.FC = () => {
	return (
		<TechStack>
			<TechSections />
			<Notables />
		</TechStack>
	);
};

const TechStack = styled.div`
	display: flex;
	@media (max-width: 992px) {
		flex-flow: row wrap;
		flex: 0 0 100%;
	}
`;
