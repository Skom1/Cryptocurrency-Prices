import { useEffect, useState} from 'react';
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMoney from "../hooks/useSelectMoney";
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  background-color: blueviolet;
  width: 100%;
  border: none;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
  
  &:hover {
    background-color: darkviolet;
    cursor: pointer;
  }
`

const Formulario = ({setMonedas}) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)
    const [ moneda, SelectMoney ] = useSelectMoney('Elige tu Moneda', monedas)
    const [ criptomoneda, SelectCriptoMoneda ] = useSelectMoney('Elige tu Criptomoneda', cryptos)


    useEffect( () => {
        const consultarApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const arrayCryptos = resultado.Data.map( crypto => {
                const objecto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objecto
            })
            setCryptos(arrayCryptos)
        }
        consultarApi()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes("")){
            setError(true)
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMoney />
                <SelectCriptoMoneda />

                <InputSubmit
                    type="submit" value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario;