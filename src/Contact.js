import Opening from "./compenents/Opening";
import ContactI from "./compenents/ContactI";
import classes from "./contact.module.css";
import { Emailsend } from "./compenents/Emailsend";
const li = new URL("./Link.png", import.meta.url);
const gm = new URL("./gmail.png", import.meta.url);
const ph = new URL("./phone.png", import.meta.url);

function Contact(){


    return<section id ="Contact">
        <Opening Name="Contact" intro="Contact information"/>
        <div className={classes.lists}>

        <ul>
            <li><ContactI text="Linkedin" cinfo="https://www.linkedin.com/in/esau-lopez-1a5700b9" img={li}/></li>
            <li><ContactI text="Email" contactI="esaulopezdevs@gmail.com" img={gm}/></li>
            <li><ContactI text="Phone number" contactI="951-445-3740"img={ph}/></li>
        </ul>

        <div className={classes.line}></div>

        <div className={classes.forms}><Emailsend /></div>
        </div>


    </section>
}
export default Contact;
