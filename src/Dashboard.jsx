import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta hacia tu componente Navbar
import productividad from './img/productividad.png'
import area from './img/social_area.png'
import objetivos from './img/objetivos.png'
import adminis from './img/administrative.png'



const Dashboard = () => {
    const navigate = useNavigate(); // Usar useNavigate para la navegación

   // Redirección a la página de productividad
  function redirigirAProductividad() {
    navigate('/productividad');
  }

  // Redirección a la página de empleados como jefe
  function redirigirAEmpleadosComoJefe() {
    navigate('/empleados', { state: { filtro: 'Jefe_area' } });
  }

  // Redirección a la página de empleados
  function redirigirAEmpleados() {
    navigate('/empleados');
  }

  // Redirección a la página de Área Social
  function redirigirAAreaSocial() {
    navigate('/area-social');
  }

    return (
        <div>
            <Navbar />
            <section className="home">
                <div className="text">Resumen</div>
                <div className="main">
                    <div className="widget" onClick={redirigirAProductividad}>
                        <h2>Gráfico de Productividad</h2>
                        <img src={productividad} alt="Gráfico de Productividad" />
                        <p>Descripción o información adicional sobre la productividad.</p>
                    </div>

                    <div className="widget" onClick={redirigirAEmpleadosComoJefe}>
                        <h2>Jefes de Áreas</h2>
                        <img src={objetivos} alt="Gráfico de Productividad" />
                        <p>Descripción o información adicional sobre la productividad.</p>
                    </div>

                    <div className="widget" onClick={redirigirAEmpleados}>
                        <h2>Administración Empleados</h2>
                        <img src={adminis} alt="Gráfico de Productividad" />
                        <p>Descripción o información adicional sobre la productividad.</p>
                    </div>

                    <div className="widget" onClick={redirigirAAreaSocial}>
                        <h2>Área Social</h2>
                        <img src={area} alt="Gráfico de Productividad" />
                        <p>Descripción o información adicional sobre la productividad.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
