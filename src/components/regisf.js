import * as React from 'react';
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FormularioRegistro() {
  const [formData, setFormData] = React.useState({
    usuario: '',
    nombre: '',
    correo: '',
    tipo: '',
    contraseña: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
        backgroundColor: '#FFC4E1', // Color de fondo igual al de la página
        color: '#FFE1FF'  // Color del texto
      }}
    >
      <Typography variant="h5" sx={{ color:'#3c3c3c',textAlign: 'center', mb: 2 }}>
        Registro de Usuario
      </Typography>
      <TextField
        label="Usuario"
        variant="outlined"
        name="usuario"
        value={formData.usuario}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA', color: '#FFE1FF' }} // Color de fondo de los campos
      />
      <TextField
        label="Nombre"
        variant="outlined"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA', color: '#FFE1FF' }} // Color de fondo de los campos
      />
      <TextField
        label="Correo"
        variant="outlined"
        name="correo"
        type="email"
        value={formData.correo}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA', color: '#FFE1FF' }} // Color de fondo de los campos
      />
      <FormControl variant="outlined" required>
        <InputLabel id="tipo-label" sx={{ color: '#FFE1FF' }}>Tipo</InputLabel>
        <Select
          labelId="tipo-label"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          label="Tipo"
          sx={{ backgroundColor: '#EAEAEA', color: '#000000' }} // Color de fondo de los campos
        >
          <MenuItem value="Candidato">Candidato</MenuItem>
          <MenuItem value="Reclutador">Reclutador</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Contraseña"
        variant="outlined"
        name="contraseña"
        type="password"
        value={formData.contraseña}
        onChange={handleChange}
        required
        sx={{ backgroundColor: '#EAEAEA', color: '#FFE1FF' }} // Color de fondo de los campos
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#F07DEA', // Color secundario
          '&:hover': {
            backgroundColor: '#6A4FB5' // Hover más oscuro
          }
        }}
      >
        Registrar
      </Button>
    </Box>
  );
}

export default FormularioRegistro;
