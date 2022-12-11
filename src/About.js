import Opening from './compenents/Opening';
import Info from './compenents/Info';
import classes from './about.module.css';
const SP = new URL("./Space.jpg", import.meta.url);
function About(){
return<section>
    <img src={SP} className={classes.space} alt="None"></img>
    <Opening Name="About me" intro="I love Programing"/>
    <div className={classes.grid}>
    <Info id="2" text="Who I am"/>
    <Info id="5" text="Core Values"/>
    <Info id="6" text="Past Experiences"/>
    <Info id="7" text="Career Goals"/>
    </div>

    <div className={classes.grid}>
    <Info id="8" text="Education" />
    <Info id="9" text="Skills" />
    <Info id="10" text="Hobbies" />

    </div>

</section>
}
export default About;
