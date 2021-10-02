import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

interface ProjectProps {
	name: string;
	photo: string;
	bio: string;
}

const Wrapper = styled.div`
	background: black;
	padding: 1rem;

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 3rem;
		border-radius: 0.33rem;
		transition: all 0.5s ease-in-out;
	}
	h1 {
		color: var(--white);
	}
	#mainDisplay {
		display: flex;
		align-self: center;
	}
	#title {
		opacity: 0;
	}
	p {
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
	div:hover {
		box-shadow: 0 0 15px var(--white);
		cursor: pointer;
		#mainDisplay {
			display: none;
		}
		#title {
			opacity: 1;
			transition: all 0.2s ease-in-out;
		}
		p {
			display: inline-block;
			padding-top: 1rem;
			width: 70%;
		}
		span {
			background-size: 0 2px, 100% 2px;
		}
	}
`;

const Projects = ({ name, photo, bio }: ProjectProps): ReactElement => {
	return (
		<Wrapper>
			<div>
				<h1 id="mainDisplay">
					<span>{name}</span>
				</h1>
				<aside>
					<h1 id="title">
						<span>{name}</span>
					</h1>
					<p>{bio}</p>
				</aside>
				<img src={photo} />
			</div>
		</Wrapper>
	);
};

export default Projects;
