import { useContext, useEffect, useRef, useState } from "react";
import { CreateC } from "./ccontext";

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

/* Styles */
import "../style/story.css"

function StoryUsers() {
    const iuser = useContext(CreateC)
    const [slider, setSlider] = useState(0);
    const [lbtnv, setLbtnv] = useState({display: 'none'})
    const [rbtnv, setRbtnv] = useState({display: 'block'})
    const comptw = useRef(null);
    const wdval = comptw.current;
    const wdlong = 80 * iuser.length
    useEffect(() => {
        const compt = document.querySelector(".storycomp");
        comptw.current = compt.offsetWidth;
    }, [])

    const leftStorySlider = () => {
        slider < 0 && setSlider(slider => slider + 80);
        slider >= -80 && setLbtnv({display: 'none'})
        setRbtnv({display: 'block'})
    };

    const rightStorySlider = () => {
        wdval - wdlong < slider ? setSlider(slider => slider - 80) : setRbtnv({display: 'none'});
        setLbtnv({display: 'block'});
    };

    return (
        <div className="story-compt">
            <div className="compt" style={{ transform: `translateX(${slider}px)` }}>
                {iuser.length > 0 ? iuser.map((d, i) =>
                    <div className="usercomp" key={i}>
                        <div className="imgback">
                            <img className="upic" src={d.picture.large} alt={d.login.username} />
                        </div>
                        <div className="uname"><span className="username">{d.login.username}</span></div>
                    </div>
                ) : "No Data"}
            </div>
            <div className="s-leftbtn" style={lbtnv}><BsFillArrowLeftCircleFill onClick={leftStorySlider} /></div>
            <div className="s-rightbtn" style={rbtnv}><BsFillArrowRightCircleFill onClick={rightStorySlider} /></div>
        </div>
    )
}

export default StoryUsers;