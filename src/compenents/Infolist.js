import classes from "./Ilist.module.css";
function InfoList(props)
{
    const lists=props.li;


    return <div>
        <ul className={classes.Cul}>
        {lists.map((lists,index) => (<li key={index}>{lists.In}</li>))}
        </ul>
    </div>
}
export default InfoList;
