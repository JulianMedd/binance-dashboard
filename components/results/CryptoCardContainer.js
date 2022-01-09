import React from 'react'
import CryptoCard from './CryptoCard'

const CryptoCardContainer = ({cryptos}) => {
    return (
        <div className="flex justify-center items-center flex-wrap gap-2">
            {
                cryptos.map((crypto)=>{
                    return <CryptoCard key={crypto.symbol} crypto={crypto}/>
                })
            }
        </div>
    )
}

export default CryptoCardContainer
