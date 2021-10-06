import styled from 'styled-components';

export const Title = styled.h1`
	color: var(--primary);
	text-align: center;
	margin-bottom: 3rem;
	text-transform: capitalize;
	font-size: 250%;
	@media (max-width: 768px) {
		text-align: center;
		margin: 0rem 0rem 1.5rem;
	}
`;

export const MinorTitle = styled(Title)`
	color: var(--white);
	margin: 0 0 0 10rem;
	text-decoration: underline;
	text-align: start;
	font-size: 150%;
	@media (max-width: 768px) {
		text-align: center;
		margin: 0rem 0rem 0.33rem;
	}
`;

export const MainTitle = styled.h1`
	color: var(--primary);
	font-weight: 400;
	font-size: 350%;
	text-align: center;
	@media (min-width: 992px) {
		padding-left: 5.5rem;
		text-align: start;
	}
`;

export const SmallerTitle = styled.h3`
	color: var(--white);
	font-weight: 200;
	font-size: 200%;
	text-align: center;
	padding-bottom: 1rem;
	@media (min-width: 992px) {
		padding-left: 5rem;
	}
`;
