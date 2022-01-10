import React from 'react';
import ArrowPorcent from './ArrowPorcent';

const CryptoCard = ({crypto}) => {

    return (
        <div className="bg-slate-800 border-1 rounded-[15px] p-2 md:1/5">
            <div className="flex flex-col justify-start items-center space-y-2 text-white">
                <div className="flex items-start space-x-4 w-full h-1/2">
                    <h3 className="text-xs text-yellow-600 border-yellow-600 border-b-[1px]">{crypto.symbol}</h3>
                    <ArrowPorcent changePercent={Number(crypto.priceChangePercent) > 0 ? true : false} percent={crypto.priceChangePercent}/>
                </div>
                <div className="flex flex-col items-start text-left w-full h-1/2">
                    <h3 className="font-bold text-xl">${crypto.lastPrice}</h3>
                    <p className="text-xs text-gray-400">Vol: {crypto.volume}</p>
                </div>
            </div>
        </div>
    )
}

export default CryptoCard;
