import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Navbar = () =>
{
	return(
		<nav id="navbar">
			<Link to="/" style={{height: "100%", display: "flex", alignItems: "center"}}><img src={Logo} alt="Shadows PC World Logo" className="logo-img"></img></Link>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/shop">Shop</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;
