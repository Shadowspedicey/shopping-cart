import { Switch, Route } from "react-router-dom";

import ShopSection from "./ShopSection";
import monitorsData from "../data/monitors.json";
import keyboardsData from "../data/keyboards.json";
import mousesData from "../data/mouses.json";
import headphonesData from "../data/headphones.json";
import ShopNav from "./ShopNav";

const Shop = props =>
{
	return(
		<div id="shop">
			{ !props.isTooSmall && <ShopNav/>}
			<Switch>
				<Route exact path="/shop/monitors"><ShopSection data={monitorsData}/></Route>
				<Route exact path="/shop/keyboards"><ShopSection data={keyboardsData} /></Route>
				<Route exact path="/shop/mouses"><ShopSection data={mousesData}/></Route>
				<Route exact path="/shop/headphones"><ShopSection data={headphonesData}/></Route>
			</Switch>
		</div>
	);
};

export default Shop;
