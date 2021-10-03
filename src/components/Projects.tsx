import styled from 'styled-components/macro';

export type ProjectProps = {
	name: string;
	photo: string;
	bio: string;
	deployedLink?: string;
	github?: string;
};

const Wrapper = styled.div`
	background: black;
	padding: 1rem;

	h1 {
		color: var(--white);
	}
	p {
		display: none;
		color: var(--white);
	}
	a {
		display: none;
		color: var(--white);
	}
	span {
		text-decoration: none;
		background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)),
			linear-gradient(#dfe5f3, #dfe5f3);
		background-size: 100% 2px, 0 2px;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.5s linear;
	}
	img {
		width: 600px;
		border-radius: 0.25rem;
	}
	aside {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	#mainDiv {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 3rem;
		border-radius: 0.33rem;
		transition: all 0.5s ease-in-out;
	}
	#mainDisplay {
		display: flex;
		align-self: center;
	}
	#title {
		opacity: 0;
	}
	#secondaryDiv {
		display: flex;
	}
	#mainDiv:hover {
		box-shadow: 0 0 17px var(--white);
		background: #404040;
		#mainDisplay {
			display: none;
		}
		#title {
			opacity: 1;
			transition: all 0.2s ease-in-out;
		}
		p {
			display: flex;
			padding-top: 1rem;
			width: 70%;
		}
		a {
			display: block;
			padding: 1rem 1rem;
		}
		span {
			background-size: 0 2px, 100% 2px;
		}
	}
`;

export const Projects: React.FC<ProjectProps> = ({
	name,
	photo,
	bio,
	deployedLink,
	github
}) => {
	return (
		<Wrapper>
			<div id="mainDiv">
				<h1 id="mainDisplay">
					<span>{name}</span>
				</h1>
				<aside>
					<h1 id="title">
						<span>{name}</span>
					</h1>
					<p>{bio}</p>
					<div id="secondaryDiv">
						{deployedLink ? (
							<a href={deployedLink}>Deployed Application</a>
						) : (
							''
						)}
						{github ? <a href={github}>Github</a> : ''}
					</div>
				</aside>
				<img src={photo} alt={name} />
			</div>
		</Wrapper>
	);
};
