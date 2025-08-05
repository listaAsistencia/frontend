import logo from "../../../assets/logo.webp"
import { GeneralButton } from "../../buttons/generalButton";
import { useNavigate } from "react-router-dom";

type Props ={
    hideLogout?: boolean;

};
export const NavBar: React.FC<Props> = ({hideLogout=false}) => {
    return (
        <nav className="bg-primary">
            <div className="flex flex-wrap justify-center gap-3 md:justify-between items-center mx-auto p-4">
                <a href="https://fusalmo.org/salesianos/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-10 md:h-12"  alt="Logo fusalmo" />
                </a>
                {!hideLogout &&(
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <LogOutButton/>
                </div>
                )}
            
            </div>
        </nav>
    );
};

const LogOutButton = () => {
    const navigate=useNavigate();
    const logOutFunction = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
     return (
     <GeneralButton text="Cerrar sesión" handleClick={logOutFunction} />
    ); 
}