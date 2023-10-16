import { useState } from "react"
import { BsHeart, BsFillHeartFill } from "react-icons/bs"

export default function LikeButton() {
    const [like, setLike] = useState(false)
    const a = () => { setLike(i => !i) }
    return (
        <button onClick={a} style={{ backgroundColor: "transparent", border: 'none', display: "flex", justifyContent: "center", alignItems: "center" }}>
            {!like ? <BsHeart className="inter-icon" /> : <BsFillHeartFill className="inter-icon" style={{ color: "red" }} />}
        </button>
    )
}