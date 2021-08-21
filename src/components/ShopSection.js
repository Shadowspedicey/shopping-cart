import { useState } from "react";
import uniqid from "uniqid";
import ShopItem from "./ShopItem";

const ShopSection = props =>
{
	const items = useState(props.data)[0];

	return(
		<div className="shop-section">
			{
				items.map(item =>
					<ShopItem info={item} key={uniqid()}/>
				)
			}
		</div>
	);
};

export default ShopSection;
