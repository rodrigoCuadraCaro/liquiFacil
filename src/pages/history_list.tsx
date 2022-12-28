import React from 'react';
import NavbarUI from "../../components/NavbarUI";
import Sidebar from "../../components/Sidebar";
import Liq_list from "../../components/liq_list";

const HistoryList = () => {
    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-10/12 p-4'}>
                <h1 className={'mb-5'}>Liquidaciones de [nombre trabajador]</h1>
                <Liq_list/>
            </div>
            <Sidebar/>
        </>
    );
};

export default HistoryList;