import styled from 'styled-components';
import { ProjPage } from '../components/projects/ProjPage';
import { Aside } from '../components/aside';
import { Stack } from '../components/TechStack/Stack';
import { Notables } from '../components/notables/Notables';

export type BodyProps = {
	mainInfo: string;
};

export const TheBody: React.FC<BodyProps> = ({ mainInfo }) => {
	return (
		<Outer>
			<Wrapper>
				<Aside />
				{mainInfo === 'projects' && <ProjPage />}
				{mainInfo === 'stack' && <Stack />}
				{mainInfo === 'notables' && <Notables />}
			</Wrapper>
		</Outer>
	);
};

const Outer = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 1.5rem;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	flex-flow: row;
	@media (max-width: 1249px) {
		flex-wrap: wrap;
	}
`;
