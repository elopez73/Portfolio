import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Info(props)
{
const[modalIsOpen, setModalIsOpen] = useState(false);
function showHandler(){
    setModalIsOpen(true);
}
function closeModalHandler()
{
    setModalIsOpen(false);
}
    return(
        <div id={props.id} className='card'>
            <h1>{props.text}</h1>
            <div className='actions'>
                <button className='btn' onClick={showHandler}>Show More</button>
            </div>
            {modalIsOpen && <Modal id={props.id} onClick={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}

        </div>
    );
}

export default Info;
