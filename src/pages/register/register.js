import { React } from "react";
import "./register.css";
import Navbar from "../../components/navbar/navbar";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="main-register">
        <h1 className="h1-register">REGISTRO DE USUARIO</h1>
        <form
          className="form-size"
          onSubmit={console.log("Contraseña actualizada correctamente")}
        >
          <div className="div-form">
            <label className="label-form">Email</label>
            <input
              className="input-form"
              type="email"
              placeholder="Ingrese su email"
            />
          </div>
          <div className="div-form">
            <label className="label-form">Nombre</label>
            <input
              className="input-form"
              type="text"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="div-form">
            <label className="label-form">Contraseña</label>
            <input
              className="input-form"
              type="password"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div className="div-form">
            <label className="label-form">Confirmar contraseña</label>
            <input
              className="input-form"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>
          <button className="button-form" type="submit">
            CREAR USUARIO
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
