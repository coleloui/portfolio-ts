import styled from 'styled-components';
import Resume from './resume/LouisColemanResume.pdf';

export type HeaderProps = {
	setMainInfo: (val: string) => void;
	mainInfo: string;
};

export const Header: React.FC<HeaderProps> = ({ setMainInfo, mainInfo }) => {
	return (
		<Nav>
			<Brand>
				<GlowDot />
				<BrandText>
					louis<Accent>.</Accent>dev
				</BrandText>
			</Brand>
			<NavRight>
				<NavLink
					$active={mainInfo === 'projects'}
					onClick={() => setMainInfo('projects')}
				>
					Projects
				</NavLink>
				<NavLink
					$active={mainInfo === 'stack'}
					onClick={() => setMainInfo('stack')}
				>
					Stack
				</NavLink>
				<NavLink
					$active={mainInfo === 'notables'}
					onClick={() => setMainInfo('notables')}
				>
					Notables
				</NavLink>
				<ResumeButton download href={Resume}>
					Resume
				</ResumeButton>
			</NavRight>
		</Nav>
	);
};

const Nav = styled.nav`
	position: sticky;
	top: 0;
	z-index: 100;
	width: 100%;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.5rem;
	background: rgba(10, 14, 20, 0.85);
	backdrop-filter: blur(10px);
	border-bottom: 1px solid var(--border);
`;

const Brand = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const GlowDot = styled.span`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: var(--accent);
	box-shadow: 0 0 8px var(--accent-glow);
	flex-shrink: 0;
`;

const BrandText = styled.span`
	font-family: var(--mono);
	font-size: 0.95rem;
	font-weight: 600;
	color: var(--text-primary);
	letter-spacing: -0.02em;
`;

const Accent = styled.span`
	color: var(--accent);
`;

const NavRight = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;

const NavLink = styled.div<{ $active: boolean }>`
	font-family: var(--mono);
	font-size: 0.8rem;
	padding: 6px 14px;
	border-radius: 6px;
	cursor: pointer;
	background: ${({ $active }) => ($active ? 'var(--bg-card)' : 'transparent')};
	color: ${({ $active }) =>
		$active ? 'var(--text-primary)' : 'var(--text-secondary)'};
	border: 1px solid ${({ $active }) => ($active ? 'var(--border)' : 'transparent')};
	transition: color 0.15s, background 0.15s;

	&:hover {
		color: var(--text-primary);
		background: var(--bg-card);
	}
`;

const ResumeButton = styled.a`
	font-family: var(--mono);
	font-size: 0.8rem;
	padding: 6px 14px;
	border-radius: 6px;
	margin-left: 8px;
	background: var(--accent);
	color: #0a0e14;
	font-weight: 600;
	text-decoration: none;
	transition: background 0.15s;

	&:hover {
		background: var(--accent-dim);
	}
`;
