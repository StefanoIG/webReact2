import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import Swal from 'sweetalert2';
import './navbar.css';
import logo from './img/logo.png';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'Cerrar sesión',
            text: '¿Estás seguro de que deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login'); // Asegúrate de que '/login' sea la ruta correcta para el inicio de sesión.
            }
        });
    };
    

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', isDarkMode);
    };
    
    

    // Evento para cerrar modal con tecla "Escape"
    useEffect(() => {
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, []);

    return (
        <>
            <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <Link to="/dashboard">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </span>

                        <div className="text logo-text">
                            <span className="name">Administracion</span>
                            <span className="profession">Recursos Humanos</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <li className="search-box">
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Busqueda global" />
                        </li>

                        <ul className="menu-links">
                            <li className="nav-link">
                                <Link to="/dashboard">
                                    <i className='bx bx-home-alt icon'></i>
                                    <span className="text nav-text">Resumen</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/productividad">
                                    <i className='bx bx-briefcase icon'></i>
                                    <span className="text nav-text">Rendimiento</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/empleados">
                                    <i className='bx bx-upload icon'></i>
                                    <span className="text nav-text">Empleados</span>
                                </Link>
                            </li>

                            {isModalOpen && (
                                <li className="nav-link">
                                    <a href="#" id="open-modal">
                                        <i className='bx bx-bell icon'></i>
                                        <span className="text nav-text">Notificaciones</span>
                                    </a>
                                </li>
                            )}
                            <div className="hide modal" id="myModal">
                                <div className="modal-content">
                                    <span className="close" id="close-modal" onClick={() => setIsModalOpen(false)}>&times;</span>
                                    <h2>Tienes {'{notificaciones}'}</h2>
                                    <p>Contenido notificacion.</p>
                                </div>
                            </div>

                            <li className="nav-link">
                                <Link to="/area-social">
                                    <i className='bx bx-heart icon'></i>
                                    <span className="text nav-text">Area Social</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="#" onClick={handleLogout}>
                                <i className='bx bx-log-out icon'></i>
                                <span className="text nav-text">Salir</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="sun-moon" onClick={toggleDarkMode}>
                                <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon moon`}></i>
                            </div>
                            <span className="mode-text text">{isDarkMode ? 'Modo claro' : 'Modo oscuro'}</span>

                            <div className="toggle-switch">
                                <span className={`switch ${isDarkMode ? 'active' : ''}`}></span>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
           
        </>
    );
};

export default Navbar;
