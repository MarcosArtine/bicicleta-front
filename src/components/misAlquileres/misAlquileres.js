import { React } from "react";
import "./misAlquileres.css";

function MisAlquileres(props) {
  return (
    <div className="bic-disp-container">
      <h4>{props.title}</h4>
      <h4>{props.description}</h4>
      <button className="bici-disp-button">FINALIZAR</button>
    </div>
  );
}

export default MisAlquileres;
