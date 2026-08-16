import styled from 'styled-components';
import { TechItems } from './TechItems';
import { List } from '../list/List';

export function TechSections() {
	return (
		<MainDiv>
			{TechItems.map(Tech => (
				<div key={Tech.name}>
					<MinorTitle key={Tech.name}>{Tech.name}</MinorTitle>
					<ListSet>
						{Tech.tech.map(part => (
							<List key={part.item} item={part.item} />
						))}
					</ListSet>
				</div>
			))}
		</MainDiv>
	);
}

const MainDiv = styled.div`
	background: var(--bg-card);
	border: 1px solid var(--border);
	border-radius: 8px;
	color: var(--text-secondary);
	display: flex;
	flex-direction: column;
	margin: auto 0;
	padding: 20px;
	@media (max-width: 768px) {
		margin-left: 10px;
	}
`;

const MinorTitle = styled.h1`
	color: var(--accent);
	font-weight: 400;
	font-size: 1rem;
	font-family: var(--mono);
`;

export const ListSet = styled.ul`
	margin-bottom: 3rem;
`;
