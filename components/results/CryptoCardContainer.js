import React, {useState, useEffect} from 'react'
import CryptoCard from './CryptoCard'

const CryptoCardContainer = ({cryptos}) => {
    const [bestyCryptos, setBestyCryptos] = useState([])

    const orderCrytosByPercent = () =>{
        return cryptos.sort((cryptoA, cryptoB) =>(cryptoA.priceChangePercent < cryptoB.priceChangePercent) ? 1 : (cryptoA.priceChangePercent > cryptoB.priceChangePercent) ? -1 : 0  )
    }
    
    useEffect(() => {
        let bestFourCrypto = orderCrytosByPercent().slice(0,4)
        setBestyCryptos(bestFourCrypto)
    }, [])
    return (
        <div className="flex justify-center items-center flex-wrap gap-2">
            {
                bestyCryptos.map((crypto)=>{
                    return <CryptoCard key={crypto.symbol} crypto={crypto}/>
                })
            }
        </div>
    )
}

export default CryptoCardContainer
