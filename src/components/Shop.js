import { NavLink, Switch, Route } from "react-router-dom";
import Monitor from "../images/Monitor.png";
import Keyboard from "../images/Keyboard.png";
import Mouse from "../images/Mouse.png";
import Headphones from "../images/Headphones.png";

import MonitorsSection from "./MonitorsSection";

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
				<Route exact path="/shop/monitors" component={MonitorsSection}></Route>
			</Switch>
		</div>
	);
};

export default Shop;
