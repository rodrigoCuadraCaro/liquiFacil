import React from 'react';
import NavbarUI from "../../components/NavbarUI";
import Sidebar from "../../components/Sidebar";
import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function LiqForm ({workers}) {

    const [workerId, setWorkerId] = useState(null);
    const [selectedWorker, setSelectedWorker] = useState(null);
    const [rut, setRut] = useState('');
    const [afp, setSocialSecurityPlan] = useState('');
    const [salary, setSalary] = useState(0);
    const [gratuity, setGratuity] = useState(0);
    const [unemploymentInsurance, setUnemploymentInsurance] = useState(0);
    const [socialSecurity, setSocialSecurity] = useState(0);
    const [totalGross, setTotalGross] = useState(0);
    const [totalDeductions, setTotalDeductions] = useState(0);
    const [totalNet, setTotalNet] = useState(0);

    const handleWorkerChange = (event) => {
        const selectedWorker = workers?.length ? workers.find(w => w._id === event.target.value) :
        undefined;
        if (selectedWorker) {
            setSelectedWorker(selectedWorker);
            setWorkerId(selectedWorker._id)
            setRut(selectedWorker.rut);
            setSocialSecurityPlan(selectedWorker.previsionSocial);
            setSalary(Number(selectedWorker.cargo.salarioBase));
            setGratuity(Number(selectedWorker.cargo.gratificacion));
            setUnemploymentInsurance(salary * 0.03);
            setSocialSecurity(Number(salary * Number(selectedWorker.previsionSocial.comision)));
            setTotalGross(salary);
            setTotalDeductions(Number(unemploymentInsurance + socialSecurity));
            setTotalNet(Number(totalGross - totalDeductions));
        }
    }

    useEffect(() => {

        return () => {
            // clean up logic goes here
        };
    }, [workers]);

    const [newLiquidaton, setNewLiquidation] = useState({
        worker: workerId,
        rut: rut,
        date: "",
        previsionSocial: afp._id,
        salarioBase: salary,
        gratificacion: gratuity,
        seguroDeCesantia: unemploymentInsurance,
        previsionSocialDiscount: socialSecurity,
        totalBruto: totalGross,
        totalDiscounts: totalDeductions,
        totalLiquid: totalNet,
    })

    const uploadLiquidation = async () => {
        try {
            await fetch('http://localhost:3000/api/worker/'+worker[0]._id, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newLiquidaton)
            })
            window.location.href='http://localhost:3000/workersList'
        } catch (e) {
            console.error(e)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        modifyWorker();
        console.log('enviando formulario...');
    }

    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex justify-center'}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="txtNombreCol">
                                <Form.Label>Nombre de Trabajador</Form.Label>
                                <Form.Select defaultValue="0" onChange={handleWorkerChange}>
                                    {
                                        workers.map?.length === 0 ? (
                                            <>
                                                <option>No hay trabajadores disponibles</option>
                                            </>
                                        ) : workers.map(w =>
                                            <option value={w._id}>{w.name}</option>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="txtRUTCol">
                                <Form.Label>RUT</Form.Label>
                                <Form.Control type="text" placeholder="RUT" value={rut}disabled/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="txtFecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control placeholder="dd/mm/aaaa" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Previsión Social</Form.Label>
                            <Form.Select defaultValue="null" disabled>
                                <option value={afp._id}>{afp.name}</option>
                            </Form.Select>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="txtSalarioBase">
                                <Form.Label>Salario Base</Form.Label>
                                <Form.Control value={salary}disabled/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="txtGratificacion">
                                <Form.Label>Gratificacion</Form.Label>
                                <Form.Control placeholder="Ingrese monto" value={gratuity}disabled/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Seguro de Cesantía</Form.Label>
                                <Form.Control value={unemploymentInsurance}disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Previsión Social</Form.Label>
                                <Form.Control value={socialSecurity} disabled/>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Total Bruto</Form.Label>
                                <Form.Control value={salary}disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Total Descuentos</Form.Label>
                                <Form.Control value={totalDeductions}disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Total Líquido</Form.Label>
                                <Form.Control value={totalNet}disabled/>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit" className={'mt-3'}>
                            Generar Liquidación
                        </Button>
                    </Form>
                </div>
            </div>
            <Sidebar/>
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    let res = await fetch('http://localhost:3000/api/worker/getAll');
    const workers = await res.json();

    return {
        props: {
            workers,
        },
    };
}