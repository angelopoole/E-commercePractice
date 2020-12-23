import { Card } from 'react-bootstrap';

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
				<a href={`/product/${_id}`}>
					<Card.Img src={image} variant='top' />
				</a>
				<Card.Body>
					<a href={`/product/${_id}`}>
						<Card.Title as='div'>
							<strong>{name}</strong>
						</Card.Title>
					</a>
					<Card.Text as='div'>
						<Rating rating={rating} text={`${numReviews} reveiws`} />
					</Card.Text>
					<Card.Text as='h3'>${price}</Card.Text>
				</Card.Body>

				{/* <footer>{price}</footer> */}
			</Card>
		</>
	);
};

export default Product;

// _id: '1',
// name: 'Airpods Wireless Bluetooth Headphones',
// image: '/images/airpods.jpg',
// description:
//   'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
// brand: 'Apple',
// category: 'Electronics',
// price: 89.99,
// countInStock: 10,
// rating: 4.5,
// numReviews: 12,
