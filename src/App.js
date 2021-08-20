import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
