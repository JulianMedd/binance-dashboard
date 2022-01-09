import React from 'react';

const CryptoCard = ({crypto}) => {
    return (
        <div className="bg-slate-800 border-1 rounded-[15px] p-4">
            <div className="flex flex-col justify-start items-center space-y-2 text-white">
                <div className="flex items-start space-x-4 w-full h-1/2">
                    <h3 className="font-bold ">{crypto.symbol}</h3>
                    <p className="text-emerald-600 font-semibold">+ porcent</p>
                </div>
                <div className="flex flex-col items-start text-left w-full h-1/2">
                    <h3 className="font-bold text-2xl">$ lasprice</h3>
                    <p>volumen</p>
                </div>
            </div>
            
        </div>
    )
}

export default CryptoCard
