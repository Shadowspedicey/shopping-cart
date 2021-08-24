import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openDropdown } from "../state/actions/dropdownActions";
import Logo from "../images/Logo.png";

const Navbar = props =>
{
	const nOfItems = useSelector(state => state.cart.nOfItems);
	const dispatch = useDispatch();

	return(
		<nav id="navbar">
			{ props.isTooSmall &&
				<span id="dropdown" onClick={() => dispatch(openDropdown())}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
					</svg>
				</span>
			}
			<Link to="/" style={{height: "100%", display: "flex", alignItems: "center"}}><img src={Logo} alt="Shadows PC World Logo" className="logo-img"></img></Link>
			{ !props.isTooSmall &&
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/shop/monitors">Shop</Link></li>
				</ul>
			}
			<div className="nav-cart">
				<Link to="/cart">
					<div className="nav-cart-container">
						<span>{nOfItems}</span>
						<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
