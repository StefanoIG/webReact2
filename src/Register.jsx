import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    // Funciones JavaScript (ajústalas según tu lógica)
    const navigate = useNavigate(); // Crear instancia de useNavigate

    const verificarPass = () => {
        const regexPass = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
        const inputPass = document.getElementById("password");
        const resultadoPass = document.getElementById("resultadoPass");
      
        if (!regexPass.test(inputPass.value)) {
          resultadoPass.textContent = "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
          return false;
        }
        resultadoPass.textContent = "";
        return true;
        };

    const comprobarPass = () => {
        const pass = document.getElementById("password").value;
        const confirmarPass = document.getElementById("confirmarPass").value;
        const mensajePass = document.getElementById("mensajePass");
      
        if (pass !== confirmarPass) {
          mensajePass.textContent = "Las contraseñas no coinciden.";
          return false;
        } else {
          mensajePass.textContent = "";
          return true;
        }
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            if (verificarPass() && comprobarPass()) {
                navigate('/login'); // Redirigir al componente Login
            }
    };

    return (
        <section className="vw-100 vh-100" style={{ backgroundColor: '#9A616D' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    {/* Asegúrate de tener la imagen 'logo.png' en tu proyecto */}
                                    <img src={logo} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                            </div>

                                            <span className="h1 fw-bold mb-0">Recursos Humanos ULEAM</span>
                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}></h5>

                                            <p>Estimado {`{Usuario}`}, para completar el registro ingrese un password</p>

                                            <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Escriba su password" required onInput={verificarPass} />
                                            <p id="resultadoPass"></p>
                                            <div id="passwordHelpBlock" className="form-text">
                                                Su password debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                                            </div>

                                            <input type="password" id="confirmarPass" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Repita su password" required onInput={comprobarPass} />
                                            <p id="mensajePass"></p>
                                            <div id="passwordHelpBlock" className="form-text">
                                                Los passwords deben coincidir.
                                            </div>
                                            <a className="btn btn-primary"  role="button" aria-disabled="true"  onClick={handleSubmit}>Confirmar</a>
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

export default Register;
