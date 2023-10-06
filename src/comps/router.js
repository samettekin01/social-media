import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "./errorpage"

const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />        
        }
    ])

export default router;