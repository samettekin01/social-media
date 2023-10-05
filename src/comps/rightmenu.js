import { useContext } from "react";
import { CreateC } from "./ccontext";

import pic from "../style/favicon.png"

import "../style/rightmenu.css"

function RightMenu() {
    const data = useContext(CreateC)
    return (
        <div className="rightmenu-comp">
            <div className="user-prof-comp">
                <div className="user-pr-comp">
                    <img src={pic} className="user-icon" alt="UserIcon" />
                    <div className="rm-prnn">
                        <a href="#pr" className="user-pr-name"><span>Your Profile Nick</span></a>
                        <span className="rm-yrp">Your Profile Name</span>
                    </div>
                    <div className="user-pr-chng"><a href="#h" className="rm-user-flw">Change</a></div>
                </div>
            </div>
            <div className="rm-recd-user"><span className="rm-rd">Suggestions for you</span></div>
            {data.length > 0 ? data.map((d, i) =>
                <div className="rightmenu" key={i}>
                    <div className="rm-users-comp">
                        <img className="rm-user-pic" src={d.picture.large} alt={d.name.first} />
                        <div className="rm-u-cm">
                            <a href="#su" className="rm-user-name"><span>{d.name.first}</span></a>
                            <span className="rm-ruser">Suggestions for you</span>
                        </div>
                        <div className="rm-user-fl-comp"><a href="#h" className="rm-user-flw">Follow</a></div>
                    </div>
                </div>
            ) : "No Data"}
        </div>
    )
}

export default RightMenu;