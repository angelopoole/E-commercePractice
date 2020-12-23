//libs
import { BrowserRouter as Router, Route } from 'react-router-dom';

//bootstrap components
import { Container } from 'react-bootstrap';

//components
import Header from './Header';
import Footer from './Footer';

//Screens
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/product/:id' component={ProductScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
