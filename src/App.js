import './App.css';
import './styles/stilo.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './components/navar';
import Navbaru from './components/navbaru';
import LoginP from './pages/loginP';
import RegisterP from './pages/registerP';
import Welcome from './pages/welcome';
import Inicio from './pages/inicio';
import Perfil from './pages/perfil';
import Mensajes from './pages/mensajes';
import Mensajesm from './pages/mensajesm';

function App() {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/welcome';
  const isPerfilPage = location.pathname === '/perfil';
  const isMensajesPage = location.pathname === '/mensajes';
  const isMensajesmPage = location.pathname === '/mensajesm';

  return (
    <div className="App" style={{ backgroundColor: '#ffe4ec' }}>
      {/* Barra de navegación condicional */}
      {isWelcomePage || isPerfilPage || isMensajesPage || isMensajesmPage  ? <Navbaru /> : <ResponsiveAppBar />}

      {/* Configuración de rutas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/loginP" element={<LoginP />} />
        <Route path="/registerP" element={<RegisterP />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/mensajesm" element={<Mensajesm />} />
      </Routes>
    </div>
  );
}

export default App;
