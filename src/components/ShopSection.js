import { useState, useEffect } from "react";
import uniqid from "uniqid";
import ShopItem from "./ShopItem";

const ShopSection = props =>
{
	const [items, setItems] = useState(props.data);

	useEffect(() => setItems(props.data), [props.data]);

	return(
		<div className="shop-section">
			{
				items.map(item =>
					<ShopItem info={item} key={uniqid()} addToCart={props.addToCart}/>
				)
			}
		</div>
	);
};

export default ShopSection;
