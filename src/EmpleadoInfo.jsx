import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta hacia tu componente Navbar
import perfil from './img/perfil.png'; // Asegúrate de tener la ruta correcta hacia la imagen del perfil del empleado
import { useNavigate, useParams } from 'react-router-dom';

const EmpleadoInfo = () => {
 

    const navigate = useNavigate();
    const { empleadoId } = useParams(); // Asumiendo que usas React Router y pasas un ID en la URL
    const [empleado, setEmpleado] = useState({ nombre: '', cargo: '' });
  
    useEffect(() => {
      // Recuperar los datos de los empleados del localStorage
      const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
      const empleadoEncontrado = empleados.find(emp => emp.id === empleadoId);
  
      if (empleadoEncontrado) {
        setEmpleado({ nombre: empleadoEncontrado.nombres, cargo: empleadoEncontrado.rol });
      }
    }, [empleadoId]);
  
    function redirectToEmployee() {
      navigate('/empleados');
    }
  
    function redirectToAssignObjective() {
      // Redirección a la página de asignación de objetivos
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
          <h2>{empleado.nombre}</h2>
          <p>{empleado.cargo}</p>
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
