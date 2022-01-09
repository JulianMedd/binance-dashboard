import React from 'react';

const ArrowPorcent = ({changePercent, percent}) => {
    return (
        <div className={`${changePercent ? "text-green-500" : "text-red-600"} flex items-center`}>
            {   
                changePercent ? 
                (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
                ):(
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
                )
            }
            <p className="font-semibold text-sm">{percent}%</p>
        </div>
    )
}

export default ArrowPorcent;
