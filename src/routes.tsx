import { createBrowserRouter } from "react-router";

import { MainLayout } from "./layouts";
import { AuthPage } from "./pages/Auth";
import { Home } from "./pages/Home";

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
