import React from 'react';
import {Container} from "react-bootstrap";

const Profilebar = () => {
    return (
        <>
            <Container>
                <div className={'flex flex-col'}>
                    <div className={'flex'}>
                        <Image className={'profile-picture'} src={'/images/profile.webp'}/>
                    </div>
                    <div className={'profile-data flex'}>
                        <p>Nombre</p>
                        <p>cargo</p>
                    </div>
                    <div className={'Menu'}>
                        <div className={'buttons'}>
                            <h3>Mi Perfil</h3>
                            <h3>Mis liquidaciones</h3>
                            <h3>Cerrar Sesión</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profilebar;