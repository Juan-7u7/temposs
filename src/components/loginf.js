import * as React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FormularioInicioSesion() {
  const navigate = useNavigate(); // Hook para la navegación

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/welcome'); // Redirige a la página "welcome.js"
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: { xs: '90%', sm: '80%', md: '40%' },
        margin: 'auto',
        mt: 4,
        p: { xs: 2, sm: 3 },
        boxShadow: { xs: 1, md: 3 },
        borderRadius: 2,
        backgroundColor: '#FFC4E1',  // Color de fondo igual al fondo principal de la página
        color: '#FFE1FF'  // Color de texto para que contraste con el fondo oscuro
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" sx={{ color:'#3c3c3c',textAlign: 'center', mb: 2 }}>
        Inicio de Sesión
      </Typography>

      <TextField
        label="Usuario"
        variant="outlined"
        name="usuario"
        sx={{ backgroundColor: '#EAEAEA', color: '#FFE1FF' }} // Ajusta el color de fondo del campo
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        name="contraseña"
        type="password"
        sx={{ backgroundColor: '#EAEAEA', color: '#FFE1FF' }} // Ajusta el color de fondo del campo
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#F07DEA', // Color secundario
          '&:hover': {
            backgroundColor: '#6A4FB5' // Color al pasar el mouse (más oscuro del secundario)
          }
        }}
      >
        Iniciar Sesión
      </Button>
    </Box>
  );
}

export default FormularioInicioSesion;
