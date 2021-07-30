import React, { useContext } from 'react';
import { StateContext } from '../contexts/StateContext';


const Product = () => {

	const { addItem, products } = useContext(StateContext);
	
    console.log("🚀 ~ file: Products.js:", products, addItem)

	return (
		<div className="product">
			<img src={products.image} alt={`${products.title} book`} />

			<h1 className="title">{products.title}</h1>

			<p className="price">${products.price}</p>

			<button onClick={() => addItem(products)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
