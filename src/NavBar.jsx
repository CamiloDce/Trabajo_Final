import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './style/login.css';

export const NavBar = () => {
    const navigate = useNavigate();


    const isAdmin = sessionStorage.getItem("isAdmin") === "true";
    const adminName = sessionStorage.getItem("adminName") || "Administrador";

    const onLogout = () => {
        sessionStorage.clear(); 
        navigate('/', { replace: true });
    };
    const linkDestino = isAdmin ? "/dashboard" : "/";
    
    return(
        <>
            <header>
                <h1>
                    <Link to={linkDestino}>AUTOSPASCAL</Link>
                </h1>
                
                {
                    isAdmin ? (
                    <div className = 'user'>
                        <span className ='username'>{adminName}</span>
                        <button className  = 'btn-logout' onClick ={onLogout}>
                            Cerrar Sesion
                        </button>
                    </div> 
                    ) : (
                        <nav>
                            <Link to = '/login'>Iniciar sesion</Link>
                         </nav>

                    )
                }
                

            </header>
            
            <Outlet />
        </>
    )
}