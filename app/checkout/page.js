'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCartContext } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, clearCart } = useCartContext();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const router = useRouter();

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const onSubmit = async (data) => {
        clearCart();  

        await Swal.fire({
            title: '¡Compra Confirmada!',
            text: 'Tu pedido ha sido realizado con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        router.push('/confirmation');
    };

    const paymentMethod = watch('paymentMethod');

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={() => router.back()}
                        className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 transition duration-300"
                    >
                        Volver
                    </button>
                    <h1 className="text-2xl font-bold">Checkout</h1>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Detalles del Pedido</h2>
                    {cart.length === 0 ? (
                        <p className="text-lg">Tu carrito está vacío.</p>
                    ) : (
                        <div>
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
                                    <div className="flex items-center">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Cantidad: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-6 flex justify-between items-center">
                                <p className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</p>
                            </div>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Información de Pago</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">Nombre Completo</label>
                        <input
                            id="name"
                            {...register('name', { required: 'Este campo es obligatorio' })}
                            className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                            type="text"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">Correo Electrónico</label>
                        <input
                            id="email"
                            {...register('email', { required: 'Este campo es obligatorio' })}
                            className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                            type="email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium">Dirección de Envío</label>
                        <input
                            id="address"
                            {...register('address', { required: 'Este campo es obligatorio' })}
                            className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                            type="text"
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="paymentMethod" className="block text-sm font-medium">Método de Pago</label>
                        <select
                            id="paymentMethod"
                            {...register('paymentMethod', { required: 'Selecciona un método de pago' })}
                            className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        >
                            <option value="">Selecciona un método</option>
                            <option value="cash">Efectivo</option>
                            <option value="mercadoPago">Mercado Pago</option>
                            <option value="creditCard">Tarjeta de Crédito</option>
                        </select>
                        {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
                    </div>

                    {paymentMethod === 'creditCard' && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-sm font-medium">Número de Tarjeta</label>
                                <input
                                    id="cardNumber"
                                    {...register('cardNumber', { required: 'Este campo es obligatorio' })}
                                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                    type="text"
                                />
                                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="expiryDate" className="block text-sm font-medium">Fecha de Expiración</label>
                                <input
                                    id="expiryDate"
                                    {...register('expiryDate', { required: 'Este campo es obligatorio' })}
                                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                    type="text"
                                    placeholder="MM/AA"
                                />
                                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cvv" className="block text-sm font-medium">CVV</label>
                                <input
                                    id="cvv"
                                    {...register('cvv', { required: 'Este campo es obligatorio' })}
                                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                    type="text"
                                />
                                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-300"
                    >
                        Completar Compra
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
