import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Button, Tooltip, TextField } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const pages = ['Inicio', '¿Quienes somos?', 'Preguntas Frecuentes', 'Contacto'];
const settings = ['Perfil','Mensajes','Notificaciones', 'Cerrar sesion'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [anchorElNotification, setAnchorElNotification] = React.useState(null);

  const navigate = useNavigate(); // Hook para la navegación

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page === 'Inicio') {
      navigate('/welcome'); // Redirige a la página welcome.js
    }
    // Puedes agregar más condiciones para las otras páginas si es necesario
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
  
    // Detectar si el usuario está en un dispositivo móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
  
    if (setting === 'Cerrar sesion') {
      navigate('/'); // Redirige a la página principal (App.js)
    } else if (setting === 'Perfil') {
      navigate('/perfil'); // Redirige a la página perfil.js
    } else if (setting === 'Mensajes') {
      if (isMobile) {
        navigate('/mensajesm'); // Redirige a la página mensajesm.js en dispositivos móviles
      } else {
        navigate('/mensajes'); // Redirige a la página mensajes.js en dispositivos de escritorio
      }
    }
  };
  
  

  const handleSearch = () => {
    if (searchQuery.toLowerCase() === 'trabajo') {
      // Redirige a la página trabajo.js
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#E966A0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FFE1FF',
              textDecoration: 'none',
            }}
          >
            Temp<AccessTimeIcon sx={{ fontSize: '1.2em', marginLeft: '0.1em' }} />p
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: '#FFE1FF',
                  display: 'block',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(); }}
            InputProps={{
              startAdornment: (
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{
              backgroundColor: '#EAEAEA',
              borderRadius: '4px',
              mr: 2,
              color: '#FFE1FF',
            }}
          />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" 
                  sx={{
                    bgcolor: '#F07DEA', // Cambia 'blue' por cualquier color o código hexadecimal
                    color: 'white',  // Cambia el color del texto si es necesario
                  }} />
              </IconButton>
            </Tooltip>
            <Menu
  sx={{
    mt: '10px',
    '& .MuiPaper-root': {
      backgroundColor: '#fff',
      border: '1px solid #ddd', // Línea ligera alrededor del menú
      padding: '5px', // Espaciado entre los elementos
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'visible',
      '&::before': {
        content: '""',
        display: 'block',
        width: '10px',
        height: '10px',
        backgroundColor: '#fff',
        transform: 'rotate(45deg)',
        position: 'absolute',
        top: '-5px',
        right: '30px',
        boxShadow: '-2px -2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
    '& .MuiMenuItem-root': {
      borderRadius: '5px',
      '&:hover': {
        backgroundColor: '#f07dea',
        color: '#fff',
      },
    },
  }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={Boolean(anchorElUser)}
  onClose={() => setAnchorElUser(null)}
>
  {settings.map((setting) =>
    setting === 'Notificaciones' ? (
      <MenuItem
        key={setting}
        onMouseEnter={(e) => setAnchorElNotification(e.currentTarget)} // Controla el submenú
        onMouseLeave={() => setAnchorElNotification(null)} // Oculta el submenú
      >
        <Typography sx={{ textAlign: 'center', color: '#000' }}>{setting}</Typography>
        <Menu
          anchorEl={anchorElNotification}
          open={Boolean(anchorElNotification)}
          onClose={() => setAnchorElNotification(null)}
          sx={{
            mt: '10px',
            '& .MuiPaper-root': {
              backgroundColor: '#fff',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
            },
          }}
        >
          <MenuItem>Notificación 1</MenuItem>
          <MenuItem>Notificación 2</MenuItem>
          <MenuItem>Notificación 3</MenuItem>
        </Menu>
      </MenuItem>
    ) : (
      <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
        <Typography sx={{ textAlign: 'center', color: '#000' }}>{setting}</Typography>
      </MenuItem>
    )
  )}
</Menu>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
