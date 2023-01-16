
import classes from './ContactI.module.css';
function ContactI(props) {
	return (
		<div id={props.id} className="card">
			<h1>{props.text}<div className={classes.im}>
            <img className={classes.image} src={props.img}></img>
            </div>
            </h1>
			<div className={classes.contactI}>
				<a href={props.cinfo} target="_blank">{props.cinfo}</a>
                <p>{props.contactI}</p>
			</div>
		</div>
	);
}

export default ContactI;
