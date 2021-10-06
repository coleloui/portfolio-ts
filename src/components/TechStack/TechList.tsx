import styled from 'styled-components';

type TechPart = {
	item: string;
};

export const TechList: React.FC<TechPart> = ({ item }) => {
	return <ListItm>{item}</ListItm>;
};

export const ListItm = styled.li`
	color: var(--white);
	@media (max-width: 768px) {
		padding: 0 1.5rem 0.2rem;
	}
`;
