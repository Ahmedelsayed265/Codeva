import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./../layouts/RootLayout";
import NotFound from "./../routes/NotFound";
import Home from "./../routes/Home";
import Portfolio from "../routes/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
