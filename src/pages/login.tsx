import React, { useState } from 'react';
import { NavBar } from '../components/layout/components/navBar';
import { Footer } from '../components/layout/components/footer';
import { GeneralButton } from '../components/buttons/generalButton';
import { showErrorNotification, showSuccessNotification } from '../utils/notifications/toasts';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
const API_LOGIN = import.meta.env.VITE_API_LOGIN;

        try {
          const response = await fetch(API_LOGIN, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
});


            const data = await response.json();
            if(!response.ok || !data.success){
                const errorMessage = data.message || data.error || 'Error al iniciar sesión';
            showErrorNotification(errorMessage);
            return;
            }

            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userRole', data.role);
                localStorage.setItem('userName', data.name);
                localStorage.setItem('userEmail', data.email);
                showSuccessNotification(`Bienvenido/a ${data.name}`);

                if(data.role==='docente'){
                    navigate("/home");
                }else{
                    navigate("/student")
                }
            } else {
                const errorMessage = data.message||data.error|| "Error desconocido";
                showErrorNotification(errorMessage);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            showErrorNotification('Error al iniciar sesión');
        }
    };

    return (
        <>
            <NavBar hideLogout />
            <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative py-3 mx-auto text-center w-full max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-0">
                    <span className="text-xl md:text-2xl font-bold mb-6 block">Iniciar sesión con sus credenciales.</span>
                    <div className="mt-6 bg-white shadow-lg rounded-lg text-left">
                        <div className="h-3 bg-primary rounded-t-md" />
                        <form onSubmit={handleSubmit} className="px-10 py-8">
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
                            <div className="mb-6">
                                <label className="block text-lg font-bold">Contraseña</label>
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    className="border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <GeneralButton text="Iniciar sesión" type="submit" hoverBgWhite={false} />
                                <a href='/sendmail' className="text-sm font-bold hover:underline text-gray-600 hover:text-primary">¿Olvidaste la contraseña?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};