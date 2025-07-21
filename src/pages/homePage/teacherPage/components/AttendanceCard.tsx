import { Link } from "react-router-dom"

export const PassAttendanceCard: React.FC = () => {
    return (
        <div className="w-full h-full p-6 mx-auto right-0 mt-2 border-2 border-gray-200 rounded-lg shadow-inner bg-white flex items-center justify-center flex-col gap-3">
            {/* icono */}
            <div className="w-[80%] lg:w-[60%] text-center p-6 bg-primary rounded-t-lg border-2 border-gray-200 rounded-lg shadow-inner">
                <svg className="w-24 h-24 mx-auto text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
                </svg>
                <p className="pt-2 text-lg font-semibold text-gray-50">Registro</p>
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
}