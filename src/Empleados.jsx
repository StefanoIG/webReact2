import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta hacia tu componente Navbar
import employee1 from './img/perfil.png'; // Asegúrate de tener las rutas correctas hacia tus imágenes de empleados
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Empleados = () => {
      const navigate = useNavigate();
      const [empleados, setEmpleados] = useState([]);
      
      
      useEffect(() => {
        // Cargar empleados desde localStorage al iniciar
        const empleadosAlmacenados = JSON.parse(localStorage.getItem('empleados')) || [];
        setEmpleados(empleadosAlmacenados);

        const openModalButton = document.getElementById("add-employee");
        if (openModalButton) {
            openModalButton.addEventListener("click", openModal);
        }
          // Limpiar el event listener cuando el componente se desmonte
          return () => {
            if (openModalButton) {
                openModalButton.removeEventListener("click", openModal);
            }
        };
    }, []);

    const openModal = () => {
      Swal.fire({
          title: 'Agregar Empleado',
          html: `
          <script src="js/general.js">  </script>

          <div class="form-group">
          <label for="nombres">Nombres:</label>
          <input type="text" id="nombres" name="nombres" required onblur="validarCampo(this)>
      </div>
      <div class="form-group">
          <label for="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" required onblur="validarCampo(this)>
      </div>
      <div class="form-group">
          <label for="correo">Correo:</label>
          <input type="email" id="inputCorreoRegistro" name="correo" required oninput="validarCorreoElectronico()">
          <p id="resultadoCorreoElectronico"></p>

      </div>
      <div class="form-group">
          <label for="cedula">Cédula:</label>
          <input type="text" id="numeroCedula" name="cedula" required  oninput="validarCedula()">
          <p id="PCedula"></p>

      </div>
      <div class "form-group">
          <label for="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required onblur="validarCampo(this)>
      </div>
      <div class="form-group">
          <label for="area">Área de Trabajo:</label>
          <select id="filtro_area" required>
              <option value="" selected disabled>Área</option>
              <option value="Contabilidad">Contabilidad</option>
              <option value="TI">TI</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Mantenimiento">Mantenimiento</option>
          </select>
      </div>
      <div class="form-group">
          <label for="rol">Rol de Trabajo:</label>
          <input type="text" id="rol" name="rol" required>
      </div>
      <div class="form-group">
          <label for="numeroCelular">Número de celular:</label>
          <input type="text" id="numeroCelular" name="numeroCelular" required oninput="validarNumeroTelefono()" >
          <p id="resultadoNumeroTelefono"></p>

          </div>
      <div class="form-group">
          <label for="contrato">Contrato (PDF):</label>
          <input type="file" id="contrato" name="contrato" accept=".pdf" required>
      </div>
      <div class="form-group">
          <label for="foto">Foto:</label>
          <input type="file" id="foto" name "foto" accept="image/*" required>
      </div>
      <div class="form-group">
          <input type="checkbox" id="confirmacion" name="confirmacion" required>
          <label for="confirmacion">Confirmo que la información es correcta.</label>
      </div>
  `,
          showCloseButton: true,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          denyButtonText: `No guardar`,
          customClass: 'custom-modal',
      }).then((result) => {
        if (result.isConfirmed) {
          // Obtener los valores de los campos del formulario
          const nombres = document.getElementById('nombres').value;
          const apellidos = document.getElementById('apellidos').value;
          const correo = document.getElementById('inputCorreoRegistro').value;
          const cedula = document.getElementById('numeroCedula').value;
          const direccion = document.getElementById('direccion').value;
          const area = document.getElementById('filtro_area').value;
          const rol = document.getElementById('rol').value;
          const numeroCelular = document.getElementById('numeroCelular').value;
          const contrato = document.getElementById('contrato').files[0]; // Esto es un objeto File
          const foto = document.getElementById('foto').files[0]; // Esto es un objeto File
          const confirmacion = document.getElementById('confirmacion').checked;
      
          // Validar los campos aquí. Por ejemplo, asegúrate de que todos los campos requeridos estén completos.
          if (!nombres || !apellidos || !correo || !cedula || !direccion || !area || !rol || !numeroCelular || !contrato || !foto || !confirmacion) {
              Swal.fire('Error', 'Por favor, completa todos los campos correctamente.', 'error');
              return; // Detener la ejecución si la validación falla
          }
      
          // Manejar la carga de archivos (contrato y foto) - este paso puede variar dependiendo de tus requisitos
          // Por ejemplo, podrías convertirlos a base64 o subirlos a un servidor y almacenar la URL
      
          // Crear un objeto empleado con los datos recopilados
          const nuevoEmpleado = {
              nombres,
              apellidos,
              correo,
              cedula,
              direccion,
              area,
              rol,
              numeroCelular,
              // contrato: URL o base64 del archivo contrato,
              // foto: URL o base64 de la imagen foto,
          };
      
          // Añadir el nuevo empleado al array de empleados y almacenarlo en localStorage
          setEmpleados(prevEmpleados => {
              const actualizados = [...prevEmpleados, nuevoEmpleado];
              localStorage.setItem('empleados', JSON.stringify(actualizados));
              return actualizados;
          });
      
          // Mostrar un mensaje de éxito
          Swal.fire('Empleado agregado', '', 'success');
      }
      
      });
    };


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
                    {empleados.map((empleado, index) => (
                        <div key={index} className="employee-card" onClick={redirectToEmployeeInfo}>
                            <img src={employee1 || '/path/to/default/image'} alt={`Empleado ${index + 1}`} />
                            <h3>{empleado.nombres} {empleado.apellidos}</h3>
                            <p>Cargo: {empleado.rol}</p>
                        </div>
                    ))}
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
