import { useState, useEffect } from "react";

const CartItem = props =>
{
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => props.info.quantity === 0 ? props.removeFromCart(props.info.title) :  null);

	return(
		<div className="cart-item" style={{backgroundColor: "hsl(0, 0%, 85%)"}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="delete" style={isHovered ? {display: "initial"} : {display: "none"}} onClick={() => props.removeFromCart(props.info.title)}>x</span>
			<div className="item-img"><img src={props.info.image} alt={props.info.title}></img></div>
			<span className="item-name">{props.info.title}</span>
			<span className="item-quantity">
				<button onClick={() => props.quantityFns.decreaseQuantity(props.info.title)}>-</button>
				<span>{props.info.quantity}</span>
				<button onClick={() => props.quantityFns.increaseQuantity(props.info.title)}>+</button>
			</span>
			<span className="item-price">£ {props.info.price}</span>
		</div>
	);
};

export default CartItem;
