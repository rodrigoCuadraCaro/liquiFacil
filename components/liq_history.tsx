import React from 'react';
import Link from "next/link";

const LiqHistory = () => {
    return (
        <>
            <div className={'flex flex-row border-double border-gray border-2 p-2 mb-3 w-50'}>
                <div className={'flex w-10 h-10'}>
                    <img src={'/images/profile.webp'} alt={'liquidacion'}/>
                </div>
                <div className={'flex justify-between ml-2'}>
                    <p>[Nombre de Trabajador]</p>
                    <p>[Cargo]</p>
                </div>
                <Link href={'/history_list'}>
                <div className={'flex justify ml-60'}>
                    <p> ver liquidaciones</p>
                </div>
                </Link>
            </div>
        </>
    );
};

export default LiqHistory;