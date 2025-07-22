import { Link } from "react-router-dom";
import { UserIcon } from "../icons/userIcon";
import { RightArrowIcon } from "../icons/rightArrow";

export const ProfileCard: React.FC = () => {
  return (
    <div className="w-full h-full p-6 border-2 border-gray-200 rounded-lg shadow-inner flex items-center justify-center flex-col gap-3">
      {/* icono */}
      <div className="w-[80%] lg:w-[60%] text-center p-2 bg-primary rounded-t-lg border-2 border-gray-200 rounded-lg shadow-inner">
        <UserIcon />
        <p className="pt-2 text-lg font-semibold text-gray-50">Eobard Thawne</p>
        <p className="pt-2 text-md font-semibold text-gray-50">dembele@gmail.com</p>
      </div>

      {/* opciones */}
      <Link
        to={"/attendance"}
        className="space-y-2 p-4 w-[80%] lg:w-[60%] border-2 border-gray-200 rounded-lg shadow-inner bg-white hover:bg-secondary transition-colors duration-300"
      >
        <div className="flex items-center px-4 py-3">
          <div className="text-green-600">
            <RightArrowIcon />
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800">Cambiar contraseña</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
