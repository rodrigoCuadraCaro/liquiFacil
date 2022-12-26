import React from 'react';
import Sidebar from "../components/Sidebar";
import NavbarUI from "../components/NavbarUI";
import WorkerForm from "../components/worker_form";

const AddWorker = () => {
    return (
        <>
            <Sidebar/>
            <WorkerForm/>
            <NavbarUI/>
        </>
    );
};

export default AddWorker;