import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); // Crear instancia de useNavigate





    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí va la lógica para manejar el envío del formulario
        // Por ejemplo, si la validación es exitosa:
        navigate('/dashboard'); // Redirige a la ruta /dashboard
    };

    return (
        <section className="vh-100 vw-100" style={{ backgroundColor: '#9A616D' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={logo} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={handleSubmit}>
                                            <div className="d-flex align-items-center mb-4 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                            </div>
                                            <span className="h1 fw-bold mb-0">Recursos Humanos ULEAM</span>
                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Inicia sesión con tus credenciales</h5>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="inputCorreoRegistro" className="form-control form-control-lg" required />
                                                <p id="resultadoCorreoElectronico"></p>
                                                <label className="form-label" htmlFor="inputCorreoRegistro">Correo Institucional</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" className="form-control form-control-lg" required/>
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
