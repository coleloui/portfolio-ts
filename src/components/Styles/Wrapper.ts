import styled from 'styled-components';

export const Wrapper = styled.div`
	background: var(--secondary);
	height: 90vh;
	width: 100%;
	padding-top: 5rem;
	display: flex;
	flex-flow: row wrap;
	p {
		color: var(--white);
		margin-left: 10rem;
		@media (max-width: 768px) {
			text-align: center;
			margin: -0.25rem 0rem 0.5rem;
		}
	}
	@media (max-width: 768px) {
		height: 100%;
	}
`;

export const TitleWrapper = styled(Wrapper)`
	background: #404040;
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	height: 90vh;
	@media (max-width: 768px) {
		height: 100%;
		padding-bottom: 3rem;
	}
`;
