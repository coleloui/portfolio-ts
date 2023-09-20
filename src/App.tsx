import { useState } from 'react';
import GlobalStyles from './global-styles';
import { TheBody } from './Pages/Body';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App: React.FC = () => {
	const [mainInfo, setMainInfo] = useState<string>('projects');
	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<GlobalStyles />
			<Header setMainInfo={setMainInfo} />
			<TheBody mainInfo={mainInfo} />
			<Footer />
		</div>
	);
};
