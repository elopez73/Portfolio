function Modal(props){
    return(
        <div id = {props.id} className="modal">
        <p> Information</p>
        <button className="btn btn--alt"onClick={props.onClick} >Return</button>
    </div>
    );
}
export default Modal;
