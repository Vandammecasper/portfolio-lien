import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Projecten from "./components/pages/Projecten/Projecten";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/design",
        element: <Projecten />
    },
    {
        path: "/fotografie",
        element: <Projecten />
    },
])

export default router