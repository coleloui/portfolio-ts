import styled from 'styled-components';
import Me from '../components/pics/me.jpg';
import { Social } from './social/Social';
import { TechItems } from './TechStack/TechItems';

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
			<StackSection>
				{TechItems.map(group => (
					<StackGroup key={group.name}>
						<GroupHeader>{group.name}</GroupHeader>
						<ItemList>
							{group.tech.map(t => (
								<Item key={t.item}>{t.item}</Item>
							))}
						</ItemList>
					</StackGroup>
				))}
			</StackSection>
			<Social />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 0;
	overflow-wrap: break-word;
	padding-top: 2rem;
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

const StackSection = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	@media (min-width: 1250px) {
		padding-left: 10px;
	}
`;

const StackGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
`;

const GroupHeader = styled.p`
	font-family: var(--mono);
	font-size: 0.65rem;
	font-weight: 600;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--text-muted);
`;

const ItemList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.15rem;
`;

const Item = styled.li`
	font-family: var(--mono);
	font-size: 0.78rem;
	color: var(--text-secondary);

	&::before {
		content: '· ';
		color: var(--accent-cyan);
	}
`;
