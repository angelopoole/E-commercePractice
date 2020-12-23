import { Container } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

const App = () => {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>Welcome to proShop</h1>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
