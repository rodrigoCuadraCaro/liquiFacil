import React from 'react';
import Link from "next/link";

export default function WorkerCardHistory ({workers}) {
    return (
        <>
            <div className={'flex flex-row border-double border-gray border-2 p-2 mb-3 w-85'}>
                <div className={'flex w-10 h-10'}>
                    <img src={'/images/profile.webp'} alt={'imagen de perfil'}/>
                </div>
                <div className={'flex justify-between ml-2'}>
                <p>{workers.name}</p>
                </div>
                <div className={'flex justify-between ml-2'}>
                <p>{workers.cargo.name}</p>
                </div>
                <div className={'flex ml-20'}>
                    <Link href={'/edit_worker?id='+workers._id}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                            Ver historial
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    let res = await fetch('http://localhost:3000/api/worker/workerController');
    const workers = await res.json();

    const cargoId = workers.map(w => w.cargo);
    res = await fetch('http://localhost:3000/api/cargo/'+cargoId);
    const cargo = res;


    return {
        props: {
            workers,
            cargo,
        },
    };
}

async function deleteAndRefresh(id) {
    try {
        await fetch('http://localhost:3000/api/worker/' + id, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
        })
        window.location.reload();
        alert('Trabajador eliminado correctamente!')
    } catch (e) {
        alert('Ha ocurrido un error al borrar este trabajador!')
        console.error(e)
    }
}