import { createContext, useEffect, useState } from "react"

export const UserCommentContext = createContext()

export const UserCommentProvider = (props) => {
    const [userComments, setUserComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=5`)
            .then(r => r.json())
            .then(p => setUserComments(p))
            .catch(e => console.log(e))
    }, [props.dataComment])
    return (
        <UserCommentContext.Provider value={userComments}>{props.children}</UserCommentContext.Provider>
    )}
