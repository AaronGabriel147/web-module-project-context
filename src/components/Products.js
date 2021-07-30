import React, { useContext } from 'react';
import { StateContext } from '../contexts/StateContext';
// Components
import Product from './Product';


const Products = () => {
	
	const { addItem, products, } = useContext(StateContext);
    console.log("🚀 ~ file: Products.js ~ line 11 ~ Products ~ products", products)
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