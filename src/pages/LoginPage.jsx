import React, { useState } from 'react'
import { useForm } from '../hook/useForm'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate()
    const {name, password, onInputChange, onResetForm} = useForm({
        name:'',
        password: '',
    });
      const [error, setError] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/admin.json');
      const data = await response.json();

      if (name === data.username && password === data.password) {
        sessionStorage.setItem('isAdmin', 'true');
        sessionStorage.setItem('adminName', name);
        onResetForm();
        navigate('/dashboard', {
          replace: true,
        });
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (err) {
      console.error(err);
      setError('Error al validar. Intenta nuevamente.');
    }
  };


    return (
     <div className="wrapper">
        <form className='form1' onSubmit = {onLogin}>
            <h1>Iniciar Sesion</h1>
            <div className="input-group">
                <input 
                    type="text" 
                    name ='name' 
                    id='name' 
                    value={name} 
                    onChange={onInputChange} 
                    required 
                    autoComplete ='off' 
                    />
                <label htmlFor="name">Usuario: </label>
            </div>
            <div className="input-group">
                <input 
                    type="password" 
                    name ='password' 
                    id='password' 
                    value={password} 
                    onChange={onInputChange} 
                    required 
                    autoComplete ='off' 
                    />
                <label htmlFor="password">Contraseña: </label>
            </div>
             {error && <p style={{ color: 'red' }}>{error}</p>}
            <button>Iniciar Sesion</button>
        </form>
     </div>
  )
}
