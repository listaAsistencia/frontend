import { useNavigate } from "react-router-dom";

export const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    const handleVolver = () => navigate(-1);
    return (
        <div className="flex items-center justify-center min-h-screen bg-overlay_1">
            <div className="p-8 text-center bg-overlay_1 rounded-lg shadow-primary shadow-md">
                <h1 className="text-6xl font-bold text-custom_white mb-2">404</h1>
                <p className="text-xl text-custom_white">
                    ¡Oops! La página que buscas no se encuentra.
                </p>

                <button
                onClick={handleVolver}
                    className="mt-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-custom_white hover:text-overlay_1 transition duration-300"
                >
                    Volver Atrás
                </button>
            </div>
        </div>
    );
}