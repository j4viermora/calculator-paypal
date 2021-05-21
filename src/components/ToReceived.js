import React, { useEffect, useState } from 'react'
import { printToReceive } from '../helpers/ResultToSendToReceive';
import { Button } from './Button'

export const ToReceived = () => {
    
    const [ value, setValue ] = useState("");
    const [ result, setResult ] = useState({});
    const { totalAverage, totalToSend } = result;

    const ifInitial = value === '';

    useEffect(()=>{

        const { totalToSend, totalAverage } = printToReceive( value )

        setResult({
            ...result,
            totalAverage,
            totalToSend,
        })

    }, [ value ])

    const handleChange = ( {target} ) => {
        setValue(target.value)
    };

    return (
        <>
              <form 
                className="form"
                >
                <h2>Calculadora para recibir</h2>
                    <input 
                    name='toReceive'
                    onChange={ handleChange }
                    placeholder='Para recibir'
                    type="number"
                    value={ value }
                    style={{
                        marginRight: '10px'
                    }}
                    />
                {/* <Button>
                    Calcular
                </Button> */}
                </form>
                <h3>Comisión</h3>
                    <input
                        type='number'
                        value={  ifInitial ? 0 : totalAverage.toFixed(2)  }
                    />
                <h3>Debo enviar</h3>
                    <input 
                        type='number'
                        value={ ifInitial ? 0 : totalToSend.toFixed(2) }
                    />
        </>
    )
}
