'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function GlobalError({ error, reset }) {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-red-500 dark:text-red-400">
                            Ah ocurrido un error :(
                        </h1>
                        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
                            Ocurrió un error inesperado
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={reset}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                            >
                                Volver a intentar
                            </button>
                            <Link href="/" className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700">
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

