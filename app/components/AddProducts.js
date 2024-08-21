// 'use client';

// import { useState } from 'react';
// import { collection, doc, writeBatch } from 'firebase/firestore';
// import { db } from '@/firebase/config';

// const AddProducts = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const addProducts = async () => {
//     setLoading(true);
//     setError(null);

//     const products = [
//       {
//         id: '3',
//         name: "Puma RS-X",
//         price: 130,
//         category: "Urbanas",
//         description: "Zapatillas urbanas con un diseño llamativo y comodidad duradera.",
//         brand: "Puma",
//         image: "/puma-rs-x.png"
//       },
//       {
//         id: '4',
//         name: "New Balance 990v5",
//         price: 170,
//         category: "Entrenamiento",
//         description: "Zapatillas de entrenamiento con soporte y amortiguación de alta calidad.",
//         brand: "New Balance",
//         image: "/new-balance-990v5.png"
//       },
//       {
//         id: '5',
//         name: "Converse Chuck Taylor All Star",
//         price: 65,
//         category: "Casuales",
//         description: "Zapatillas casuales clásicas con una suela de goma duradera y un estilo atemporal.",
//         brand: "Converse",
//         image: "/converse-chuck-taylos-all-star.png"
//       },
//       {
//         id: '6',
//         name: "Nike Free Run 5.0",
//         price: 140,
//         category: "Running",
//         description: "Zapatillas de running con una construcción ligera y flexible para una experiencia de carrera cómoda.",
//         brand: "Nike",
//         image: "/nike-free-run-5.0.png"
//       },
//       {
//         id: '7',
//         name: "Adidas NMD R1",
//         price: 160,
//         category: "Urbanas",
//         description: "Zapatillas urbanas con diseño innovador y amortiguación Boost para un confort todo el día.",
//         brand: "Adidas",
//         image: "/adidas-ndm-r1.png"
//       },
//       {
//         id: '8',
//         name: "Puma Future Rider",
//         price: 120,
//         category: "Casuales",
//         description: "Zapatillas casuales con un estilo retro y una combinación de colores vibrantes.",
//         brand: "Puma",
//         image: "/puma-future-rider.png"
//       },
//     ];

//     const batch = writeBatch(db);
//     const productCollectionRef = collection(db, 'products');

//     products.forEach(product => {
//       const docRef = doc(productCollectionRef, product.id); // Usa IDs únicos
//       batch.set(docRef, product); // Añade la operación al lote
//     });

//     try {
//       await batch.commit();
//       console.log('Todos los productos han sido agregados exitosamente.');
//     } catch (error) {
//       console.error('Error agregando productos en lote:', error);
//       setError('Error al agregar productos.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button 
//         onClick={addProducts} 
//         disabled={loading} 
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
//       >
//         {loading ? 'Agregando productos...' : 'Agregar Productos'}
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default AddProducts;
