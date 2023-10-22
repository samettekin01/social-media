import { BsHouse, BsCompass, BsFilm, BsFilePlus, BsChat, BsPersonCircle, BsFillHouseFill } from "react-icons/bs";

import "../bottomMenu/bottomMenu.css"
import { NavLink } from "react-router-dom";
import Btn from "../button/button";

function BottomMenu() {
    return (
        <div className="bottommenu-comp">
            <NavLink to="/" className="nav">
                {({ isActive }) => (
                    <Btn>
                        {isActive && <BsFillHouseFill className="icons" />}
                        {!isActive && <BsHouse className="icons"/>}
                    </Btn>
                )}
            </NavLink>
            <button className="btn"><BsCompass className="icons" /></button>
            <button className="btn"><BsFilm className="icons" /></button>
            <button className="btn"><BsFilePlus className="icons" /></button>
            <div className='intf-comp'><div className='btncont-notf'>+99</div> <button className="btn"><BsChat className="icons" /></button></div>
            <button className="btn"><BsPersonCircle className="icons" /></button>
        </div>
    )
}

export default BottomMenu;