import classes from './Open.module.css';
function Opening(props){
    return<div className={classes.open}>
        <p className={classes.info}>{props.intro}</p>
        <h1>{props.Name}</h1>
        <p className={classes.info}>{props.p1}</p>



    </div>
}
export default Opening;
