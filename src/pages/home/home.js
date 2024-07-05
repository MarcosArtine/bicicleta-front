import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import BicicletasDisponibles from "../../components/bicicletasDisponibles/bicicletasDisponibles";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // petición GET a la URL get_bicicletas usando Axios
    axios.get("http://localhost:8000/api/v1/get_bicicletas")
      .then(response => {
        console.log(response.data.data, 'esta es la respuesta de bicicletas');
        setItems(response.data.data); // Actualiza el estado con los datos de la respuesta
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="main-home">
      <Navbar />
      <h1 className="h1-home">BICICLETAS DISPONIBLES</h1>
      <div className="bicicletas-disp-size">
        <div className="bicicletas-disp-container">
          {items.map((item, index) => (
            <BicicletasDisponibles
              key={index}
              title={item.marca}   
              description={item.modelo}  
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
