import React from 'react'

export const Button = ({ children, disabled }) => {
    return (
            <button className="button button-primary" type="submit" id="send1" disabled={ disabled }>
                       { children }
            </button>
    )
}
