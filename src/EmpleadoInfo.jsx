import React from 'react';
import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta hacia tu componente Navbar
import perfil from './img/perfil.png'; // Asegúrate de tener la ruta correcta hacia la imagen del perfil del empleado
import { useNavigate } from 'react-router-dom'; // Importa useHistory para manejar la navegación

const EmpleadoInfo = () => {
  const navigate = useNavigate(); // Usar useNavigate para la navegación
  // Función para redirigir a la página de empleados
  function redirectToEmployee() {
    navigate('/empleados');  }

  // Función para redirigir a la página de asignación de objetivos
  function redirectToAssignObjective() {
    // Agrega aquí la lógica para redirigir a la página de asignación de objetivos
    // Por ejemplo, history.push('/asignar-objetivos');
  }

  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="text">
          Informacion
        </div>

        <div className="employee-info">
          <div className="employee-header">
            <div className="employee-avatar">
              <img src={perfil} alt="Empleado" />
            </div>
            <div className="employee-details">
              <h2>Nombre del Empleado</h2>
              <p>Cargo del Empleado</p>
            </div>
          </div>

          <div className="employee-details-row">
            <div>
              <p>Horario: Horario del Empleado</p>
              <p>Oficina: Oficina/Cubículo del Empleado</p>
            </div>
          </div>

          <div className="employee-tasks ">
            <h3>Tareas y Objetivos</h3>
            <div className="task-grid">
              <ul id="tasks-list">
                {/* Tarjetas de tareas se agregarán aquí */}
              </ul>
            </div>
            <button className="assign-objective-btn" onClick={redirectToAssignObjective}>
              Asignar Objetivo
            </button>
          </div>

          <div className="employee-actions">
            <button className="back-to-employees-btn" onClick={redirectToEmployee}>
              Volver a Empleados
            </button>
            <button className="edit-info-btn">Editar Información</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpleadoInfo;
