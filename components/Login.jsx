import {Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {React, useState} from 'react';
import Link from "next/link";

export default function Login() {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    })

    // @ts-ignore
    const handleChange = (e) => setLoginUser({...loginUser, [e.target.name]: e.target.value});

    const login = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/Users/userController?email='
                +loginUser.email+'&password='+loginUser.password);
            const us = await res.json();
            us[0].email === loginUser.email && us[0].password === loginUser.password ? (
                window.location.href = 'http://localhost:3000/Dashboard'
            ): (alert ('Usuario incorrecto.'))

        } catch (e) {
            alert ('ha ocurrido un error inesperado')
            console.error(e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login();
        console.log('enviando formulario...');
    }

    return (
        <>
            <div className='grid grid-cols-2'>
                <img src='/images/recursos_humanos.jpg'
                />
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Inicio de Sesion en ZWS
                            </h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Recuerdame
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="Dashboard" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Iniciar Sesion
                            </Button>
                            <Link href={'/worker_landing'}>
                                <Button
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Consulta tus liquidaciones
                                </Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};