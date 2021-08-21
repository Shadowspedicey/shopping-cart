import { NavLink, Switch, Route } from "react-router-dom";
import Monitor from "../images/Monitor.png";
import Keyboard from "../images/Keyboard.png";
import Mouse from "../images/Mouse.png";
import Headphones from "../images/Headphones.png";

import ShopSection from "./ShopSection";
import monitorsData from "./data/monitors.json";
import keyboardsData from "./data/keyboards.json";
import mousesData from "./data/mouses.json";
import headphonesData from "./data/headphones.json";

const Shop = () =>
{
	return(
		<div id="shop">
			<nav id="shop-nav">
				<ul className="nav-shop-sections">
					<NavLink to="/shop/monitors" activeClassName="selected">
						<li className="nav-shop-section">
							<img src={Monitor} alt="Monitors icon" className="nav-shop-section-img"></img>
							<span className="nav-shop-section-text">Monitors</span>
						</li>
					</NavLink>
					<NavLink to="/shop/keyboards" activeClassName="selected">
						<li className="nav-shop-section">
							<img src={Keyboard} alt="Keyboards icon" className="nav-shop-section-img"></img>
							<span className="nav-shop-section-text">Keyboards</span>
						</li>
					</NavLink>
					<NavLink to="/shop/mouses" activeClassName="selected">
						<li className="nav-shop-section">
							<img src={Mouse} alt="Mouses icon" className="nav-shop-section-img"></img>
							<span className="nav-shop-section-text">Mouses</span>
						</li>
					</NavLink>
					<NavLink to="/shop/headphones" activeClassName="selected">
						<li className="nav-shop-section">
							<img src={Headphones} alt="Headphones icon" className="nav-shop-section-img"></img>
							<span className="nav-shop-section-text">Headphones</span>
						</li>
					</NavLink>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/shop/monitors"><ShopSection data={monitorsData}/></Route>
				<Route exact path="/shop/keyboards"><ShopSection data={keyboardsData}/></Route>
				<Route exact path="/shop/mouses"><ShopSection data={mousesData}/></Route>
				<Route exact path="/shop/headphones"><ShopSection data={headphonesData}/></Route>
			</Switch>
		</div>
	);
};

export default Shop;
