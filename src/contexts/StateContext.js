import { createContext } from 'react';

export const StateContext = createContext(); 



// ABOVE creates the context. 

//  APP.JS  ____________________________________________

// now we can import it to the higher order function

// after it is imported, it can be used as a wrapper around other components = 
// <StateContext.Provider value={{cart, setCart, products, setProducts}}>
// Do not forget the double curlies inside of the Provider value!!!!!!!!!

// what this does is allow us to pass all state into every component with out needing to use prop drilling or Redux

// all state needs to be in the higher order function (in this case App.js)

// PRODUCTS.JS _________________________________________

// now inside the components that need to access state, we must import the useContext hook (I think we also need useState as well)

// import React, { useState, useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// then we need to destruct the values being passed in.

// 
