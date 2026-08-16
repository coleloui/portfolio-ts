import styled from 'styled-components';
import { ProjPage } from '../components/projects/ProjPage';
import { Aside } from '../components/aside';
import { Stack } from '../components/TechStack/Stack';

interface IMainInfo {
	mainInfo: string;
}

export function TheBody({ mainInfo }: IMainInfo) {
	return (
		<Wrapper>
			<Aside />
			{mainInfo === 'projects' && <ProjPage />}
			{mainInfo === 'stack' && <Stack />}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-flow: row;
	@media (max-width: 1249px) {
		flex-wrap: wrap;
	}
`;
