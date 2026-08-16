import styled, { keyframes } from 'styled-components';

export interface ProjectProps {
	name: string;
	minor: string;
	bio: string;
	deployedLink?: string;
	github?: string;
	featured?: boolean;
	tech?: string[];
}

export function Projects({
	name,
	minor,
	bio,
	deployedLink,
	github,
	featured,
	tech
}: ProjectProps) {
	return (
		<MainDiv $featured={featured}>
			{featured && <FeaturedBadge>Featured</FeaturedBadge>}
			<TitleRow>
				<MainTitle>{name}</MainTitle>
				{deployedLink && (
					<LiveBadge>
						<PulseDot />
						Live
					</LiveBadge>
				)}
			</TitleRow>
			<MinorTitle>{minor}</MinorTitle>
			<p>{bio}</p>
			{tech && tech.length > 0 && (
				<TagRow>
					{tech.map(t => (
						<Tag key={t}>{t}</Tag>
					))}
				</TagRow>
			)}
			{(deployedLink || github) && (
				<LinksRow>
					{deployedLink && (
						<CardLink
							href={deployedLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Live ↗
						</CardLink>
					)}
					{github && (
						<CardLink
							href={github}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub ↗
						</CardLink>
					)}
				</LinksRow>
			)}
		</MainDiv>
	);
}

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

const MainDiv = styled.div<{ $featured?: boolean }>`
	position: relative;
	background: var(--bg-card);
	border: 1px solid
		${({ $featured }) => ($featured ? 'var(--accent)' : 'var(--border)')};
	border-radius: 8px;
	padding: 24px 20px 20px;
	color: var(--text-secondary);
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin: 6px 0;
	transition: border-color 0.2s;

	p {
		font-size: 0.88rem;
		line-height: 1.65;
	}

	&:hover {
		border-color: ${({ $featured }) =>
			$featured ? 'var(--accent-dim)' : 'var(--border-hover)'};
	}

	@media (max-width: 1249px) {
		width: 100%;
	}
`;

const FeaturedBadge = styled.span`
	position: absolute;
	top: -11px;
	left: 20px;
	font-family: var(--mono);
	font-size: 0.62rem;
	font-weight: 600;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--accent);
	background: var(--bg-card);
	border: 1px solid var(--accent);
	border-radius: 100px;
	padding: 2px 10px;
`;

const TitleRow = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
`;

const MainTitle = styled.h2`
	color: var(--text-primary);
	font-family: var(--sans);
	font-weight: 700;
	font-size: 1.2rem;
`;

const LiveBadge = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 5px;
	font-family: var(--mono);
	font-size: 0.65rem;
	font-weight: 600;
	color: var(--accent);
	background: var(--accent-soft);
	border: 1px solid var(--accent);
	border-radius: 100px;
	padding: 2px 8px;
	letter-spacing: 0.04em;
`;

const PulseDot = styled.span`
	display: inline-block;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--accent);
	animation: ${pulse} 2s ease-in-out infinite;
	flex-shrink: 0;
`;

const MinorTitle = styled.p`
	color: var(--text-muted);
	font-family: var(--mono);
	font-size: 0.75rem;
	font-weight: 400;
`;

const TagRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-top: 4px;
`;

const Tag = styled.span`
	font-family: var(--mono);
	font-size: 0.65rem;
	color: var(--accent);
	background: var(--accent-soft);
	border: 1px solid rgba(94, 234, 212, 0.3);
	border-radius: 100px;
	padding: 2px 9px;
`;

const LinksRow = styled.div`
	display: flex;
	gap: 16px;
	margin-top: 4px;
`;

const CardLink = styled.a`
	font-family: var(--mono);
	font-size: 0.78rem;
	color: var(--accent);
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
