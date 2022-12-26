import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Liquidacion = () => {
    return (
        <>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex justify-center'}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="txtNombreCol">
                                <Form.Label>Nombre de Trabajador</Form.Label>
                                <Form.Control type="text" placeholder="txtNombre" disabled/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="txtRUTCol">
                                <Form.Label>RUT</Form.Label>
                                <Form.Control type="text" placeholder="RUT" disabled/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="txtFecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control placeholder="dd/mm/aaaa" disabled/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Previsión Social</Form.Label>
                            <Form.Select defaultValue="null" disabled>
                                <option>Plan Vital</option>
                                <option>Uno</option>
                                <option>XD</option>
                                <option>XD</option>
                            </Form.Select>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="txtSalarioBase">
                                <Form.Label>Salario Base</Form.Label>
                                <Form.Control disabled/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="txtGratificacion">
                                <Form.Label>Gratificacion</Form.Label>
                                <Form.Control placeholder="Ingrese monto" disabled/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Seguro de Cesantía</Form.Label>
                                <Form.Control disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Previsión Social</Form.Label>
                                <Form.Control disabled/>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Total Bruto</Form.Label>
                                <Form.Control disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Total Descuentos</Form.Label>
                                <Form.Control disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Total Líquido</Form.Label>
                                <Form.Control disabled/>
                            </Form.Group>
                        </Row>
                        <Link href={'/history_list'}>
                            <Button variant="primary" type="submit" className={'mt-3'}>
                                Volver
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Liquidacion;