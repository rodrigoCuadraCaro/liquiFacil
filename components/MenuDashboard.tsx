import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const MenuDashboard = () => {
    return (
        <>
            <div className={'flex flex-col items-center absolute mt-20 left-60 p-4'}>
                <div className={'flex flex-row items-center pl-10 w-100'}>
                    <h1>Bienvenid@!</h1>
                </div>
                <div className={'flex flex-row items-center pl-10 w-100'}>
                    <h3>Hoy es [fecha dd/mm/yyyy]</h3>
                </div>
                <div className={'flex flex-row items-center justify-center w-100'}>
                    <div className={'flex border-solid border-green m-5'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/images/office_worker.jpg" />
                            <Card.Body>
                                <Card.Title>Colaboradores</Card.Title>
                                <Card.Text>
                                    Gestiona a los colaboradores de tu empresa.
                                </Card.Text>
                                <Link href={"/liqForm"}>
                                    <Button variant="primary">Ir</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={'flex border-solid border-green m-5'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/images/signing.jpg" />
                            <Card.Body>
                                <Card.Title>Liquidaciones</Card.Title>
                                <Card.Text>
                                    Genera las liquidaciones con un solo click.
                                </Card.Text>
                                <Link href={"/liqForm"}>
                                    <Button variant="primary">Ir</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={'flex border-solid border-green m-5'}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/images/archive.webp" />
                            <Card.Body>
                                <Card.Title>Historial de Liquidaciones</Card.Title>
                                <Card.Text>
                                    Consulta las liquidaciones de tus colaboradores
                                </Card.Text>
                                <Link href={"/liqForm"}>
                                    <Button variant="primary">Ir</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuDashboard;