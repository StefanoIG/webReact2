import React from 'react';
import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta hacia tu componente Navbar
import employee1 from './img/perfil.png'; // Asegúrate de tener las rutas correctas hacia tus imágenes de empleados
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Empleados = () => {
    const navigate = useNavigate(); // Usar useNavigate para la navegación

  // Redirección a la página de información del empleado
  function redirectToEmployeeInfo() {
    // Agrega aquí la lógica para redirigir a la página de información del empleado
    // Puedes usar react-router-dom para manejar la navegación
    navigate('/employee-info');
  }

  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="text">
          Empleados
          <span id="employee_area">General</span>
        </div>

        <div className="search-filter">
          <div className="search-options">
            <select id="filtro_area" className="filtro_area">
              <option value="area" id="area" selected>
                Área
              </option>
              <option value="Contabilidad" id="Contabilidad">
                Contabilidad
              </option>
              <option value="TI" id="TI">
                TI
              </option>
              <option value="Finanzas" id="Finanzas">
                Finanzas
              </option>
              <option value="Mantenimiento" id="Mantenimiento">
                Mantenimiento
              </option>
              <option value="Jefe_area">Jefes de áreas</option>
            </select>
            <button id="sort-button">Ordenar A-Z</button>
          </div>
          <input type="text" id="search-input" placeholder="Buscar empleado" />
          <button id="search-button">Buscar</button>
          <button id="add-employee">Agregar empleado</button>
        </div>

        <div className="employee-cards">
          <div className="employee-card" onClick={redirectToEmployeeInfo}>
            <img src={employee1} alt="Empleado 1" />
            <h3>Nombre del Empleado 1</h3>
            <p>Cargo: Cargo del Empleado 1</p>
          </div>

          <div className="employee-card" onClick={redirectToEmployeeInfo}>
            <img src={employee1} alt="Empleado 2" />
            <h3>Nombre del Empleado 2</h3>
            <p>Cargo: Cargo del Empleado 2</p>
          </div>
          
          <div className="employee-card" onClick={redirectToEmployeeInfo}>
            <img src={employee1} alt="Empleado 2" />
            <h3>Nombre del Empleado 2</h3>
            <p>Cargo: Cargo del Empleado 2</p>
          </div>

          {/* Agrega más tarjetas de empleado según sea necesario */}
        </div>

        <div className="pagination">
          <ul>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Empleados;
