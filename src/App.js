// ctrl / alt/ l = turbo console

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// contextAPI
import { StateContext } from './contexts/StateContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products, setProducts] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	return (
		<div className=".App">  
			<StateContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart }} >

					<Navigation />

					<Route exact path="/">
						<Products  />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>

				</CartContext.Provider>
			</StateContext.Provider>
		</div>
	);
}

export default App;