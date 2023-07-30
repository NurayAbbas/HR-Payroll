import { useEffect, useState } from 'react';
import './Login.css';

import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();

  const [authData, setAuthData] = useState({username: '', password: ''});

  useEffect(() => {
    if(localStorage.getItem('auth') === 'logged') {
        navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (event) => {

    event.preventDefault();


    if(authData.username === 'admin' && authData.password === '12345') {
      localStorage.setItem('auth', 'logged');
      navigate('/');
    } else {
      alert('Daxil etdiyiniz istifadəçi adı və ya şifrə yanlışdır.');
    }
    
  };

  return (
    <>
              <div className="main-title">
              <form  onSubmit={handleSubmit} action="" method="post">
            <div className="first-section">
              <span className="main-text">LOGIN</span>
              <div className="form">
                <input onChange={(e) => setAuthData({ ...authData, username: e.target.value })} id="username" className="username" type="text" placeholder="Username" />

                <input onChange={(e) => setAuthData({ ...authData, password: e.target.value })} id="password" className="password" type="text" placeholder="Password" />
              </div>
            </div>
            <div className="form-text">
              <span>Forgot the password?</span>
              <span>Registration</span>
            </div>
            <button type='submit' >LOGIN</button>
            </form>
          </div>
    </>
  );
}

export default Login;