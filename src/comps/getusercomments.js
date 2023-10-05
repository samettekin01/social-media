import { useContext, useState } from "react";
import { UserCommentContext } from "./comments";
import { BsHeart } from "react-icons/bs";

import "../style/getusercomments.css"

function GetUserComments() {
    const data = useContext(UserCommentContext)
    const [gucshow, setGucShow] = useState({ display: 'none' })
    const [status, setStatus] = useState(true)
    console.log(data)

    function settingGuc() {
        if (status) {
            setGucShow({ display: 'block' })
            setStatus(false)
        } else {
            setGucShow({ display: 'none' })
            setStatus(true)
        }
    }

    return (
        <div className="gucomments-comp" >
            <button className="guc-btn" onClick={settingGuc}>{status ? `...more comments (${data.length})` : '...less comments'}</button>
            <div className="guc-gcomp" style={gucshow} >
                {data.length > 0 ? data.map((uscom, i) =>
                    <div className="gusdata" key={i}>
                        <div className="uscom">
                            <div>
                                <a href="#gn" className="guc-nick"><span>{`${uscom.name.slice(0, 6)} `} </span></a>
                                <span className="guc-com">{`${uscom.body}`}</span>
                            </div>
                            <div className="guc-li"><BsHeart /></div>
                        </div>
                        <div className="guc-i">
                            <a href="#l" className="guc-a">like</a><a href="#a" className="guc-a">answer</a>
                        </div>
                    </div>
                ) : "No Comment"}
            </div>
        </div >
    )
}

export default GetUserComments;