import React from 'react';
import FormularioInicioSesion from '../components/loginf';  // Importa el componente de login

function LoginP() {
  return (
    <div>
      <h1 style={{ color: '#FFE1FF', textAlign: 'center' }}>Iniciar sesión</h1>
      <FormularioInicioSesion />
    </div>
  );
}

export default LoginP;
