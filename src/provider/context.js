import { createContext, useEffect, useState } from "react";

export const CreateC = createContext();

export function CeCProvider(props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${props.numUser}`)
            .then(r => r.json())
            .then(p => setUsers(p.results))
            .catch(e => console.error(e))
    }, [props.numUser])
    return (
        <CreateC.Provider value={users}>{props.children}</CreateC.Provider>
    )}