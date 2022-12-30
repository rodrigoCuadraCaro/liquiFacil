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

    const [selectedWorker, setSelectedWorker] = useState(workers[0]);
    const [afp, setSocialSecurityPlan] = useState(selectedWorker.previsionSocial);
    const [salary, setSalary] = useState(Number(selectedWorker.cargo.salarioBase));
    const [gratuity, setGratuity] = useState(Number(selectedWorker.cargo.gratificacion));
    const [unemploymentInsurance, setUnemploymentInsurance] = useState(salary * 0.03);
    const [socialSecurity, setSocialSecurity] = useState(salary * Number(selectedWorker.previsionSocial.comision));
    const [totalGross, setTotalGross] = useState(Number(salary + gratuity));
    const [totalDeductions, setTotalDeductions] = useState(unemploymentInsurance + socialSecurity);
    const [totalNet, setTotalNet] = useState(totalGross - totalDeductions);
    const [workerId, setWorkerId] = useState(selectedWorker);
    const [rut, setRut] = useState(selectedWorker.rut);

    const handleWorkerChange = async (event) => {
        const selectedWorker = workers?.length ? workers.find(w => w._id === event.target.value) :
            undefined;
        if (selectedWorker) {
            setSelectedWorker(selectedWorker);
            setWorkerId(selectedWorker._id);
            setRut(selectedWorker.rut);
            setSocialSecurityPlan(selectedWorker.previsionSocial);
            setSalary(Number(selectedWorker.cargo.salarioBase));
            setGratuity(Number(selectedWorker.cargo.gratificacion));
            let segurodes = (salary * 0.03);
            let dctoafp = (salary * Number(selectedWorker.previsionSocial.comision));
            let totalNeto = (salary + gratuity);
            let totalDctos = (dctoafp + segurodes);
            let totalLiq = (totalNeto - totalDctos);
            // Calculate the dependent state variables after setting salary and gratuity
            setUnemploymentInsurance(await segurodes);
            setSocialSecurity(dctoafp);
            setTotalGross(totalNeto);
            setTotalDeductions(totalDctos);
            setTotalNet(totalLiq);
        }
    }

    useEffect(() => {

        return () => {
            // clean up logic goes here
        };
    }, [workers]);

    const [newLiquidation, setDate] = useState({
        date: "",
        previsionSocialDiscount: socialSecurity,
        salary: salary,
        gratificacion: gratuity,
        seguroDeCesantia: unemploymentInsurance,
        totalBruto: totalGross,
        totalDiscounts: totalDeductions,
        totalLiquid: totalNet,
    })

    const handleChange = (e) => setDate({...newLiquidation, [e.target.name]: e.target.value});

    const uploadLiquidation = async () => {
        try {
            await fetch('http://localhost:3000/api/worker/workerData?id='+workerId, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newLiquidation)
            })
            alert('Liquidacion almacenada con exito!');
            window.location.href='http://localhost:3000/liqForm'
        } catch (e) {
            alert('Error almacenando liquidacion');
            console.error(e)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        uploadLiquidation();
        console.log('enviando formulario...');
    }

    return (
        <>
            <NavbarUI/>
            <div className={'flex flex-col absolute mt-20 left-60 w-100 p-4'}>
                <div className={'flex justify-center'}>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="worker">
                                <Form.Label>Nombre de Trabajador</Form.Label>
                                <Form.Select defaultValue="0" onChange={handleWorkerChange}>
                                    {
                                        workers.map?.length === 0 ? (
                                            <>
                                                <option>No hay trabajadores disponibles</option>
                                            </>
                                        ) : workers.map(w =>
                                            <>
                                                <option value={w._id}>{w.name}</option>
                                            </>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="txtRUTCol">
                                <Form.Label>RUT</Form.Label>
                                <Form.Control type="text" placeholder="RUT" value={rut} disabled/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="txtFecha">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control placeholder="dd/mm/aaaa" name="date" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Previsión Social</Form.Label>
                            <Form.Select onChange={handleWorkerChange} disabled>
                                <option value={afp._id}>{afp.name}</option>
                            </Form.Select>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="txtSalarioBase">
                                <Form.Label>Salario Base</Form.Label>
                                <Form.Control value={salary} defaultValue={salary} onChange={handleWorkerChange} disabled/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="txtGratificacion">
                                <Form.Label>Gratificacion</Form.Label>
                                <Form.Control placeholder="Ingrese monto" value={gratuity} onChange={handleWorkerChange} disabled/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Seguro de Cesantía</Form.Label>
                                <Form.Control value={unemploymentInsurance} onChange={handleWorkerChange} disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Previsión Social</Form.Label>
                                <Form.Control value={socialSecurity} onChange={handleWorkerChange} disabled/>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Total Bruto</Form.Label>
                                <Form.Control value={totalGross} disabled/>
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