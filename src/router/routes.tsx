import { RouteObject } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/homePage";
import { ProfilePage } from "../pages/profilePage";
import { AttendancePage } from "../pages/attendance";
import { ErrorPage } from "../pages/errorPage";

export const Routes: RouteObject  = {
    caseSensitive: true,
    path: "/",
    children: [
        {path: "login", element: <LoginPage />},
        {path: "home", element: <HomePage />}, // dashboard
        //perfil de estudiante o profesor
        {path: "profile", element: <ProfilePage />},
        //página de profesor para pasar lista
        {path: "attendance", element: <AttendancePage />}
    ]
}