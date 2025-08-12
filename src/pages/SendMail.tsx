import React from 'react';
import { NavBar } from '../components/layout/components/navBar';
import { Footer } from '../components/layout/components/footer';
import { GeneralButton } from '../components/buttons/generalButton';
import { useForgotPasswordStore } from '../store/forgotPasswordStore';
import { showErrorNotification, showSuccessNotification } from '../utils/notifications/toasts';

export const SendMail: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const { setMail, setStep } = useForgotPasswordStore();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      showErrorNotification('Por favor ingrese un correo electrónico válido');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch(import.meta.env.VITE_API_VERIFICATION_CODE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el código');
      }

      setMail(email);
      setStep('verificationCode');
      showSuccessNotification('Código de verificación enviado a tu correo');
    } catch (error: any) {
      showErrorNotification(error.message || 'El correo no existe en nuestra base de datos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar hideLogout />
      <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative py-3 mx-auto text-center w-full max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-0">
          <span className="text-xl md:text-2xl font-bold mb-6 block">
            Ingrese su correo electrónico para recibir un código de verificación
          </span>
          <div className="mt-6 bg-white shadow-lg rounded-lg text-left">
            <div className="h-3 bg-primary rounded-t-md"/>
            <form onSubmit={handleSubmit} className="px-10 py-8">
              <div className='mb-6'>
                <label className="block text-lg font-bold">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <GeneralButton 
                  text={loading ? "Enviando..." : "Enviar código"} 
                  type="submit" 
                  hoverBgWhite={false} 
                  disabled={loading}
                />
              </div>                        
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};