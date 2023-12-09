import React from 'react';
import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta hacia tu componente Navbar

const AreaSocial = () => {
  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="text">Área Social</div>
        <div className="area-social">
          <div className="calendar-container">
            <div className="calendar-header">
              <button id="prev-month">Anterior</button>
              <h2 id="current-month">Mes de Cumpleaños</h2>
              <button id="next-month">Siguiente</button>
            </div>
            <div className="calendar"></div>
          </div>
          <div className="birthday-info">
            <div className="countdown">
              <h3>Faltan <span id="days-left">X</span> días para el próximo cumpleaños</h3>
            </div>
            <div className="celebration-details">
              <h3>Porcentaje anual de descuento para celebración</h3>
              <div className="percentage-card">
                <p>Descuento: <span id="discount-percentage">2%</span></p>
                <button id="modify-discount">Modificar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaSocial;
