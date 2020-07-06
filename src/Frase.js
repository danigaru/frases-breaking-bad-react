import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    font-size: 1.2rem;

    @media (min-width: 567px) {
      font-size: 1.5rem;
    }

    &::before {
      content: open-quote;
      font-size: 5rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;

      @media (min-width: 567px) {
        font-size: 10rem;
      }
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .9rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
    font-weight: bold;

    @media (min-width: 567px) {
      font-size: 1.4rem;
    }
  }
`;

const Frase = ({ quote, author }) => {
  return (
    <ContenedorFrase>
      <h1>{quote}</h1>
      <p>{author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
