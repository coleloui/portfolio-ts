import styled from 'styled-components/macro';

export type ProjectProps = {
	name: string;
	photo: string;
	bio: string;
	deployedLink?: string;
	github?: string;
};

export const Projects: React.FC<ProjectProps> = ({
	name,
	photo,
	bio,
	deployedLink,
	github
}) => {
	return (
		<Wrapper>
			<MainDiv>
				<MainTitle>{name}</MainTitle>
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
			<ProjectImage src={photo} alt={name} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: #404040;
	padding: 20px;
	color: var(--white);
	display: flex;
	flex-direction: row;
	a {
		color: var(--white);
	}
`;

const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 5px;
	@media (max-width: 1249px) {
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
	display: flex;
	align-self: center;
	color: var(--primary);
`;

const ProjectImage = styled.img`
	width: 250px;
	height: 150px;
	border-radius: 0.25rem;
	margin: auto 0 auto 0;
	padding-right: 10px;
	@media (max-width: 800px) {
		display: none;
	}
`;

const SpaceLink = styled.a`
	padding-right: 5px;
`;
