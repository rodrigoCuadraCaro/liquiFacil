import React from 'react';
import Link from "next/link";

const LiqList = () => {
    return (
        <>
            <div className={'flex flex-row border-double border-gray border-2 p-2 mb-3 w-50'}>
                <div className={'flex w-10 h-10'}>
                    <img src={'/images/profile.webp'} alt={'liquidacion'}/>
                </div>
                <div className={'flex justify-between ml-2'}>
                    <p>[Fecha]</p>
                </div>
                <Link href={'/checkLiq'}>
                    <div className={'flex justify ml-60'}>
                        <p> ver liquidacion</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default LiqList;