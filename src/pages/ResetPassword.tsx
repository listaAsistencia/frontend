import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/layout/components/navBar';
import { Footer } from '../components/layout/components/footer';
import { GeneralButton } from '../components/buttons/generalButton';
import { showErrorNotification, showSuccessNotification } from '../utils/notifications/toasts';
import { useForgotPasswordStore } from '../store/forgotPasswordStore';
import { validatePassword } from '../utils/password/validatepass';
export const ResetPassword: React.FC<{ flow: 'recovery' | 'change' }> = ({ flow = 'recovery' }) => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ current: '', newPass: '', confirm: '' });
  const [touched, setTouched] = useState({ current: false, newPass: false, confirm: false });
  const handleBlur = (field:'current'|'newPass'|'confirm') => {
  setTouched(prev=>({ ...prev, [field]: true }));
};
useEffect(()=>{
  if (touched.current || touched.newPass || touched.confirm) {
    validate();
  }
}, [current, newPass, confirm, touched]);
  const { email, code, reset } = useForgotPasswordStore();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = { current: '', newPass: '', confirm: '' };
    let valid = true;

    if (flow === 'change' && !current) {
      newErrors.current = 'La contraseña actual es requerida';
      valid = false;
    }

    const passwordError = validatePassword(newPass);
    if (passwordError) {
      newErrors.newPass = passwordError;
      valid = false;
    }

    if (!confirm) {
      newErrors.confirm = 'Confirmar contraseña es requerido';
      valid = false;
    } else if (newPass !== confirm) {
      newErrors.confirm = 'Las contraseñas no coinciden';
      valid = false;
    }

    setError(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);
  try {
    const finalEmail = email || localStorage.getItem('forgotPasswordEmail');
    const finalCode = code || localStorage.getItem('forgotPasswordCode');

    const endpoint = flow === 'change'
      ? import.meta.env.VITE_API_CHANGEPASSWORD
      : import.meta.env.VITE_API_RESETPASSWORD;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (flow === 'change') {
      const token = localStorage.getItem('token');
      if (!token) {
        showErrorNotification('No estás autenticado');
        navigate('/login');
        return;
      }
      headers['Authorization'] = `Bearer ${token}`;
    }

    const body = flow === 'change'
      ? { currentPassword: current, newPassword: newPass }
      : { email: finalEmail, code: finalCode, newPassword: newPass };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      try {
        const errorData = JSON.parse(errorText);
        showErrorNotification(errorData.message || 'Error');
      } catch {
        showErrorNotification(errorText || 'Error en el servidor');
      }
      return;
    }

    const data = await response.json();
    showSuccessNotification(data.message || 'Contraseña cambiada');
    reset();
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('attendances');
    navigate('/login');
  } catch (error) {
    console.error(error);
    showErrorNotification('Error de conexión');
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      <NavBar hideLogout={flow === 'recovery'} />
      <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative py-3 mx-auto text-center w-full max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-0">
          <span className="text-xl md:text-2xl font-bold mb-6 block">
            {flow === 'change' ? 'Cambiar contraseña' : 'Establecer nueva contraseña'}
          </span>
          <div className="mt-6 bg-white shadow-lg rounded-lg text-left">
            <div className="h-3 bg-primary rounded-t-md"/>
            <form onSubmit={handleSubmit} className="px-10 py-8">
              {flow === 'change' && (
                <div className='mb-6'>
                  <label className="block text-lg font-bold">Contraseña Actual</label>
                  <input
                    type="password"
                    placeholder="Contraseña actual"
                    className={`border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg ${
                      error.current ? 'border-red-500' : ''
                    }`}
                    value={current}
                    onChange={(e) => { setCurrent(e.target.value)}}
                  />
                  {error.current && <p className="text-red-500 text-sm mt-1">{error.current}</p>}
                </div>
              )}
              <div className='mb-6'>
                <label className="block text-lg font-bold">Nueva contraseña</label>
                <input
                  type="password"
                  placeholder="Nueva contraseña"
                  className={`border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg ${
                    error.newPass ? 'border-red-500' : ''
                  }`}
                  value={newPass}
                  onChange={(e) => { setNewPass(e.target.value)}}
                />
                {error.newPass && <p className="text-red-500 text-sm mt-1">{error.newPass}</p>}
                <p className="text-gray-500 text-sm mt-1">
                  La contraseña debe tener al menos 8 caracteres, un carácter especial, una mayúscula y un número
                </p>
              </div>
              <div className='mb-6'>
                <label className="block text-lg font-bold">Confirmar contraseña</label>
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  className={`border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg ${
                    error.confirm ? 'border-red-500' : ''
                  }`}
                  value={confirm}
                  onChange={(e) => { setConfirm(e.target.value)}}
                />
                {error.confirm && <p className="text-red-500 text-sm mt-1">{error.confirm}</p>}
              </div>
              <div className="flex justify-between items-center">
                <GeneralButton 
                  text={loading ? "Procesando..." : flow === 'change' ? "Cambiar contraseña" : "Establecer nueva contraseña"} 
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