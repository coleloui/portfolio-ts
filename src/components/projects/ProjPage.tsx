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
					minor={project.minor}
					bio={project.biograph}
					deployedLink={project.deployedLink}
					github={project.github}
				/>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
`;
