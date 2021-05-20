import { createContext, useState } from "react";

export const FavoriteContext = createContext();

const CalculateProvider = ( { children } ) => {
    
    const [ saved, setSaved ] = useState({})
    
    return (
        <FavoriteContext.Provider value={
            {
                saved,
                setSaved
            }
        }>
            {children}
        </FavoriteContext.Provider>
    )
}


export default  CalculateProvider