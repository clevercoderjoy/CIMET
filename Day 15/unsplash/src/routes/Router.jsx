
import { createBrowserRouter } from 'react-router-dom';
import Results from '../components/results/Results';
import Home from '../pages/home/Home';
import App from "../App";

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
        path: "results",
        element: <Results />
      }
    ]
  }
])