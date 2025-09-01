import React, { useState } from 'react';
import { NavBar } from '../../components/layout/components/navBar';
import { Footer } from '../../components/layout/components/footer';
import { GeneralButton } from '../../components/buttons/generalButton';
import { showErrorNotification, showSuccessNotification } from '../../utils/notifications/toasts';
import { EyeIcon } from '../../components/icons/eyeIcon';
import { useNavigate } from 'react-router-dom';

export const RegisterStudent: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const apiUrl = import.meta.env.VITE_BASE_URL + "auth/register";

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            let data;
            try {
                data = await response.json();
            } catch {
                showErrorNotification('Error al procesar la respuesta del servidor');
                return;
            }

            if (!response.ok || !data.success) {
                const errorMessage = data.message || data.error || 'Error al iniciar sesión';
                showErrorNotification(errorMessage);
                return;
            }

            if (data) {
                showSuccessNotification(`Estudiante registrado exitosamente`);
            } else {
                const errorMessage = data.message || data.error || "Error desconocido";
                showErrorNotification(errorMessage);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            showErrorNotification('Error al reigstrar el usuario');
        }
    };

    return (
        <>
            <NavBar hideLogout />
            <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative py-3 mx-auto text-center w-full max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-0">
                    <span className="text-xl md:text-2xl font-bold mb-6 block">Registrar estudiante.</span>
                    <div className="mt-6 bg-white shadow-lg rounded-lg text-left">
                        <div className="h-3 bg-primary rounded-t-md" />
                        <form onSubmit={handleSubmit} className="px-10 py-8">
                            <div className="mb-6">
                                <label className="block text-lg font-bold">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-lg font-bold">Correo electrónico</label>
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6 relative">
                                <label className="block text-lg font-bold">Contraseña</label>
                                <input
                                    type={mostrarPassword ? "text" : "password"}
                                    placeholder="Contraseña"
                                    className="border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-10 text-gray-600 hover:text-gray-900"
                                    onClick={() => setMostrarPassword(!mostrarPassword)}
                                    aria-label={mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    title={mostrarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    <EyeIcon />
                                </button>

                            </div>
                            <div className="flex justify-between items-center">
                                <GeneralButton text="registrar" type="submit" hoverBgWhite={false} />
                                {/* <a href='/sendmail' className="text-sm font-bold hover:underline text-gray-600 hover:text-primary">¿Olvidaste la contraseña?</a> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};