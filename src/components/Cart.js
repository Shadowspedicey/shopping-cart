import { useState, useEffect } from "react";
import uniqid from "uniqid";
import CartItem from "./CartItem";

const Cart = props =>
{
	const [total, setTotal] = useState(0);
	const calculateTotal = () => setTotal([...props.items].reduce((total, item) => total + (item.price * item.quantity), 0));

	useEffect(calculateTotal, [props.items]);

	return(
		<div id="cart">
			<div className="cart-item cart-header">
				<h1 className="item-img">#</h1><h1 className="item-name">Item</h1><h1 className="item-quantity">Quantity</h1><h1 className="item-price">Price</h1>
			</div>
			{props.items.map(item => <CartItem info={item} key={uniqid()} removeFromCart={props.removeFromCart} quantityFns={props.quantityFns}/>)}
			{
				props.items.length > 0 
					? <div className="cart-item cart-footer" style={{justifyContent: "flex-end"}}><h1 className="total">Total: £ {total.toFixed(2)}</h1></div>
					: null
			}
		</div>
	);
};

export default Cart;
