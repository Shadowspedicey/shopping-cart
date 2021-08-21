const CartItem = props =>
{
	return(
		<div className="cart-item" style={{backgroundColor: `hsl(0, 0%, ${Math.floor(Math.random() * 10) + 80}%)`}}>
			<img className="item-img" src={props.info.image} alt={props.info.title}></img>
			<span className="item-name">{props.info.title}</span>
			<span className="item-quantity">{props.info.quantity}</span>
			<span className="item-price">£ {props.info.price}</span>
		</div>
	);
};

export default CartItem;
