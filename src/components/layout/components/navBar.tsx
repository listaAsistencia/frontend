import logo from "../../../assets/logo.webp"
import { GeneralButton } from "../../buttons/generalButton";

export const NavBar: React.FC = () => {
    return (
        <nav className="bg-primary">
            <div className="flex flex-wrap justify-between items-center mx-auto p-4">
                <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-12" alt="Flowbite Logo" />
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <LogOutButton/>
                </div>
            </div>
        </nav>
    );
};

const LogOutButton = () => {
    const logOutFunction = () => {
        console.log("*Se desloguea*");
    }
     return (
     <GeneralButton text="Cerrar sesión" handleClick={logOutFunction}/>
    ); 
}