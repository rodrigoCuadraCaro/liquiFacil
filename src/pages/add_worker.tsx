import React from 'react';
import Sidebar from "../../components/Sidebar";
import NavbarUI from "../../components/NavbarUI";
import WorkerForm from "../../components/worker_form";

export default function Add_worker ({cargo, afp}){
    return (
        <>
            <Sidebar/>
            <WorkerForm cargo={cargo} afp={afp}/>
            <NavbarUI/>
        </>
    );
};
export const getServerSideProps = async (ctx) => {
    let res = await fetch('http://localhost:3000/api/cargo/cargoController');
    const cargo = await res.json();
    console.log(cargo);

    res = await fetch('http://localhost:3000/api/afp/afpController');
    const afp = await res.json();
    console.log(afp);

    return {
        props: {
            cargo,
            afp,
        },
    };
}