import React, { useState, useContext } from 'react';
import { StateContext } from '../context/StateContext';
// Components
import Product from './Product';


const Products = () => {
	const { cart, setCart, products, setProducts } = useContext(StateContext);
    console.log("🚀 ~ file: Products.js ~ line 11 ~ Products ~ products", products)
	// Sweet glorious array of objects.
	// (4) [{…}, {…}, {…}, {…}]
	// 0:
	// id: 1
	// image: "https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg"
	// price: 10.11
	// title: "The Art Of War"

	return (
		<div className="products-container">

			{
				products.map(product => (
					<Product
					key={product.id}
					product={product}
					addItem={addItem}
					/>
				))
			}

		</div>
	);
};

export default Products;
