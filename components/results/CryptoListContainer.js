import React, {useState, useEffect} from 'react'
import CryptoList from './CryptoList'

const CryptoListContainer = ({cryptos}) => {

    return (
        <div className="flex flex-col">
            <div>
                <h3 className="mb-4 mx-4 md:mx-0 text-white font-bold text-xl px-4 pb-4 border-b-[1px] border-slate-400">
                    LISTA COMPLETA
                </h3>
            </div>
            <div className="bg-slate-800 rounded-[15px] h-80 w-full px-6 py-8 overflow-y-scroll">
                <div>
                    
                </div>
                <div>
                    <CryptoList/>
                    {
                        cryptos.map((crypto)=>{
                            return (
                                <CryptoList
                                    key={crypto.symbol}
                                    head={false}
                                    symbol={crypto.symbol}
                                    lastPrice={crypto.lastPrice}
                                    changePercent={crypto.priceChangePercent}
                                    lowPrice={crypto.lowPrice}
                                    highPrice={crypto.highPrice}
                                    volume={crypto.volume}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CryptoListContainer
