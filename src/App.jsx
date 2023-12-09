import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login'; // Asegúrate de importar tu componente Login
import Dashboard from './Dashboard';
import Empleados from './Empleados';
import EmpleadoInfo from './EmpleadoInfo';
import Productividad from './Productividad';
import AreaSocial from './AreaSocial';

function App() {
  return (
    <>
    <Router>
      <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/productividad" element={<Productividad />} />
        <Route path="/area-social" element={<AreaSocial />} />

        <Route path="/employee-info" element={<EmpleadoInfo />} />
        

        {/* Otras rutas aquí */}
      </Routes>
    </Router>
      </>
  );
}

export default App;
