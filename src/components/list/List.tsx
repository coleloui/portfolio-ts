import styled from 'styled-components';

interface ListProps {
	item: string;
}

export function List({ item }: ListProps) {
	return <ListItem>{item}</ListItem>;
}

export const ListItem = styled.li`
	color: var(--text-secondary);
	font-family: var(--mono);
	font-size: 0.82rem;
	background: var(--bg-card);
	border: 1px solid var(--border);
	border-radius: 6px;
	padding: 8px 12px;
	list-style: none;
	transition: border-color 0.15s, color 0.15s;

	&:hover {
		border-color: var(--border-hover);
		color: var(--text-primary);
	}
`;
