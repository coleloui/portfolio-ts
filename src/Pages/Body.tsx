import styled from 'styled-components';
import { ProjPage } from '../components/projects/ProjPage';
import { Aside } from '../components/aside';
import { Stack } from '../components/TechStack/Stack';

export type BodyProps = {
	mainInfo: string;
};

export const TheBody: React.FC<BodyProps> = ({ mainInfo }) => {
	return (
		<Wrapper>
			<Aside />
			{mainInfo === 'projects' && <ProjPage />}
			{mainInfo === 'stack' && <Stack />}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
`;
