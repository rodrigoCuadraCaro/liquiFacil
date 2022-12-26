import React from 'react';
import NavbarUI from "../components/NavbarUI";
import Sidebar from "../components/Sidebar";
import Worker_card from "../components/worker_card";
import MenuDashboard from "../components/MenuDashboard";
import {Dropdown} from "@restart/ui";
import Menu = Dropdown.Menu;
import Liq_history from "../components/liq_history";

const LiqHistory = () => {
    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex flex-col justify-start p-3 w-100'}>
                    <Liq_history/>
                    <Liq_history/>
                    <Liq_history/>
                    <Liq_history/>
                    <Liq_history/>
                </div>
            </div>
            <Sidebar/>
        </>
    );
};

export default LiqHistory;