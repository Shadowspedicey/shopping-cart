export const addToCart = (item, quantity) =>
{
	return {
		type: "ADD_TO_CART",
		payload:
		{
			item,
			quantity,
		}
	};
};

export const removeFromCart = name =>
{
	return {
		type: "REMOVE_FROM_CART",
		payload: { name }
	};
};

export const increaseQuantity = name =>
{
	return {
		type: "INCREASE_QUANTITY",
		payload: { name }
	};
};

export const decreaseQuantity = name =>
{
	return {
		type: "DECREASE_QUANTITY",
		payload: { name }
	};
};
