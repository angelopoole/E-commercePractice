//lib
import { Link } from 'react-router-dom';

// comp lib
import { Card } from 'react-bootstrap';

//components
import Rating from './Rating';

const Product = props => {
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
	} = props.product;

	return (
		<>
			<Card className='my-3 p-3 rounded'>
				<Link to={`/product/${_id}`}>
					<Card.Img src={image} variant='top' />
				</Link>
				<Card.Body>
					<Link to={`/product/${_id}`}>
						<Card.Title as='div'>
							<strong>{name}</strong>
						</Card.Title>
					</Link>
					<Card.Text as='div'>
						<Rating rating={rating} text={`${numReviews} reveiws`} />
					</Card.Text>
					<Card.Text as='h3'>${price}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default Product;
