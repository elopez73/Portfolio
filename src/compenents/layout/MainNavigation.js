import { Link } from "react-router-dom";
import classes from './Nav.module.css';

function MainNavigation() {
	return (

		<header className={classes.navBar}>
			<div className={classes.dropdown}>
				<button className={classes.dropbtn}>Menu</button>
			<nav>
			<div className={classes.dropdownContent}>
				<ul>
					<li>
						<Link to="/#">Home</Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
					<li>
						<Link to="/Projects">Projects</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
				</div>
			</nav>

			</div>
		</header>

	);
}
export default MainNavigation;
