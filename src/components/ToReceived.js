import React from 'react'
import { Button } from './Button'

export const ToReceived = () => {
    return (
        <>
              <form 
                className="form"
                >
                <h2>Calculator to Receive</h2>
                    <input 
                    className="number2"
                    type="number"/>
                <Button>
                    Calcular
                </Button>
                </form>
                <h3>Commission</h3>
                <div id="average2"><p>0</p></div>
                <h3>I have to send</h3>
                <div  id="resultReceive2"><p>0</p></div>
        </>
    )
}
