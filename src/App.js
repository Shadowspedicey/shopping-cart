import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopNav from "./components/ShopNav";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() 
{
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const isTooSmall = useMediaQuery({query: "(max-width: 860px)"});

	const closeDropdown = () => setIsDropdownOpen(false);

	return (
		<div className="App">
			<Router>
				<Navbar isTooSmall={isTooSmall} setIsDropdownOpen={setIsDropdownOpen}/>
				{
					isDropdownOpen
						?
						<div style={{position: "absolute", width: "100%", height: "100%"}}>
							<div id="dropdown-menu">
								<ShopNav closeDropdown={closeDropdown}/>
							</div>
							<div id="drop-overlay" onClick={closeDropdown}></div>
						</div>
						: null
				}
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/shop"><Shop isTooSmall={isTooSmall}/></Route>
					<Route exact path="/cart"><Cart/></Route>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
