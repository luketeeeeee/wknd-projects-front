import { createBrowserRouter } from "react-router";

import { MainLayout } from "./layouts";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);
