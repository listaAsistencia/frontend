import {createBrowserRouter} from "react-router-dom";
import { AuthDetector } from "../components/auth/authDetector";
import { routes } from "./routes";
import { ErrorPage } from "../pages/errorPage";

export const router = createBrowserRouter([
    {
        element:<AuthDetector/>,
        errorElement:<ErrorPage />,
        children: routes
    }

])