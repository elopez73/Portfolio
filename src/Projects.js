import Opening from "./compenents/Opening";
import Animated from "./compenents/Animated";
import classes from "./projects.module.css";

function Projects() {
	return (<Animated>
		<section id="project">
			<Opening Name="Projects" intro="Current Projects" />
			<div className={classes.frames}>

				<div className={classes.frame}>
				<div className={classes.info}>
						<h1>CMS-1500 </h1>
						<p>
							<a href="https://www.form-ins.com" target="_blank">
								Click here to open in a new tab
							</a>
						</p>
						<p>
							I am currently employed by AZCOMP Technologies as an EMR Support
							Specialist and Report Developer.
							<br />
							After learning a software we support called "Medisoft" I developed
							this webpage to assist Medical Billers.
							<br />
							The website is a guide that shows them locations within the
							program that correlates with the Medical form they use
							<br />
							known as the CMS-1500. It also includes electronic locations for
							billers that send electronically.
						</p>
					</div>
					<iframe src="https://www.form-ins.com" />
				</div>

				<div className={classes.frame}>
				<div className={classes.info}>
				<h1>Check List</h1>
						<p>
						<a href="https://main--golden-panda-a78175.netlify.app" target="_blank">
							Click here to open in a new tab
						</a>

						</p>
						<p>
							Check List Website currently in development.
						</p>
						<p>
							Following REST API design rules and parsed multiple data types into JSON in the responses.
						</p>
					</div>

					<p>

					</p>
					<iframe src="https://main--golden-panda-a78175.netlify.app/" />
				</div>
			</div>
		</section>
		</Animated>
	);
};
export default Projects;
