import React from 'react';
import NavbarUI from "../../components/NavbarUI";
import Sidebar from "../../components/Sidebar";
import Liquidacion from "../../components/liquidacion";

const CheckLiq = () => {
    return (
        <>
            <NavbarUI/>
            <Liquidacion/>
            <Sidebar/>
        </>
    );
};

export default CheckLiq;