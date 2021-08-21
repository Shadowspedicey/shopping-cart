import uniqid from "uniqid";

const ShopItem = props =>
{
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
			<button className="add-to-cart">Add to cart</button>
		</div>
	);
};

export default ShopItem;
