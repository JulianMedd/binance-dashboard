import React from 'react';
import ArrowPorcent from './ArrowPorcent';

const CryptoCard = ({crypto}) => {
    return (
        <div className="bg-slate-800 border-1 rounded-[15px] p-4 w-1/2 md:w-1/4">
            <div className="flex flex-col justify-start items-center space-y-2 text-white">
                <div className="flex items-start space-x-4 w-full h-1/2">
                    <h3 className="font-bold ">{crypto.symbol}</h3>
                    
                    <ArrowPorcent changePercent={Number(crypto.priceChangePercent) > 0 ? true : false} percent={crypto.priceChangePercent}/>
                       
                    {/* <p className={`${Number(crypto.priceChangePercent) > 0 ? "text-green-500" : "text-red-600"} font-semibold`}>{crypto.priceChangePercent}%</p> */}
                </div>
                <div className="flex flex-col items-start text-left w-full h-1/2">
                    <h3 className="font-bold text-2xl">${crypto.lastPrice}</h3>
                    <p>{crypto.volume}</p>
                </div>
            </div>
        </div>
    )
}

export default CryptoCard;
