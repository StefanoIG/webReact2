import React from 'react';
import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta hacia tu componente Navbar
import productividadImg from './img/productividad.jpg'; // Asegúrate de tener la ruta correcta hacia la imagen de productividad
import objetivosImg from './img/objetivos.png'; // Asegúrate de tener la ruta correcta hacia la imagen de objetivos cumplidos
import porcentajeImg from './img/porcentajes.webp'; // Asegúrate de tener la ruta correcta hacia la imagen de porcentaje

const Productividad = () => {
  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="text">Resumen</div>
        <div className="main">
          <div className="widget">
            <h2>Productividad</h2>
            <img src={productividadImg} alt="Gráfico" />
            <p>Descripción o información adicional sobre la productividad.</p>
          </div>

          <div className="widget">
            <h2>Objetivos cumplidos por áreas</h2>
            <img src={objetivosImg} alt="Gráfico" />
            <p>Descripción o información adicional sobre la productividad.</p>
          </div>

          <div className="widget">
            <h2>Porcentaje de éxito</h2>
            <img src={porcentajeImg} alt="Gráfico" />
            <p>Descripción o información adicional sobre la productividad.</p>
          </div>

          <div className="widget">
            <h2>Progreso</h2>
            <div className="progress-circle">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <span className="progress-text">75%</span>
            </div>
            <p className="widget-description">Descripción o información adicional sobre la productividad.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productividad;
