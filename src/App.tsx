import { ReactElement } from 'react';
import Projects from './components/Projects';
import TheTitle from './components/Title';
import GlobalStyles from './global-styles';
import ProjectNames from './components/projects/ProjectInfo';

function App(): ReactElement {
	return (
		<div className="App">
			<GlobalStyles />
			<TheTitle />
			{ProjectNames.map(project => (
				<Projects
					name={project.projName}
					photo={project.photo}
					bio={project.biograph}
				/>
			))}
		</div>
	);
}

export default App;
