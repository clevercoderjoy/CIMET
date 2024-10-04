import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Result from '../pages/Result';
import Form from "../components/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Form />
      },
      {
        path: "results",
        element: <Result />
      },
    ]
  }
])