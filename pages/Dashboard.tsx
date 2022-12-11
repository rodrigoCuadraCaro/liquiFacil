import React from 'react';
import NavbarUI from '../components/NavbarUI';
import Sidebar from "../components/Sidebar";
import MenuDashboard from "../components/MenuDashboard";

const Dashboard = () => {
    return (
        <>
            <NavbarUI/>
            <Sidebar/>
            <MenuDashboard/>
        </>
    );
};

export default Dashboard;