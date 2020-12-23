// libs
import { Link } from 'react-router-dom';

//bootStrap
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

//Components
import Rating from '../components/Rating';

//Data
import products from '../products';

const ProductScreen = ({ match }) => {
	const product = products.find(p => p._id === match.params.id);

	let {
		_id,
		name,
		image,
		description,
		brand,
		category,
		price,
		countInStock,
		rating,
		numReviews,
	} = product;

	return (
		<>
			<Link className={'btn btn-light my-3'} to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={image} alt={name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating rating={rating} text={`${numReviews} reveiws`} />
						</ListGroup.Item>
						<ListGroup.Item>price: ${price}</ListGroup.Item>
						<ListGroup.Item>{description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className='btn-block'
									disabled={countInStock === 0}
									type='button'
								>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
