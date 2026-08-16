import styled from 'styled-components';
import Me from '../components/pics/me.jpg';
import { Social } from './social/Social';

export function Aside() {
	return (
		<Container>
			<Portrait src={Me} alt="Louis Coleman" />
			<Eyebrow>Tampa, FL · Available for contract</Eyebrow>
			<MainTitle>Louis Coleman</MainTitle>
			<RoleTitle>Full Stack Software Engineer</RoleTitle>
			<Biog>
				5+ years building production web applications, currently focused on
				AI/agent tooling — MCP servers, LLM-backed APIs, and the async
				Python/TypeScript infrastructure that runs them. I ship end to end:
				backend, frontend, and the deployment pipeline in between.
			</Biog>
			<TagRow>
				{['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'MCP'].map(
					tag => (
						<Tag key={tag}>{tag}</Tag>
					)
				)}
			</TagRow>
			<Social />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 35px;
	margin-left: 10px;
	@media (min-width: 1250px) {
		width: 350px;
	}
`;

const Portrait = styled.img`
	width: 160px;
	height: 160px;
	border-radius: 50%;
	object-fit: cover;
	align-self: center;
	border: 2px solid var(--border);
	margin-bottom: 1.25rem;
	@media (min-width: 1250px) {
		align-self: flex-start;
		margin-left: 10px;
	}
`;

const Eyebrow = styled.p`
	font-family: var(--mono);
	font-size: 0.72rem;
	color: var(--accent);
	letter-spacing: 0.04em;
	text-align: center;
	margin-bottom: 0.4rem;
	@media (min-width: 1250px) {
		text-align: start;
		padding-left: 10px;
	}
`;

const MainTitle = styled.h1`
	color: var(--text-primary);
	font-family: var(--sans);
	font-weight: 700;
	font-size: 1.6rem;
	text-align: center;
	@media (min-width: 1250px) {
		padding-left: 10px;
		text-align: start;
	}
`;

const RoleTitle = styled.h3`
	color: var(--text-secondary);
	font-family: var(--sans);
	font-weight: 400;
	font-size: 1rem;
	text-align: center;
	padding-bottom: 1rem;
	@media (min-width: 1250px) {
		padding-left: 10px;
		text-align: start;
	}
`;

const Biog = styled.p`
	color: var(--text-secondary);
	font-family: var(--sans);
	font-size: 0.88rem;
	line-height: 1.65;
	width: 100%;
	text-align: center;
	@media (min-width: 1250px) {
		width: 300px;
		padding-left: 10px;
		text-align: start;
	}
`;

const TagRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-top: 1rem;
	justify-content: center;
	@media (min-width: 1250px) {
		justify-content: flex-start;
		padding-left: 10px;
	}
`;

const Tag = styled.span`
	font-family: var(--mono);
	font-size: 0.68rem;
	color: var(--accent);
	background: var(--accent-soft);
	border: 1px solid var(--accent);
	border-radius: 100px;
	padding: 3px 10px;
	letter-spacing: 0.03em;
`;
