import { Routes, Route } from "react-router-dom";
import MainNavigation from "./compenents/layout/MainNavigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import classes from "./apps.module.css";




function App() {
	return (
		<section className={classes.apps}>

			<MainNavigation />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>



		</section>

	);
}

export default App;
