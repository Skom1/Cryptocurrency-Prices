import React from 'react';
import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #FFF;
  font-family: sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 10px;
`

const Imagen = styled.img`
  display: block;
  width: 100px;
`

const Texto = styled.p`
  font-size: 15px;
  span {
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`

const Resultado = ({resultado}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return(
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio mas alto del dia es: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio mas bajo del dia es: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas del dia: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actulizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
};

export default Resultado;