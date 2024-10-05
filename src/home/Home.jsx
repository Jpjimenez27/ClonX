import './home.css';
import logo from './../assets/twitter-logo.svg';
import googleLogo from "./../assets/Google_logo.webp";
import appleLogo from "./../assets/appleLogo.png";
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import { useState } from 'react';

export const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegOpen, setIsRegOpen] = useState(false);

  return (
    <div className="container">
      <main className="home_content">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="login_content">
          <h1>Lo que está pasando ahora</h1>
          <h2>Únete Hoy</h2>
          <div className="buttons">
            <a className="white_button">
              <div className="content">
                <div className="logo">
                  <img src={googleLogo} alt="" />
                </div>
                <p>Registarse con Google</p>
              </div>


            </a>

            <a className="white_button">
              <div className="content">
                <div className="logo">
                  <img src={appleLogo} alt="" />
                </div>
                <p className='apple_button_text'>Registarse con Apple</p>
              </div>
            </a>
            <div className="separation">
              <hr />
              <p>o</p>
              <hr />
            </div>
            <button className="create_account_button" onClick={() => setIsRegOpen(true)} >Crear cuenta</button>
            {isRegOpen ? <RegisterModal isOpen={isRegOpen} closeModal={() => setIsRegOpen(false)} /> : <></>}
          </div>
          <p className='service_terms'>Al registrarte, aceptas los <a href="#">Términos de servicio</a> y la <a href="#">Política de privacidad</a>, incluida la política de <a href="#">Uso de Cookies</a>.</p>
          <br />
          <div>
            <h3>¿Ya tienes una cuenta?</h3>
            <div>
              <button className='twitter-button' onClick={() => setIsModalOpen(true)} >Iniciar sesión</button>
              {isModalOpen ? <LoginModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> : <></>}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}