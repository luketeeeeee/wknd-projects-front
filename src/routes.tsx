import { createBrowserRouter } from "react-router";

// pages imports
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
])