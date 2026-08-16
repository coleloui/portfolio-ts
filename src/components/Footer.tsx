import styled from 'styled-components';

export function Footer() {
	return <Foot>© 2021 Louis Coleman</Foot>;
}

const Foot = styled.footer`
	width: 100%;
	padding: 1.25rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 0.5rem;
	border-top: 1px solid var(--border);
	font-family: var(--mono);
	font-size: 0.75rem;
	color: var(--text-muted);
	margin-top: 2rem;
`;

const Built = styled.span`
	color: var(--text-muted);
`;
