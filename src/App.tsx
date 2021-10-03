import GlobalStyles from './global-styles';
import { TheTitle } from './components/Title';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { ProjPage } from './components/ProjPage';

export const App: React.FC = () => {
	return (
		<div>
			<GlobalStyles />
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						{' '}
						<TheTitle />
					</Route>
					<Route exact path="/projects">
						<ProjPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};
