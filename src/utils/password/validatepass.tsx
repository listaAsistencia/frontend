export const validatePassword = (password: string) => {
  if (!password) return 'La contraseña es requerida';
  if (password.length < 8) return 'Debe tener al menos 8 caracteres';
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return 'Debe contener al menos un carácter especial';
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) return 'Debe contener mayúsculas y minúsculas';
  if (!/\d/.test(password)) return 'Debe contener al menos un número';
  return '';
};