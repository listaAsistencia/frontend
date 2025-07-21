import { Link } from "react-router-dom";

export const ProfileCard: React.FC = () => {
    return (
        <div className="w-full h-full p-6 mx-auto right-0 mt-2 border-2 border-gray-200 rounded-lg shadow-inner bg-white flex items-center justify-center flex-col gap-3">
            {/* icono */}
            <div className="w-[80%] lg:w-[60%] text-center p-6 bg-primary rounded-t-lg border-2 border-gray-200 rounded-lg shadow-inner">
                <svg
                    aria-hidden="true"
                    role="img"
                    className="h-24 w-24 text-white rounded-full mx-auto"
                    width="32"
                    height="32"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                >
                    <path
                        fill="currentColor"
                        d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                    />
                </svg>
                <p className="pt-2 text-lg font-semibold text-gray-50">Eobard Thawne</p>
            </div>

            {/* opciones */}
            <Link
                to={"/attendance"}
                className="space-y-2 p-4 w-[80%] lg:w-[60%] border-2 border-gray-200 rounded-lg shadow-inner bg-white hover:bg-secondary transition-colors duration-300">
                <div
                    className="flex items-center px-4 py-3"
                >
                    <div className="text-green-600">
                        <svg className="w-6 h-6 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                        </svg>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800">Tomar asistencia</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};