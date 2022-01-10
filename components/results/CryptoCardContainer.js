import React, {useState, useEffect, useContext} from 'react'
import CryptoCard from './CryptoCard';
import { CryptoContext } from '../../context/CryptoContext';

const CryptoCardContainer = ({cryptos}) => {
    const [bestyCryptos, setBestyCryptos] = useState([])
    const { bestsCryptos } = useContext(CryptoContext)
    
    useEffect(() => {
        setBestyCryptos(bestsCryptos(cryptos))
    }, [cryptos])
    return (
        <div className="flex flex-col ">
            <h3 className="mb-4 mx-4 md:mx-0 text-white text-xl px-4 pb-4 border-b-[1px] border-slate-400">
                TOP 4
            </h3>
            <div className="flex justify-center items-stretch flex-wrap gap-2">
                {
                    bestyCryptos.map((crypto)=>{
                        return <CryptoCard key={crypto.symbol} crypto={crypto}/>
                    })
                }
            </div>
        </div>
    )
}

export default CryptoCardContainer
