import React from 'react';
import {Container} from "react-bootstrap";
import {Button} from "flowbite-react";
import Link from "next/link";

const WorkerLanding = () => {
    return (
        <>
            <Container>
                <div className={'flex justify-center w-12/12 mt-60'}>
                <form className="mt-8 space-y-6" action="src/pages#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm mb-5 w-100">
                        <div>
                            <label htmlFor="rut_worker" className="sr-only">
                                Password
                            </label>
                            <input
                                id="rut_worker"
                                name="rut_worker"
                                type="rut_worker"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="RUT"
                            />
                        </div>
                    </div>
                    <div>
                        <Link href={'/worker_landing'}>
                            <Button
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Consultar historial
                            </Button>
                        </Link>
                    </div>
                </form>
                </div>
            </Container>
        </>
    );
};

export default WorkerLanding;