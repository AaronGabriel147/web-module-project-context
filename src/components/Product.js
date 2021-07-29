import React, { useState, useContext } from 'react';
import { StateContext } from '../context/StateContext';


const Product = () => {

	const { cart, setCart, products, setProducts } = useContext(StateContext);
    console.log("🚀 ~ file: Products.js ~ line 11 ~ Products ~ products", products)

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
