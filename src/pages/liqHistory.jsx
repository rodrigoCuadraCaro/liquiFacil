import React from 'react';
import NavbarUI from "../../components/NavbarUI";
import Sidebar from "../../components/Sidebar";
import WorkerCardHistory from "../../components/workerCardHistory";

export default function LiqHistory ({workers}) {
    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex flex-col justify-start p-3 w-100'}>
                    {
                        workers.length === 0 ? (
                            <h2>no hay trabajadores!</h2>
                        ): (workers.map((w, index) =>
                            <>
                                <WorkerCardHistory key={index} workers={w}/>
                            </>
                        ))
                    }
                </div>
            </div>
            <Sidebar/>
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    let res = await fetch('http://localhost:3000/api/worker/getAll');
    const workers = await res.json();

    return {
        props: {
            workers,
        },
    };
}