import React from 'react';
import Link from "next/link";

const WorkerCard = () => {
    return (
        <>
            <div className={'flex flex-row border-double border-gray border-2 p-2 mb-3 w-85'}>
                <div className={'flex w-10 h-10'}>
                    <img src={'/images/profile.webp'} alt={'imagen de perfil'}/>
                </div>
                <div className={'flex justify-between ml-2'}>
                    <p>[Nombre de Trabajador]</p>
                    <p>[Cargo]</p>
                </div>
                <div className={'flex ml-20'}>
                    <Link href={'/add_worker'}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                            Editar
                        </button>
                    </Link>
                </div>
                <div className={'flex ml-5'}>
                    <Link href={'/add_worker'}>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Eliminar
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default WorkerCard;