import styled from 'styled-components';

export const List = styled.ul`
	margin-bottom: 3rem;
	margin-left: 13rem;
	@media (max-width: 768px) {
		margin-left: 0px;
	}
`;

export const ListItm = styled.li`
	color: var(--white);
	@media (max-width: 768px) {
		text-align: center;
	}
`;
