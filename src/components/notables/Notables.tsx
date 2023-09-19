import styled from 'styled-components';
import { NotableList } from './NotableList';
import { List } from '../list/List';

export const Notables: React.FC = () => {
	return (
		<MainDiv>
			<MinorTitle>Notable Broadcasts</MinorTitle>
			<ListSet>
				{NotableList.map((broadcast, i) => (
					<List key={i} item={broadcast.item} />
				))}
			</ListSet>
		</MainDiv>
	);
};

const MainDiv = styled.div`
	background: #404040;
	color: var(--white);
	display: flex;
	flex-direction: column;
	width: 600px;
	padding: 20px;
	@media (max-width: 768px) {
		margin-left: 10px;
	}
`;

const MinorTitle = styled.h1`
	color: var(--primary);
	font-weight: 200;
	padding: 0px;
`;

const ListSet = styled.ul`
	margin-bottom: 3rem;
`;
