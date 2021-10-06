import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 0 0 100%;
	flex-direction: column;
	@media (min-width: 992px) {
		padding-top: 15rem;
		display: flex;
		flex-direction: column;
		flex: 0 0 45%;
	}
`;

export const Social = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: column;
	flex: 0 0 25%;
	@media (max-width: 768px) {
		flex: 0 0 100%;
		flex-direction: row;
		flex-wrap: wrap;
		h1 {
			flex: 0 0 100%;
		}
	}
`;

export const TechStack = styled.div`
	justify-content: center;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	flex: 0 0 65%;
	@media (max-width: 768px) {
		flex: 0 0 100%;
	}
`;

export const Nav = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	top: 0;
	position: fixed;
	width: 100%;
	height: 3rem;
	background: #fff;
`;
