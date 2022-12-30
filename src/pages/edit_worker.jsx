import React from 'react';
import Sidebar from "../../components/Sidebar";
import NavbarUI from "../../components/NavbarUI";
import WorkerEdit from "../../components/worker_edit";

export default function edit_worker ({worker,cargo,afp}){
    return (
        <>
            <Sidebar/>
            <WorkerEdit cargo={cargo} afp={afp} worker={worker}/>
            <NavbarUI/>
        </>
    );
};
export const getServerSideProps = async (ctx) => {
    const id = ctx.query.id;

    let res = await fetch('http://localhost:3000/api/cargo/cargoController');
    const cargo = await res.json();
    console.log(cargo);

    res = await fetch('http://localhost:3000/api/afp/afpController');
    const afp = await res.json();
    console.log(afp);

    res = await fetch('http://localhost:3000/api/worker/workerData?id='+id);
    const worker = await res.json();
    console.log(worker);

    return {
        props: {
            cargo,
            afp,
            worker,
        },
    };
}