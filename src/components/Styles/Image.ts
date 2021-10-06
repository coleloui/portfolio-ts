import styled from 'styled-components';

export const SocIcon = styled.img`
	width: 75px;
	height: auto;
	margin: 0 1rem;
	@media (min-width: 992px) {
		margin: 0rem;
		&:hover {
			transform: scale(1.5);
		}
	}
`;
