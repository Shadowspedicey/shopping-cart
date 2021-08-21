import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import "./App.css";

function App() 
{
	const [cart, setCart] = useState([]);

	const addToCart = item =>
	{
		if (cart.includes(item)) return;
		setCart
		(
			[
				...cart,
				item,
			]
		);
	};

	return (
		<div className="App">
			<Router>
				<Navbar cart={cart}/>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/shop"><Shop addToCart={addToCart}/></Route>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
