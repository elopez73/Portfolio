import { Link } from "react-router-dom";
import classes from './Nav.module.css';

function MainNavigation() {
	return (

		<header className={classes.navBar}>

			<nav>
			<div className={classes.badge}>

			</div>
				<ul>
					<li>
						<Link to="/">Home</Link>
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
			</nav>
		</header>

	);
}
export default MainNavigation;
