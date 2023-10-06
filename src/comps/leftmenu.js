/* Styles */
import '../style/LMenu.css';

/* Icons */
import { BsHouse, BsSearch, BsCompass, BsFilm, BsChat, BsHeart, BsFilePlus, BsPersonCircle, BsPersonBadge, BsFillHouseFill } from "react-icons/bs";

/* Other Components */
import Btn from "./button";
import MoreMenu from './moremenu';
import { NavLink } from 'react-router-dom';

function LMenu() {
    return (
        <div className="comp">
            <div className="lmbtn">
                <div className='social-media-icon-comp'><BsPersonBadge className="sm-i" /><span className='sm-icon'>Social Media</span></div>
                <NavLink to="/" className='nav'>
                    {({ isActive }) => (
                        <Btn>
                            {isActive && <BsFillHouseFill className='icons' />}
                            {!isActive && <BsHouse className='icons' />}
                            <span className='btncont' style={isActive ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>Home</span>
                        </Btn>
                    )}
                </NavLink>
                <Btn><BsSearch className='icons' /><span className='btncont'>Search</span></Btn>
                <Btn><BsCompass className='icons' /><span className='btncont'>Explore</span></Btn>
                <Btn><BsFilm className='icons' /><span className='btncont'>Reels</span></Btn>
                <Btn><div className='intf-comp'><div className='btncont-notf'>+99</div><BsChat className='icons' /></div><span className='btncont'>Messages</span></Btn>
                <Btn><div className='intf-comp'><div className='btncont-notf'>+99</div><BsHeart className='icons' /></div><span className='btncont'>Notification</span></Btn>
                <Btn><BsFilePlus className='icons' /><span className='btncont'>Create</span></Btn>
                <Btn><BsPersonCircle className='icons' /><span className='btncont'>Profile</span></Btn>
                <MoreMenu />
            </div>
        </div >
    )
}

export default LMenu;