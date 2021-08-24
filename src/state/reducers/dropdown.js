const dropdown = (state = false, action) =>
{
	switch (action.type)
	{
		case "OPEN_DROPDOWN":
			return state = true;

		case "CLOSE_DROPDOWN":
			return state = false;

		default:
			return state;
	}
};

export default dropdown;
