import React from 'react'
import ArrowPorcent from './ArrowPorcent'

const CryptoList = ({
    head=true,
    symbol="Crypto Name",
    lastPrice="Last Price",
    changePercent="Price Change 24hs",
    lowPrice="Low Price 24hs",
    highPrice="High Price 24hs",
    volume="Volume 24hs"
}) => {
    return (
        <div className={`${head ? "bg-slate-900 font-bold rounded-t-[20px]" : "bg-slate-800 hover:bg-slate-900 border-b-[0.5px] border-yellow-200" } grid grid-cols-8 place-items-center w-full h-10 text-xs text-white `}>
            <div className="col-span-2">{symbol}</div>
            {
                head ? (
                    <>
                        <div className="col-span-2">{lastPrice}</div>
                        <div>
                            {changePercent}
                        </div>
                        <div>{lowPrice}</div>
                        <div>{highPrice}</div>
                    </>
                ):(
                    <>
                        <div className="col-span-2">${lastPrice}</div>
                        <ArrowPorcent changePercent={Number(changePercent) > 0 ? true : false} percent={changePercent}/>
                        <div>${lowPrice}</div>
                        <div>${highPrice}</div>
                    </>
                )
            }
            <div>{volume}</div>
        </div>
    )
}

export default CryptoList
