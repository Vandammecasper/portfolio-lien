import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Projecten from "./components/pages/Projecten/Projecten";
import HorizontalDetail from "./components/pages/HorizontalDetail/HorizontalDetail";

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
    {
        path: "/photoshop",
        element: <Projecten />
    },
    {
        path: "/detail/:project/:name",
        element: <HorizontalDetail />
    }
])

export default router