'use client';
import { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { FiLogOut } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle';
import { useAuthContext } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

const AdminNavBar = () => {
    const { logout } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "Quieres cerrar sesión",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión'
        });

        if (result.isConfirmed) {
            await logout();
            Swal.fire(
                '¡Sesión cerrada!',
                'Has cerrado sesión correctamente.',
                'success'
            ).then(() => {
                router.push('/'); 
            });
        }
    };

    return (
        <nav className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 relative">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">

                    <Image
                        src="/sneaker-logo.png"
                        alt="Logo de la app"
                        width={150}
                        height={150}
                        className="transition-transform transform hover:scale-105"
                    />

                </div>
                <div className="hidden md:flex space-x-4">
                    <ThemeToggle />
                    <div className="relative flex items-center">
                        <button onClick={handleLogout} className="p-2 flex items-center">
                            <FiLogOut className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <span>Cerrar sesión</span>
                    </div>
                </div>
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button className="flex items-center p-2" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`fixed inset-y-0 right-0 bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden w-64`} style={{ zIndex: 9999 }}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-4">
                    <button onClick={handleLogout} className="flex items-center space-x-2">
                        <FiLogOut className="h-6 w-6" aria-hidden="true" />
                        <span>Cerrar sesión</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;
