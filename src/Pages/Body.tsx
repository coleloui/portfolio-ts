import styled from 'styled-components';
import { ProjPage } from '../components/projects/ProjPage';
import { Aside } from '../components/aside';

export function TheBody() {
	return (
		<Outer id="projects">
			<Wrapper>
				<Aside />
				<ProjPage />
			</Wrapper>
		</Outer>
	);
}

const Outer = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 1.5rem;
	flex: 1;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1400px;
	display: flex;
	flex-flow: row;
	gap: 2rem;
	@media (max-width: 1249px) {
		flex-wrap: wrap;
	}
`;
