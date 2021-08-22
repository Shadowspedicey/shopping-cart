import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() 
{
	const [cart, setCart] = useState({nOfItems: 0, items: []});

	const addToCart = (item, quantity) =>
	{
		if (cart.items.filter(_item => _item.title === item.title)[0]) return;
		setCart
		(
			{
				nOfItems: cart.nOfItems + quantity,
				items:
				[
					...cart.items,
					{...item, "quantity": quantity},
				]
			}
		);
	};

	const removeFromCart = name =>
	{
		console.log(cart);
		setCart
		(
			{
				...cart,
				nOfItems: cart.nOfItems - cart.items.filter(item => item.title === name)[0].quantity,
				items: cart.items.filter(item => item.title !== name),
			}
		);
		setTimeout(() => console.log(cart), 600);
	};

	const increaseQuantity = name =>
	{
		setCart
		(
			{
				...cart,
				nOfItems: cart.nOfItems + 1,
				items: cart.items.map(item => item.title === name ? {...item, quantity: item.quantity + 1} : item)
			}
		);
	};

	const decreaseQuantity = name =>
	{
		setCart
		(
			{
				...cart,
				nOfItems: cart.nOfItems - 1,
				items: cart.items.map(item => item.title === name ? {...item, quantity: item.quantity - 1} : item)
			}
		);
	};

	const quantityFns =
	{
		increaseQuantity,
		decreaseQuantity,
	};

	return (
		<div className="App">
			<Router>
				<Navbar cart={cart}/>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/shop"><Shop addToCart={addToCart}/></Route>
					<Route exact path="/cart"><Cart items={cart.items} removeFromCart={removeFromCart} quantityFns={quantityFns}/></Route>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
