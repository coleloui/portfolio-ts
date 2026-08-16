import styled from 'styled-components';
import EmailIcon from './social-icons/email.png';
import GithubIcon from './social-icons/github.png';
import LinkedIcon from './social-icons/linkedin.png';
import Resume from '../resume/LouisColemanResume.pdf';

export function Social() {
	return (
		<Grid>
			<Cell href="mailto:coleloui18@gmail.com" rel="noreferrer" target="_blank">
				<CellIcon src={EmailIcon} alt="Email" />
			</Cell>
			<Cell href="https://github.com/coleloui" rel="noreferrer" target="_blank">
				<CellIcon src={GithubIcon} alt="GitHub" />
			</Cell>
			<Cell
				href="https://www.linkedin.com/in/louis-coleman/"
				rel="noreferrer"
				target="_blank"
			>
				<CellIcon src={LinkedIcon} alt="LinkedIn" />
			</Cell>
			<ResumeCell download href={Resume}>
				Resume
			</ResumeCell>
		</Grid>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
	margin-top: 1.5rem;
`;

const Cell = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 48px;
	border-radius: 8px;
	border: 1px solid var(--border);
	background: var(--bg-card);
	transition: border-color 0.15s, background 0.15s;

	&:hover {
		border-color: var(--accent-cyan);
		background: var(--bg-elevated);
		cursor: pointer;
	}
`;

const CellIcon = styled.img`
	width: 26px;
	height: auto;
`;

const ResumeCell = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 48px;
	border-radius: 8px;
	border: 1px solid var(--accent);
	background: var(--accent);
	color: #0d0221;
	font-family: var(--mono);
	font-size: 0.75rem;
	font-weight: 600;
	text-decoration: none;
	transition: background 0.15s, border-color 0.15s;

	&:hover {
		background: var(--accent-dim);
		border-color: var(--accent-dim);
	}
`;
