const cartState =
{
	nOfItems: 0,
	items: []
};

const cart = (state = cartState, action) =>
{
	switch (action.type)
	{
		case "ADD_TO_CART":
			if (state.items.filter(_item => _item.title === action.payload.item.title)[0]) return state;
			return state =
			{
				nOfItems: state.nOfItems + action.payload.quantity,
				items:
				[
					...state.items,
					{...action.payload.item, "quantity": action.payload.quantity},
				]
			};

		case "REMOVE_FROM_CART":
			return state =
			{
				...state,
				nOfItems: state.nOfItems - state.items.filter(item => item.title === action.payload.name)[0].quantity,
				items: state.items.filter(item => item.title !== action.payload.name),
			};

		case "INCREASE_QUANTITY":
			return state =
			{
				...state,
				nOfItems: state.nOfItems + 1,
				items: state.items.map(item => item.title === action.payload.name ? {...item, quantity: item.quantity + 1} : item)
			};

		case "DECREASE_QUANTITY":
			return state =
			{
				...state,
				nOfItems: state.nOfItems - 1,
				items: state.items.map(item => item.title === action.payload.name ? {...item, quantity: item.quantity - 1} : item)
			};

		default:
			return state;
	}
};

export default cart;
