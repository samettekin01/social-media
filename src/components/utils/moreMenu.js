import { BsList, BsGearWide, BsFillClockFill, BsBookmark, BsYinYang, BsShieldExclamation, BsFillPersonLinesFill, BsDoorOpen } from "react-icons/bs";
import { Popover } from '@headlessui/react'

function MoreMenu() {
    return (
        <Popover className={'bmore'}>
            <Popover.Button className={"btn"} style={{width: "97%"}}><BsList className="icons "/><span className="btncont">More</span></Popover.Button>
            <Popover.Panel className={"lmore-menu"}>
                <button className="btn2"><BsGearWide className='icons' />Settings</button>
                <button className="btn2"><BsFillClockFill className='icons' />Moves</button>
                <button className="btn2"><BsBookmark className='icons'></BsBookmark>Saved</button>
                <button className="btn2"><BsYinYang className='icons' />Change View</button>
                <button className="btn2"><BsShieldExclamation className='icons' />Feedback</button>
                <div className="lm-menu-hr"></div>
                <button className="btn2"><BsFillPersonLinesFill className='icons' />Change Account</button>
                <div className="lm-menu-hr"></div>
                <button className="btn2"><BsDoorOpen className='icons' />Sign Out</button>
            </Popover.Panel>
        </Popover>
    )
}

export default MoreMenu;