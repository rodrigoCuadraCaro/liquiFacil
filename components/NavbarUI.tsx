import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import Link from "next/link";

const NavbarUi = () => {
    return (
        <>
            <nav className="bg-white border-b border-gray-200 fixed z-30 w-full border-solid border-black">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <Button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar"
                                    className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                                <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </Button>
                            <Link href="/Dashboard" className="text-xl font-bold flex items-center lg:ml-2.5">
                                <img src="/images/profile.webp" className="h-6 mr-2"
                                     alt="ZWS Logo"/>
                                    <span className="self-center whitespace-nowrap">Retornar a Inicio</span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <Button id="toggleSidebarMobileSearch" type="button"
                                    className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                                <span className="sr-only">Search</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </Button>
                            <a href="Home"
                               className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                                Cerrar Sesión
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarUi;
