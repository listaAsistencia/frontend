import React from 'react';
import { NavBar } from '../components/layout/components/navBar';
import { Footer } from '../components/layout/components/footer';
import { GeneralButton } from '../components/buttons/generalButton';
import { useForgotPasswordStore } from '../store/forgotPasswordStore';
import { showErrorNotification, showSuccessNotification } from '../utils/notifications/toasts';

export const VerificationCode: React.FC = () => {
  const [code, setCode] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const { setStep, setCode: setCodeStore, email } = useForgotPasswordStore();
  body: JSON.stringify({ email, code }) 

  
const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
    showErrorNotification('Por favor ingrese el código de verificación');
    return;
  }
  setLoading(true);

    try {
      const currentEmail = email || localStorage.getItem('forgotPasswordEmail');
    
    if (!currentEmail) {
      showErrorNotification('No se encontró el correo electrónico');
      setStep('sendMail');
      return;
    }
      const response = await fetch(import.meta.env.VITE_API_VERIFY_CODE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:currentEmail, code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Código inválido');
      }

      showSuccessNotification('Código verificado correctamente');
      setCodeStore(code);
      setStep('resetPassword');
    } catch (error: any) {
      showErrorNotification(error.message || 'Código inválido o expirado');
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
            Ingrese el código de verificación enviado a su correo electrónico.
          </span>
          <div className="mt-6 bg-white shadow-lg rounded-lg text-left">
            <div className="h-3 bg-primary rounded-t-md" />
            <form onSubmit={handleSubmit} className="px-10 py-8">
              <div className="mb-6">
                <label className="block text-lg font-bold">Código de verificación</label>
                <input
                ref={inputRef}
                  type="text"
                  placeholder="Código de verificación"
                  className="border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <GeneralButton
                  text={loading ? 'Verificando...' : 'Verificar Código'}
                  type="submit"
                  hoverBgWhite={false}
                  disabled={loading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
