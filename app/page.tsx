'use client'

import { useState } from 'react'
import Image from "next/image";
import dashImg1 from "../public/dashboard-image1.png";
import dashImg2 from "../public/dashboard-image2.png";
import dashImg3 from "../public/dashboard-image3.png";
import dashImg4 from "../public/dashboard-image4.png";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <main className={`${darkMode ? 'dark' : 'white'}`}>
            <nav className="absolute z-20 min-h-screen min-w-full pointer-events-none">
                <div className="handle" data-permalink="back" data-position="none">
                    <svg className="shape" width="220" height="220" preserveAspectRatio="none" viewBox="0 0 220 220">
                        <path
                            d="M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z"
                            hover-default="M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z"
					        hover-1="M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z"
					        hover-2="M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z"
					        hover-out="M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z"
                            >
                        </path>
                    </svg>
                </div>
                <div className="handle" data-permalink="none" data-position="top">
                    <svg className="shape" width="220" height="220" preserveAspectRatio="none" viewBox="0 0 220 220">
                        <path
                            d="M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z"
                            hover-default="M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z"
                            hover-1="M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z"
                            hover-2="M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z"
                            hover-out="M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z"
                            >
                        </path>
                    </svg>
                </div>
                <div className="handle" data-permalink="none" data-position="right">
                    <svg className="shape" width="220" height="220" preserveAspectRatio="none" viewBox="0 0 220 220">
                        <path
                            d="M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z"
                            hover-default="M30,0 C42,0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,40 110,40 C70,40 54,-0 30,0 Z"
                            hover-1="M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 150,40 110,40 C70,40 33,-0 0,0 Z"
                            hover-2="M0,0 C16.5,-0 99,0 110,0 C121,0 203.5,-0 220,0 C187,-0 165,60 110,60 C55,60 33,-0 0,0 Z"
                            hover-out="M30,0 C42,-0 102,0 110,0 C118,0 178,-0 190,0 C166,-0 150,0 110,0 C70,0 54,-0 30,0 Z"
                            >
                        </path>
                    </svg>
                </div>
                <div className="page-transition z-10"></div>
            </nav>

            <div className="dashboard relative z-10 flex min-h-screen flex-col items-center justify-center gap-20 p-24 bg-white dark:bg-neutral-900 transition duration-300 ease-in-out">
                <div className="relative flex place-items-center text-center">
                    <h1 className="text-3xl z-10 font-semibold leading-tight dark:text-white transition duration-300 ease-in-out">
                        <span className="block">where ideas meet design test</span>
                        <span className="block text-neutral-500 dark:text-neutral-500 transition duration-300 ease-in-out">design turns into innovations</span>
                    </h1>
                </div>
                <div className="mb-32 z-10 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 gap-4 lg:text-center">
                    <div className="card p-6 bg-neutral-100 dark:bg-neutral-800 border border-gray-200 rounded-xl transition duration-300 ease-in-out">
                        <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className="group"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <Image src={dashImg2} alt="Website" className="mb-5" />
                            <span className="block text-1xl font-semibold dark:text-white transition duration-300 ease-in-out">Websites</span>
                        </a>
                    </div>
                    <div className="card p-6 bg-neutral-100 dark:bg-neutral-800 border border-gray-200 rounded-xl transition duration-300 ease-in-out">
                        <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className="group"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <Image src={dashImg1} alt="Website" className="mb-5" />
                            <span className="block text-1xl font-semibold dark:text-white transition duration-300 ease-in-out">Projects</span>
                        </a>
                    </div>

                    <div className="card p-6 bg-neutral-100 dark:bg-neutral-800 border border-gray-200 rounded-xl transition duration-300 ease-in-out">
                        <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className="group"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <Image src={dashImg2} alt="Website" className="mb-5" />
                            <span className="block text-1xl font-semibold dark:text-white transition duration-300 ease-in-out">Designs</span>
                        </a>
                    </div>

                    <div className="card p-6 bg-neutral-100 dark:bg-neutral-800 border border-gray-200 rounded-xl transition duration-300 ease-in-out">
                        <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className="group"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <Image src={dashImg4} alt="Website" className="mb-5" />
                            <span className="block text-1xl font-semibold dark:text-white transition duration-300 ease-in-out">Services</span>
                        </a>
                    </div>

                    <div className="card p-6 bg-neutral-100 dark:bg-neutral-800 border border-gray-200 rounded-xl transition duration-300 ease-in-out">
                        <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className="group"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <Image src={dashImg3} alt="Website" className="mb-5" />
                            <span className="block text-1xl font-semibold dark:text-white transition duration-300 ease-in-out">Devs</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
