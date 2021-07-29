// ctrl / alt/ l = turbo console

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// contextAPI
import { StateContext } from './context/StateContext';

function App() {
	const [products, setProducts] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// ...products, setProducts() // forgot
	};


	// DO NOT FORGET DOUBLE CURLUES IN THE: Provider value={{}}
	return (
		<div className=".App">  
			<StateContext.Provider value={{cart, setCart, products, setProducts}}>
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					{/* addItem={addItem}  goes in products.js eventually......*/}
					<Products  />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>

			</StateContext.Provider>
		</div>
	);
}

export default App;
