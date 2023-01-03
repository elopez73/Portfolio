
function InfoList(props)
{
    const lists=props.li;


    return <div>
        <ul>
        {lists.map((lists,index) => (<li key={index}>{lists.In}</li>))}
        </ul>
    </div>
}
export default InfoList;
