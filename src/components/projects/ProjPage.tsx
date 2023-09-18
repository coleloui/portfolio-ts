import { ProjectInfo } from './ProjectInfo';
import { Projects } from './Projects';
import styled from 'styled-components';

export const ProjPage: React.FC = () => {
	return (
		<Wrapper>
			{ProjectInfo.map(project => (
				<Projects
					key={project.projName}
					name={project.projName}
					photo={project.photo}
					bio={project.biograph}
					deployedLink={project.deployedLink}
					github={project.github}
				/>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: auto;
	margin-top: 10px;
	margin-bottom: 10px;
	display: block;
	margin-left: auto;
	@media (max-width: 1249px) {
		width: 100%;
	}
`;
