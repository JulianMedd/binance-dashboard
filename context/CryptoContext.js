import React, { createContext } from 'react';

export const CryptoContext = createContext()

export const CryptoProvider = ({children}) =>{

    const bestsCryptos = (dataCryptos) =>{
        return orderCryptosByPercent(dataCryptos).slice(0,4)
    }

    const orderCryptosByPercent = (allCryptos) =>{
        return allCryptos.sort((cryptoA, cryptoB) =>(cryptoA.priceChangePercent < cryptoB.priceChangePercent) ? 1 : (cryptoA.priceChangePercent > cryptoB.priceChangePercent) ? -1 : 0  )
    }

    return (
        <CryptoContext.Provider value={{bestsCryptos}}>
            {children}
        </CryptoContext.Provider>
    )
}