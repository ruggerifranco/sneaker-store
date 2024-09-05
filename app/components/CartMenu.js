'use client';
import Link from 'next/link';
import { useCartContext } from '../context/CartContext';
import Image from 'next/image'; 
import { useRouter } from 'next/navigation';

const CartMenu = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, getTotal, getTotalQuantityId } = useCartContext();
  const router = useRouter()

  const handleCheckout = () => {
    router.push('/checkout');
  }

  return (
    <div className={`fixed inset-y-0 right-0 bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-80`} style={{ zIndex: 9999 }}>
      <div className="flex justify-between p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Carrito</h2>
        <button onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col space-y-4 p-4">
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex items-center space-x-4 border-b border-gray-700 pb-2 mb-2">
                {item.image && (
                  <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={64} 
                  height={64} 
                  className='w-16 h-16 object-cover rounded'
              />
                )}
                <div className="flex-1 flex justify-between items-center space-x-2">
                  <div className="flex-1">
                    <span className="block text-sm">{item.name} (x{getTotalQuantityId(item.id)})</span>
                    <span className="block text-xs text-gray-400">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span>Total:</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <Link href="/cart">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                  Ver Carrito
                </button>
              </Link>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
                onClick={handleCheckout}
              >
                Proceder con el Pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartMenu;

