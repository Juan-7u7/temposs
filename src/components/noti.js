import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function NotiModal() {
  const [open, setOpen] = useState(false);
  const [leido, setLeido] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const marcarComoLeido = () => setLeido(true);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: '#E966A0',
          color: '#fff',
          '&:hover': { backgroundColor: '#F07DEA' },
        }}
      >
        Ver Notificación
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ marginBottom: 2, color: '#E966A0' }}
          >
            Nueva Notificación
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, color: '#555' }}
          >
            Versión 1.2.3 ahora está lista para descargar.
          </Typography>
          <Typography
            variant="caption"
            sx={{ display: 'block', marginBottom: 2, color: '#AAA' }}
          >
            Hace 5 minutos
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={marcarComoLeido}
            sx={{
              backgroundColor: '#6A4FB5',
              '&:hover': { backgroundColor: '#F07DEA' },
            }}
          >
            {leido ? 'Marcado como leído' : 'Marcar como leído'}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default NotiModal;
