import { combineReducers  } from "redux";
import cartReducer from "./cart";
import dropdownReducer from "./dropdown";

const reducers = combineReducers
(
	{
		cart: cartReducer,
		dropdown: dropdownReducer
	}
);

export default reducers;
