import React from 'react';
import FooterUi from "../../components/FooterUI";
import Login from '../../components/Login';
import Button from "react-bootstrap/Button";
import AfpDao from './api/afp/afpController';

const Home = () => {
    return (
        <>
            <Login/>
        </>
    );
};

export default Home;

export const getServerSideProps = async (ctx) => {
    let res = await fetch('http://localhost:3000/api/cargo/cargoController');
    const cargo = await res.json();
    console.log(cargo);

    res = await fetch('http://localhost:3000/api/afp/afpController');
    const afp = await res.json();
    console.log(afp);

    res = await fetch('http://localhost:3000/api/worker/workerController');
    const worker = await res.json();
    console.log(worker);

    return {
        props: {
            cargo,
            afp,
        },
    };
}