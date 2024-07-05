import { React } from "react";
import "./bicicletasDisponibles.css";

function BicicletasDisponibles(props) {
  return (
    <div className="bic-disp-container">
      <h4>{props.title}</h4>
      <h4>{props.description}</h4>
      <button className="bici-disp-button">ALQUILAR</button>
    </div>
  );
}

export default BicicletasDisponibles;
