import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Explore from '../pages/Explore';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "explore",
        children: [
          {
            path: "movies",
            element: <Explore />,
          },
          {
            path: "tv",
            element: <Explore />,
          },
        ]
      },
    ]
  }
]);
