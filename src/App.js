import { Routes, Route, useLocation } from "react-router-dom";
import MainNavigation from "./compenents/layout/MainNavigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import classes from "./apps.module.css";
import { AnimatePresence } from "framer-motion";
const BG = new URL("./Background.jpg", import.meta.url);


function App() {
	const location =useLocation();
	return (
		<section className={classes.apps}>
	<img src={BG} className={classes.bg} alt="None"></img>
			<MainNavigation />
			<AnimatePresence mode="wait">
			<Routes  key={location.pathname} location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			</AnimatePresence>


		</section>

	);
}

export default App;
