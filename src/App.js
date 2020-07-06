import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;

  flex-direction: column;
  @media (min-width: 567px) {
    padding-top: 5rem;
  }
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 350px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  border: 2px solid black;
  text-transform: uppercase;
  transition: background-size 0.3s ease;
  padding: .5rem 1.5rem;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }

  @media (min-width: 567px) {
    font-size: 2rem;
  }
`;

function App() {
  const [frase, setFrase] = useState({});

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const response = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const data = await response.json();
    setFrase(data[0]);
  };

  return (
    <Contenedor>
      {Object.keys(frase).length > 0 && <Frase {...frase} />}
      <Boton onClick={consultarApi}>Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
