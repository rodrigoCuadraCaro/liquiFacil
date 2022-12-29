import React from 'react';
import Home from './Home';

const Index = () => {
    return (
        <>
            <Home/>
        </>
    );
};

export default Index;

export async function getServerSideProps(){
    const res = await fetch('http://localhost:3000/api/afp/afpController');
    const afp = await res.json();

    console.log(afp);

    return{
        props: {}
    }
}