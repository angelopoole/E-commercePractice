//lib
import { LinkContainer } from 'react-router-bootstrap';

//BootStrap comp
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Proshop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart' /> Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user' />
									Sign in
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
