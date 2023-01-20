import Opening from "./compenents/Opening";
import Info from "./compenents/Info";
import classes from "./projects.module.css";

function Projects() {
	return (
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
				<h1>Portfolio</h1>
						<p>
						<a href="https://www.esaulopez.com" target="_blank">
							Click here to open in a new tab
						</a>

						</p>
						<p>
							Portfolio website currently in development.
						</p>
					</div>

					<p>

					</p>
					<iframe src="https://www.esaulopez.com" />
				</div>
			</div>
		</section>
	);
}
export default Projects;
