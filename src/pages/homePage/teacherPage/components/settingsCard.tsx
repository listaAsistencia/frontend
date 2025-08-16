import { Link } from "react-router-dom"
import { UserSettingsIcon } from "../../../../components/icons/userSettingsIcon";
import { RightArrowIcon } from "../../../../components/icons/rightArrow";

export const SettingsCard: React.FC = () => {
    return (
        <div className="w-full h-full p-6 border-2 border-gray-200 rounded-lg shadow-inner flex items-center justify-center flex-col gap-3">
            {/* icono */}
            <div className="w-[80%] lg:w-[60%] text-center p-2 bg-primary rounded-t-lg border-2 border-gray-200 rounded-lg shadow-inner">
                <UserSettingsIcon />
                <p className="pt-2 text-lg font-semibold text-gray-50">Ajustes</p>
            </div>

            {/* opciones */}
            <Link
                to={"/manage"}
                className="space-y-2 p-4 w-[80%] lg:w-[60%] border-2 border-gray-200 rounded-lg shadow-inner bg-white hover:bg-secondary transition-colors duration-300">
                <div
                    className="flex items-center px-4 py-3"
                >
                    <div className="text-green-600">
                        <RightArrowIcon />
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800">Gestionar alumnos</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}