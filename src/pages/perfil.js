import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Perfil() {
  const [previewImage, setPreviewImage] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [habilidades, setHabilidades] = useState(['', '', '', '']);
  const [experiencia, setExperiencia] = useState(['', '', '', '']);
  const [contacto, setContacto] = useState(['', '', '']);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        backgroundColor: '#FFC4E1', // Fondo del formulario
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Foto de perfil */}
      <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
    backgroundColor: '#FFC4E1',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: 'fit-content',
    margin: 'auto',
  }}
>
  {/* Foto de perfil */}
  <div
    style={{
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      overflow: 'hidden',
      backgroundColor: '#EAEAEA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    }}
  >
    {previewImage ? (
      <img
        src={previewImage}
        alt="Foto de perfil"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ) : (
      <span style={{ color: '#6A4FB5', fontWeight: 'bold' }}>Sin foto</span>
    )}
  </div>

  {/* Input estilizado para subir archivos */}
  <label
    htmlFor="file-upload"
    style={{
      marginTop: '10px',
      padding: '10px 20px',
      backgroundColor: '#F07DEA',
      color: '#FFF',
      fontWeight: 'bold',
      borderRadius: '20px',
      cursor: 'pointer',
      transition: '0.3s',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#6A4FB5')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#F07DEA')}
  >
    Seleccionar archivo
    <input
      id="file-upload"
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      style={{
        display: 'none',
      }}
    />
  </label>
</div>


      {/* Descripción */}
      <div style={{ width: '100%' }}>
        <h2>Descripción</h2>
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          sx={{
            backgroundColor: '#EAEAEA',
            '& .MuiInputLabel-root': { color: '#3c3c3c' },
            '& .MuiOutlinedInput-root': { color: '#3c3c3c' }
          }}
        />
      </div>

      {/* Habilidades */}
      <div style={{ width: '100%' }}>
        <h2>Habilidades</h2>
        {habilidades.map((habilidad, index) => (
          <TextField
            key={index}
            label={`Habilidad ${index + 1}`}
            variant="outlined"
            fullWidth
            value={habilidades[index]}
            onChange={(e) => {
              const updatedHabilidades = [...habilidades];
              updatedHabilidades[index] = e.target.value;
              setHabilidades(updatedHabilidades);
            }}
            sx={{
              marginBottom: '10px',
              backgroundColor: '#EAEAEA',
              '& .MuiInputLabel-root': { color: '#3c3c3c' },
              '& .MuiOutlinedInput-root': { color: '#3c3c3c' }
            }}
          />
        ))}
      </div>

      {/* Experiencia */}
      <div style={{ width: '100%' }}>
        <h2>Experiencia</h2>
        {experiencia.map((exp, index) => (
          <TextField
            key={index}
            label={`Experiencia ${index + 1}`}
            variant="outlined"
            fullWidth
            value={experiencia[index]}
            onChange={(e) => {
              const updatedExperiencia = [...experiencia];
              updatedExperiencia[index] = e.target.value;
              setExperiencia(updatedExperiencia);
            }}
            sx={{
              marginBottom: '10px',
              backgroundColor: '#EAEAEA',
              '& .MuiInputLabel-root': { color: '#3c3c3c' },
              '& .MuiOutlinedInput-root': { color: '#3c3c3c' }
            }}
          />
        ))}
      </div>

      {/* Contacto */}
      <div style={{ width: '100%' }}>
        <h2>Contacto</h2>
        {contacto.map((contact, index) => (
          <TextField
            key={index}
            label={`Contacto ${index + 1}`}
            variant="outlined"
            fullWidth
            value={contacto[index]}
            onChange={(e) => {
              const updatedContacto = [...contacto];
              updatedContacto[index] = e.target.value;
              setContacto(updatedContacto);
            }}
            sx={{
              marginBottom: '10px',
              backgroundColor: '#EAEAEA',
              '& .MuiInputLabel-root': { color: '#3c3c3c' },
              '& .MuiOutlinedInput-root': { color: '#3c3c3c' }
            }}
          />
        ))}
      </div>

      {/* Botón Guardar */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: '#F07DEA',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#6A4FB5'
          }
        }}
      >
        Guardar Perfil
      </Button>
    </div>
  );
}

export default Perfil;
