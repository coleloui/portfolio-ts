import GlobalStyles from './global-styles';
import { Hero } from './components/Hero';
import { TheBody } from './Pages/Body';
import { Footer } from './components/Footer';

export function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh'
			}}
		>
			<GlobalStyles />
			<Hero />
			<TheBody />
			<Footer />
		</div>
	);
}
