import styled from 'styled-components';
import { TechSections } from './TechSections';

export function Tech() {
	return (
		<TechStack>
			<TechSections />
		</TechStack>
	);
}

const TechStack = styled.div`
	display: flex;
	margin-top: 10px;
	margin-bottom: 10px;
	flex: 1;
	@media (max-width: 992px) {
		flex-flow: row wrap;
		flex: 0 0 100%;
	}
`;
