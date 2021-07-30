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

function App() {
	const [products, setProducts] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};


	// DO NOT FORGET DOUBLE CURL IN THE: Provider value={{}}
	return (
		<div className=".App">  
			<StateContext.Provider value={{cart, setCart, products, setProducts, addItem}}>
				<Navigation cart={cart} />

				<Route exact path="/">
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