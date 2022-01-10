import React, {useEffect, useState} from 'react';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' 
        });
    };

    return (
        <div className={`${!showButton ? "hidden":"block"} cursor-pointer fixed bottom-4 right-4 rounded-[15px] bg-yellow-500 text-white p-2`} onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
        </div>
    )
}

export default ScrollToTop
