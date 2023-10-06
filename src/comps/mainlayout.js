import { Outlet } from "react-router-dom";
import LMenu from "./leftmenu";

function MainLayout(){
    return(
        <div style={{
            display: "flex",
        }}>
        <LMenu />
        <Outlet />
        </div>
    )
}

export default MainLayout;