import { ProjectInfo } from './projects/ProjectInfo';
import { Projects } from './Projects';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 5rem;
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
