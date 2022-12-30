import React from 'react';
import NavbarUI from "../../components/NavbarUI";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import WorkerCard from "../../components/worker_card";

export default function WorkersList ({workers}) {
    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-10/12 p-4'}>
                <div className={'flex flex-col justify-start p-3 w-100'}>
                    {
                        workers.length === 0 ? (
                           <h2>no hay trabajadores!</h2>
                        ): (workers.map(w =>
                             <>
                                 <WorkerCard workers={w}/>
                             </>
                        ))
                    }
                    <div className={'flex justify-center'}>
                        <Link href={'/add_worker'}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Agregar Colaborador
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    let res = await fetch('http://localhost:3000/api/worker/workerData');
    const workers = await res.json();

    return {
        props: {
            workers,
        },
    };
}