import Opening from "./compenents/Opening";
import Info from "./compenents/Info";
import classes from './projects.module.css';

function Projects(){
    return<section id='project'>
    <Opening Name="Projects" intro="Below are Projects"/>
    <div className={classes.frames}>
        <div className={classes.frame}>
        <h1>CMS-1500 </h1>
        <p><a href="https://www.form-ins.com" target="_blank">Click here to open in a new tab</a></p>
        <iframe src="https://www.form-ins.com"  /></div>
        <div className={classes.frame}>
        <h1>Portfolio</h1>
        <p><a href="https://www.esaulopez.com" target="_blank">Click here to open in a new tab</a></p>
        <iframe  src="https://www.esaulopez.com" /></div>
        </div>
    </section>
}
export default Projects;
