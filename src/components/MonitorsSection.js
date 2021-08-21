import { useState } from "react";
import uniqid from "uniqid";
import ShopItem from "./ShopItem";
import monitorsData from "./monitors.json";

const MonitorsSection = () =>
{
	const monitors = useState(monitorsData)[0];

	return(
		<div className="shop-section">
			{
				monitors.map(monitor =>
					<ShopItem info={monitor} key={uniqid()}/>
				)
			}
		</div>
	);
};

export default MonitorsSection;
