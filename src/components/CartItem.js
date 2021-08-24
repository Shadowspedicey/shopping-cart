import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import isMobile from "is-mobile";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../state/actions/cartActions";

const CartItem = props =>
{
	const [isHovered, setIsHovered] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => props.info.quantity === 0 ? dispatch(removeFromCart(props.info.title)) :  null);
	useEffect(() => isMobile() ? setIsHovered(true) : null, [isHovered]);

	return(
		<div className="cart-item" style={{backgroundColor: "hsl(0, 0%, 85%)"}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<span className="delete" style={isHovered ? {display: "initial"} : {display: "none"}} onClick={() => dispatch(removeFromCart(props.info.title))}>x</span>
			<div className="item-img"><img src={props.info.image} alt={props.info.title}></img></div>
			<span className="item-name">{props.info.title}</span>
			<span className="item-quantity">
				<button onClick={() => dispatch(decreaseQuantity(props.info.title))}>-</button>
				<span>{props.info.quantity}</span>
				<button onClick={() => dispatch(increaseQuantity(props.info.title))}>+</button>
			</span>
			<span className="item-price">£ {props.info.price}</span>
		</div>
	);
};

export default CartItem;
