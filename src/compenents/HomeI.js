import classes from './HomeI.module.css';


function HomeI(props)
{
    return(<div className={classes.main}>
        <div className={classes.Icard}>
        <div className={classes.image}><img src={props.image}></img></div>
        <div className={classes.introI}><h1 className={classes.head}>{props.Head}</h1>

             <p className={classes.para}>{props.par}</p></div>

        </div>

    </div>
    )
}
export default HomeI;
