import GlobalStyles from './global-styles';
import { ProjectInfo } from './components/projects/ProjectInfo';
import { TheTitle } from './components/Title';
import { Projects } from './components/Projects';
// import { Footer } from './components/Footer';

export const App: React.FC = () => {
	return (
		<div className="App">
			<GlobalStyles />
			<TheTitle />
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
			{/* <Footer /> */}
		</div>
	);
};
