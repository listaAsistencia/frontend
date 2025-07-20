import React from 'react'
import { NavBar } from '../components/layout/components/navBar';
import { Footer } from '../components/layout/components/footer';

export const LoginPage: React.FC = () => {

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
    }

    return (
        <>
            <NavBar hideLogout/>
                 <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative py-3 sm:w-96 mx-auto text-center">
                <span className="text-lg font-bold mb-4">Iniciar sesión con sus credenciales.</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-primary rounded-t-md"/>
                    <form onSubmit={handleSubmit} className="px-8 py-6">
                        <label className="block font-bold">Correo electrónico</label>
                        <input
                            type="text"
                            placeholder="Correo electrónico"
                            className="border w-full h-5 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-primary focus:ring-1 rounded-md"
                        />
                        <label className="block font-bold">Contraseña</label>
                        <input
                            type="text"
                            placeholder="Contraseña"
                            className="border w-full h-5 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-primary focus:ring-1 rounded-md"
                        />

                        <div className="flex justify-between items-baseline">
                            <button
                                type="submit"
                                className="mt-4 bg-primary text-white py-2 px-6 rounded-md"
                            >Iniciar sesión
                            </button>
                            <a href='/' className="text-sm hover-underline">¿Olvidaste la contraseña?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    <Footer/>
        </>
    );
}