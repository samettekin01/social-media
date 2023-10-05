import { BsHouse, BsCompass, BsFilm, BsFilePlus, BsChat, BsPersonCircle } from "react-icons/bs";

import "../style/bottommenu.css"

function BottomMenu(){
    return(
        <div className="bottommenu-comp">
            <button className="btn"><BsHouse className="icons"/></button>
            <button className="btn"><BsCompass className="icons" /></button>
            <button className="btn"><BsFilm className="icons" /></button>
            <button className="btn"><BsFilePlus className="icons" /></button>
            <div className='intf-comp'><div className='btncont-notf'>+99</div> <button className="btn"><BsChat className="icons" /></button></div>
            <button className="btn"><BsPersonCircle className="icons" /></button>
        </div>
    )
}

export default BottomMenu;