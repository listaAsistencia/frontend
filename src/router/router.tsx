import {createBrowserRouter} from "react-router-dom";
import { AuthDetector } from "../components/auth/authDetector";
import { Routes } from "./routes";
import { ErrorPage } from "../pages/errorPage";

export const router = createBrowserRouter([
    {
        element:<AuthDetector/>,
        children: [Routes],
        errorElement:<ErrorPage />,
    }
])