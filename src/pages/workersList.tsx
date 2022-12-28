import React from 'react';
import NavbarUI from "../../components/NavbarUI";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import Worker_card from "../../components/worker_card";
import Link from "next/link";

const WorkersList = () => {
    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-10/12 p-4'}>
                <div className={'flex flex-col justify-start p-3 w-100'}>
                    <Worker_card/>
                    <Worker_card/>
                    <Worker_card/>
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

export default WorkersList;