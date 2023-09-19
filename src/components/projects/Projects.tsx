import styled from 'styled-components/macro';

export type ProjectProps = {
	name: string;
	minor: string;
	bio: string;
	deployedLink?: string;
	github?: string;
};

export const Projects: React.FC<ProjectProps> = ({
	name,
	minor,
	bio,
	deployedLink,
	github
}) => {
	return (
		<MainDiv>
			<MainTitle>{name}</MainTitle>
			<MinorTitle>{minor}</MinorTitle>
			<p>{bio}</p>
			<div>
				{deployedLink && (
					<SpaceLink href={deployedLink}>
						Deployed Application
					</SpaceLink>
				)}
				{github && <SpaceLink href={github}>Github</SpaceLink>}
			</div>
		</MainDiv>
	);
};

const MainDiv = styled.div`
	background: #404040;
	padding: 20px;
	color: var(--white);
	display: flex;
	flex-direction: row;
	a {
		color: var(--white);
	}
	display: flex;
	flex-direction: column;
	margin: auto 0;
	@media (max-width: 1249px) {
		width: 100%;
		p {
			display: flex;
			padding-top: 1rem;
			width: 100%;
		}
		a {
			display: block;
			padding: 1rem 1rem;
		}
	}
`;

const MainTitle = styled.h1`
	color: var(--primary);
	margin-bottom: -5px;
`;

const MinorTitle = styled.h3`
	color: var(--primary);
	font-weight: 200;
`;

const SpaceLink = styled.a`
	padding-right: 5px;
`;
