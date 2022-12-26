import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const WorkerForm = () => {
    return (
        <>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex justify-center'}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="txtNombreCol">
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control type="text" placeholder="Nombre"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="txtRUTCol">
                                <Form.Label>RUT</Form.Label>
                                <Form.Control type="text" placeholder="RUT"/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Select defaultValue="null">
                                <option>Gerente</option>
                                <option>Diseñador</option>
                                <option>Programador Jr.</option>
                                <option>Programador Senior.</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Previsión Social</Form.Label>
                            <Form.Select defaultValue="null">
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
                        </Row>
                        <Button variant="primary" type="submit" className={'mt-3'}>
                            Agregar Colaborador
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default WorkerForm;