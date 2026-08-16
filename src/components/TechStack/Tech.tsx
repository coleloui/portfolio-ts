import styled from 'styled-components';
import { TechSections } from './TechSections';
import { Notables } from '../notables/Notables';

export function Tech() {
	return (
		<TechStack>
			<TechSections />
			<Notables />
		</TechStack>
	);
}

const TechStack = styled.div`
	display: flex;
	margin-top: 10px;
	margin-bottom: 10px;
	@media (max-width: 992px) {
		flex-flow: row wrap;
		flex: 0 0 100%;
	}
`;
