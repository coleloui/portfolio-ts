import styled from 'styled-components';

type ListPart = {
	item: string;
};

export const List: React.FC<ListPart> = ({ item }) => {
	return <ListItem>{item}</ListItem>;
};

export const ListItem = styled.li`
	color: var(--white);
`;
