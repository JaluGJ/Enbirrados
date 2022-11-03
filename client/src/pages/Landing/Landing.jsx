import React from 'react'
import style from './Landing.module.css'
import logo from '../../img/party.png'
import Login from '../../components/Login/Login'

/*
Landing:  
-Sistema de login,
  -boton que envia info del login
  -boton que invita a registrarse
    -registro de un nuevo usuario.
    -campos: nombre, apellido, email, password,  
-Imagen de la app,
-about

*/

export default function Landing() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img className={style.logoImg} src={logo}/>
      </div>
      <div className={style.login}>
        <Login/>
      </div>
    </div>
  )
}
