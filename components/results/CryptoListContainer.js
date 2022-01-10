import React, {useState} from 'react';
import CryptoList from './CryptoList';

const CryptoListContainer = ({cryptos}) => {
    const [search, setSearch] = useState("")

    const filterCryptos = cryptos.filter((crypto)=>crypto.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="flex flex-col">
            <div>
                <h3 className="mb-4 mx-4 md:mx-0 text-white font-bold text-xl px-4 pb-4 border-b-[1px] border-slate-400">
                    LISTA COMPLETA
                </h3>
            </div>
            <div className="list bg-slate-800 rounded-[15px] h-80 w-full px-6 py-8 overflow-y-scroll flex flex-col">
                <div className="w-1/2">
                    <input type="text" placeholder="Buscar Moneda" className="w-full bg-slate-700 text-thin text-white rounded-full border-0 px-4 py-2 mb-4 focus:outline-none focus:border-sky-500" onChange={e=>setSearch(e.target.value)}/> 
                </div>
                <div>
                    <CryptoList/>
                    {
                        filterCryptos.map((crypto)=>{
                            return (
                                <CryptoList
                                    key={crypto.symbol}
                                    head={false}
                                    symbol={crypto.symbol}
                                    lastPrice={crypto.lastPrice}
                                    changePercent={crypto.priceChangePercent}
                                    lowPrice={crypto.lowPrice}
                                    highPrice={crypto.highPrice}
                                    volume={crypto.quoteVolume}
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
