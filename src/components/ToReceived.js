import React, { useEffect, useState } from 'react'
import { printToReceive } from '../helpers/ResultToSendToReceive';
import { Button } from './Button'

export const ToReceived = () => {
    
    const [ value, setValue ] = useState("");
    const [ result, setResult ] = useState({});
    const { totalAverage, totalToSend } = result;

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
                <h2>Calculator to Receive</h2>
                    <input 
                    name='toReceive'
                    onChange={ handleChange }
                    placeholder='Para recibir'
                    type="number"
                    value={ value }
                    />
                <Button>
                    Calcular
                </Button>
                </form>
                <h3>Commission</h3>
                <p>{ value === '' ? 0 : totalAverage.toFixed(2) }</p>
                <h3>I have to send</h3>
                <p>{ value === '' ? 0 : totalToSend.toFixed(2) }</p>
        </>
    )
}
