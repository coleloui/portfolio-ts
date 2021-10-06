import { ProjectInfo } from '../components/projects/ProjectInfo';
import { Projects } from '../components/projects/Projects';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

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
