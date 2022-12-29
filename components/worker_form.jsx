import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function WorkerForm ({cargo, afp}) {
    const [newWorker, setNewWorker] = useState({
        name: "",
        rut: "",
        cargo: "",
        previsionSocial: ""
    })

    const [selectedGroup, setSelectedGroup] = useState(null);
    const handleGroupChange = event => {
        setSelectedGroup(event.target.value);
    }

    const [salarioBase, setSalarioBase] = useState(0);

    useEffect(() => {
        if (selectedGroup) {
            const selectedCargo = cargo.find(c => c._id === selectedGroup);
            setSalarioBase(selectedCargo.salarioBase);
        }
    }, [selectedGroup]);


    const handleChange = (e) => setNewWorker({...newWorker, [e.target.name]: e.target.value});

    const createWorker = async () => {
        try {
            await fetch('http://localhost:3000/api/worker/workerController', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newWorker)
            })
        } catch (e) {
            console.error(e)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createWorker();
        console.log('enviando formulario...');
    }

    let valor = 0

    return (
        <>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex justify-center'}>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}  controlId="txtNombreCol" onChange={handleChange}>
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" name="name"/>
                            </Form.Group>

                            <Form.Group as={Col}  controlId="txtRUTCol" onChange={handleChange}>
                                <Form.Label>RUT</Form.Label>
                                <Form.Control type="text" placeholder="RUT" name="rut"/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress2" onChange={handleChange}>
                            <Form.Label>Cargo</Form.Label>
                            <Form.Select defaultValue="0" name="cargo" value={selectedGroup} onChange={handleGroupChange}>
                                {cargo.length === 0 ? (
                                    <option>no hay cargos</option>
                                ) : (
                                    cargo.map(c =>
                                        <>
                                            <option value={c._id}>{c.name}</option>
                                        </>
                                    )
                                )}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3"  controlId="formGridAddress2" onChange={handleChange}>
                            <Form.Label>Previsión Social</Form.Label>
                            <Form.Select defaultValue="0" name="previsionSocial">
                                {
                                    afp.map.length === 0 ?(
                                        <option value='0'>no hay afps disponibles</option>
                                    ):(afp.map(afp =>
                                        <>
                                            <option value={afp._id}>{afp.name}</option>
                                        </>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>

                        <Row className={"mb-3"}>
                            <Form.Group as={Col} controlId="txtSalarioBase" onChange={handleChange}>
                                <Form.Label>Salario Base</Form.Label>
                                <Form.Control  value={salarioBase} disabled/>
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