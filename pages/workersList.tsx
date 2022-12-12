import React from 'react';
import NavbarUI from "../components/NavbarUI";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Worker_card from "../components/worker_card";

const WorkersList = () => {
    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex flex-col justify-start p-3 w-100'}>
                    <Worker_card/>
                    <Worker_card/>
                    <Worker_card/>
                </div>
            </div>
            <Sidebar/>
        </>
    );
};

export default WorkersList;