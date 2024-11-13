import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Añadir esta línea
import { Link } from 'react-router-dom';  // Importamos Link de react-router-dom
import '../styles/stilo.css';

const pages = ['Inicio', '¿Quienes somos?', 'Preguntas Frecuentes', 'Contacto'];
const settings = ['Registrarse', 'Iniciar sesion'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#E966A0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Menú en pantallas pequeñas */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: '#E966A0' }}>
                    {page === 'Inicio' ? (
                      <Link to="/" style={{ color: '#E966A0', textDecoration: 'none' }}>
                        {page}
                      </Link>
                    ) : (
                      page
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Título con logo */}
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
              color: 'inherit',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            Temp<AccessTimeIcon sx={{ fontSize: '1.2em', marginLeft: '0.1em' }} />p
          </Typography>

          {/* Botones en pantallas grandes */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#FFE1FF', // Color de las letras
                  display: 'block',
                }}
              >
                {page === 'Inicio' ? (
                  <Link to="/" style={{ color: '#FFE1FF', textDecoration: 'none' }}>
                    {page}
                  </Link>
                ) : (
                  page
                )}
              </Button>
            ))}
          </Box>

          {/* Menú de usuario */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" 
                
                sx={{
                  bgcolor: '#F07DEA', // Cambia 'blue' por cualquier color o código hexadecimal
                  color: 'white',  // Cambia el color del texto si es necesario
                }}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ color: '#3C3C3C' }}>
                    {setting === 'Registrarse' ? (
                      <Link to="/registerP" style={{ color: '#3C3C3C', textDecoration: 'none' }}>
                        {setting}
                      </Link>
                    ) : setting === 'Iniciar sesion' ? (
                      <Link to="/loginP" style={{ color: '#3C3C3C', textDecoration: 'none' }}>
                        {setting}
                      </Link>
                    ) : (
                      setting
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
