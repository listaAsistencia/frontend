import React, {useState} from 'react'
import { NavBar } from '../components/layout/components/navBar';
import { Footer } from '../components/layout/components/footer';
import { GeneralButton } from '../components/buttons/generalButton';
import { showErrorNotification, showSuccessNotification } from '../utils/notifications/toasts';

export const ResetPassword: React.FC = () => {
    const [current, setCurrent] = useState('');
    const [newPass, setNewPass] = useState('');
    const[confirm, setConfirm]= useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError]=useState({
        current:'', newPass:'', confirm:''
    }); 

    const validate = () => {
    let valid = true;

    const newErrors = {
        current: '', newPass: '', confirm: ''
    };

    if (!current) {
        newErrors.current = 'La contraseña actual es requerida';
        valid = false;
    }


    if (!newPass) {
        newErrors.newPass = 'La nueva contraseña es requerida';
        valid = false;
    } else if (newPass.length < 8) {
        newErrors.newPass = 'La nueva contraseña debe tener al menos 8 caracteres';
        valid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPass)) {
        newErrors.newPass = 'La nueva contraseña debe contener al menos un carácter especial';
        valid = false;
    }else if(!/[A-Z]/.test(newPass) || !/[a-z]/.test(newPass)){
        newErrors.newPass = 'La nueva contraseña debe contener al menos una letra mayúscula y una minúscula';
    valid = false;
    }else if(!/\d/.test(newPass)){
        newErrors.newPass = 'La nueva contraseña debe contener al menos un número';
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


    const handleSubmit =async (e:React.FormEvent)=>{
        e.preventDefault();
        const API_CHANGEPASSWORD=import.meta.env.VITE_API_CHANGEPASSWORD;
        if(!validate()){
            return;
        }
        setLoading(true);
        try{
            const token = localStorage.getItem('token');
            const response = await fetch(API_CHANGEPASSWORD, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    currentPassword: current,
                    newPassword: newPass
                }),
            }); 

            
            if(!response.ok){
                const errorText=await response.text();
                try{
                    const errordata= JSON.parse(errorText)
                    showErrorNotification(errordata.message|| 'Error al cambiar la contraseña');

                }catch{
                    showErrorNotification(errorText || 'Error en el servidor');
                }
                return;
            }
            const data=await response.json();
            showSuccessNotification(data.message||'Contraseña cambiada exitosamente');
            window.location.reload();
            window.location.href='/login';
        }catch(error){
            console.error(error)
            showErrorNotification('Error de conexión con el servidor');
        }finally{
            setLoading(false);
        }
    };

      return (
        <>
            <NavBar hideLogout/>
            <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative py-3 mx-auto text-center w-full max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-0">
                    <span className="text-xl md:text-2xl font-bold mb-6 block">Cambiar contraseña</span>
                    <div className="mt-6 bg-white shadow-lg rounded-lg text-left">
                        <div className="h-3 bg-primary rounded-t-md"/>
                        <form onSubmit={handleSubmit} className="px-10 py-8">
                            <div className='mb-6'>
                                <label className="block text-lg font-bold">Contraseña Actual</label>
                                <input
                                    type="password"
                                    placeholder="Contraseña actual"
                                    className={`border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg ${
                                        error.current ? 'border-red-500' : ''
                                    }`}
                                    value={current}
                                    onChange={(e) => {setCurrent(e.target.value); validate();}}
                                />
                                {error.current && (
                                    <p className="text-red-500 text-sm mt-1">{error.current}</p>
                                )}
                            </div>
                            <div className='mb-6'>
                                <label className="block text-lg font-bold">Nueva contraseña</label>
                                <input
                                    type="password"
                                    placeholder="Nueva contraseña"
                                    className={`border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg ${
                                        error.newPass ? 'border-red-500' : ''
                                    }`}
                                    value={newPass}
                                    onChange={(e) => {setNewPass(e.target.value); validate();}}
                                />
                                {error.newPass && (
                                    <p className="text-red-500 text-sm mt-1">{error.newPass}</p>
                                )}
                                <p className="text-gray-500 text-sm mt-1">
                                    La contraseña debe tener al menos 8 caracteres
                                </p>
                            </div>
                            <div className='mb-6'>
                                <label className="block text-lg font-bold">Confirmar contraseña</label>
                                <input
                                    type="password"
                                    placeholder="Confirmar contraseña"
                                    className={`border w-full h-12 px-4 py-2 text-lg hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary rounded-lg ${
                                        error.confirm? 'border-red-500' : ''
                                    }`}
                                    value={confirm}
                                    onChange={(e) => {setConfirm(e.target.value); validate();}}
                                />
                                {error.confirm && (
                                    <p className="text-red-500 text-sm mt-1">{error.confirm}</p>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <GeneralButton 
                                    text={loading ? "Procesando..." : "Cambiar contraseña"} 
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
    
}