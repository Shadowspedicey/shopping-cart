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
		if (cart.items.includes(item)) return;
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

	return (
		<div className="App">
			<Router>
				<Navbar cart={cart}/>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/shop"><Shop addToCart={addToCart}/></Route>
					<Route exact path="/cart"><Cart items={cart.items}/></Route>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
