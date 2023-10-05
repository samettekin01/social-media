import { useContext } from "react";
import { CreateC } from "./ccontext";

import { BsHeart, BsChat, BsSend, BsBookmark } from "react-icons/bs";

import GetUserComments from "./getusercomments";

import "../style/content.css"

function Content() {
    const data = useContext(CreateC)
    console.log(data)
    return (
        <div className="main-contcomp">
            {data.length > 0 ? data.map((d, i) =>
                <div className="a-cont-comp" key={i}>
                    <div className="f-contcomp">
                        <div className="user-comp">
                            <div className="ccbackimg">
                                <img src={d.picture.large} className="ccpic" alt={d.name.first} />
                            </div>
                            <div className="cusercomp"><span className="spanuser">{d.login.username}</span><div className="cdot">.</div><div className="ucdate">{`${new Date(d.registered.date).getFullYear()}`}</div></div>
                        </div>
                        <div className="cont-comp">
                            <img className="cont-comp-c" src={d.picture.large} alt={d.name.first} />
                        </div>
                        <div className="inter-comp">
                            <BsHeart className="inter-icon" />
                            <BsChat className="inter-icon" />
                            <BsSend className="inter-icon" />
                            <div><BsBookmark className="inter-icon" /></div>
                        </div>
                        <div className="likes-comp">
                            <div className="likes-users"><span className="li-us">Likes</span></div>
                        </div>
                        <div className="explanation-comp">
                            <div className="expl-user">
                                <span className="ex-us">
                                    {d.login.username}: {`${d.location.state} / ${d.location.country}`}
                                </span>
                            </div>
                        </div>
                        <div className="comment-comp">
                            <div className="com-users"><span className="com-us"><GetUserComments/></span></div>
                        </div>
                        <div className="message-comp">
                            <input type="text" className="mss-text" placeholder="Yorum ekle..." />
                        </div>
                        <div className="hr-comp">
                            <div className="cont-hr"></div>
                        </div>
                    </div>
                </div>) : "No Data"
            }
        </div >
    )
}

export default Content;