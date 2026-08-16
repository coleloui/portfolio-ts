import styled from 'styled-components';

interface ListProps {
	item: string;
}

export function List({ item }: ListProps) {
	return <ListItem>{item}</ListItem>;
}

export const ListItem = styled.li`
	color: var(--white);
`;
