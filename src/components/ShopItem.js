import { useState } from "react";
import uniqid from "uniqid";

const ShopItem = props =>
{
	const [quantity, setQuantity] = useState(1);

	return(
		<div className="shop-item">
			<h2 className="title">{props.info.title}</h2>
			<div className="shop-item-img-container">
				<img src={props.info.image} alt={props.info.title}></img>
			</div>
			{
				props.info.specs.map(spec =>
					<div className="spec" key={uniqid()}><span>{spec[0]}:</span><span>{spec[1]}</span></div>
				)
			}
			<h2 className="price">£ {props.info.price.toFixed(2)}</h2>
			<div className="add-to-cart-container">
				<div className="quantity-container">
					<button onClick={() => setQuantity(quantity + 1)}>+</button>
					<input type="number" min="1" value={quantity} readOnly></input>
					<button onClick={quantity === 1 ? null : () => setQuantity(quantity - 1)}>-</button>
				</div>
				<button className="add-to-cart" onClick={() => props.addToCart(props.info, quantity)}>Add to cart</button>
			</div>
		</div>
	);
};

export default ShopItem;
