import classes from "./Info.module.css";

function Info(props) {
	return (
		<div id={props.id} className="card">
			<h1>{props.text}</h1>
			<div className={classes.info1}>
				<p>{props.info1}</p>
				<div className={classes.im}>
					<img src={props.img}></img>
				</div>
			</div>
		</div>
	);
}

export default Info;
