import React from 'react'
import ArrowPorcent from './ArrowPorcent'

const CryptoList = ({
    head=true,
    symbol="Crypto Name",
    lastPrice="Last Price",
    changePercent="Price Change 24hs",
    lowPrice="Low Price 24hs",
    highPrice="High Price 24hs",
    volume="Volume"
}) => {
    return (
        <div className={`${head ? "bg-slate-900" : "bg-slate-800" } grid grid-cols-8 place-items-center w-full h-10 text-xs text-white `}>
            <div className="col-span-2">{symbol}</div>
            <div className="col-span-2">{lastPrice}</div>
            {
                head ? (
                    <div>
                        {changePercent}
                    </div>
                ):(
                    <ArrowPorcent changePercent={Number(changePercent) > 0 ? true : false} percent={changePercent}/>
                )
            }
            <div>{lowPrice}</div>
            <div>{highPrice}</div>
            <div>{volume}</div>
        </div>
    )
}

export default CryptoList
