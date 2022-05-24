import React from 'react';
import styled from "@emotion/styled";

const Texto = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  padding: 15px;
  font-family: sans-serif;
  color: crimson;
  text-transform: uppercase;
`

const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
};

export default Error;