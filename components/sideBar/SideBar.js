import React from 'react';
import Image from 'next/image';
import logoBinance from '../../public/binanceLogo.png';

const SideBar = () => {
    return (
        <aside className="h-14 w-screen fixed top-0 left-0 px-6 z-40 bg-slate-800 flex items-center md:w-40 md:h-screen md:px-0 md:pr-6 md:rounded-r-[20px] border-b-2 md:rounded-bl-none md:border-r-2 md:border-b-0 border-yellow-600">
            <div className="flex justify-start items-center w-full h-full">
                <div className="w-1/2 h-full flex items-center md:w-3/4">
                    <div className="md:rotate-[270deg] px-4 md:px-0 "> 
                        <Image
                            src={logoBinance}
                            alt='logo binance'
                        />
                    </div>
                </div>
                <p className="text-white md:rotate-[270deg] text-base font-thin md:w-1/4 md:text-center md:mt-10">DASHBOARD</p>
            </div>
        </aside>
    )
}

export default SideBar
