import { Link } from "react-router-dom";

const Home = () =>
{
	return(
		<div id="home">
			<p>Hello and welcome to Shadows PC Worlds for your daily computer needs!</p>
			<p>We got all sorts of shit honestly, visit the <Link to="/shop" className="shop-link">shop</Link> and see for yourself!</p>
			<p>This website was made as a project for <a id="odin" href="https://www.theodinproject.com" target="_blank" rel="noreferrer">The Odin Project</a>.</p>
			<p>This is not an actual shop btw if you hadn't noticed.</p>
		</div>
	);
};

export default Home;
