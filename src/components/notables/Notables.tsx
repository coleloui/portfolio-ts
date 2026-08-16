import styled from 'styled-components';
import { NotableList } from './NotableList';
import { List } from '../list/List';

export const Notables: React.FC = () => {
	return (
		<MainDiv>
			<Header>
				<Title>Notable Broadcasts</Title>
				<Subtitle>
					Production broadcasts powered by Icarus at Waveform Entertainment
				</Subtitle>
			</Header>
			<Grid>
				{NotableList.map((broadcast, i) => (
					<List key={i} item={broadcast.item} />
				))}
			</Grid>
		</MainDiv>
	);
};

const MainDiv = styled.div`
	flex: 1;
	min-width: 0;
	padding: 16px 0 16px 16px;
`;

const Header = styled.div`
	margin-bottom: 1.25rem;
`;

const Title = styled.h2`
	font-family: var(--sans);
	font-weight: 700;
	font-size: 1.2rem;
	color: var(--text-primary);
	margin-bottom: 0.35rem;
`;

const Subtitle = styled.p`
	font-family: var(--mono);
	font-size: 0.72rem;
	color: var(--text-muted);
`;

const Grid = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 8px;
	list-style: none;
	padding: 0;
`;
