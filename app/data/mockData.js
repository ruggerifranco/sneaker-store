
const mockData = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 150,
      category: "Deportivas",
      description: "Zapatillas deportivas con tecnología Air Max para mayor comodidad y estilo.",
      brand: "Nike",
      image: "/nike-air-max-270.png"
    },
    {
      id: 2,
      name: "Adidas Ultraboost 21",
      price: 180,
      category: "Running",
      description: "Zapatillas de running con amortiguación Boost para un rendimiento superior.",
      brand: "Adidas",
      image: "/adidas-ultraboost-21.png"
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 130,
      category: "Urbanas",
      description: "Zapatillas urbanas con un diseño llamativo y comodidad duradera.",
      brand: "Puma",
      image: "/puma-rs-x.png"
    },
    {
      id: 4,
      name: "New Balance 990v5",
      price: 170,
      category: "Entrenamiento",
      description: "Zapatillas de entrenamiento con soporte y amortiguación de alta calidad.",
      brand: "New Balance",
      image: "/new-balance-990v5.png"
    },
    {
      id: 5,
      name: "Converse Chuck Taylor All Star",
      price: 65,
      category: "Casuales",
      description: "Zapatillas casuales clásicas con una suela de goma duradera y un estilo atemporal.",
      brand: "Converse",
      image: "/converse-chuck-taylos-all-star.png"
    },
    {
      id: 6,
      name: "Nike Free Run 5.0",
      price: 140,
      category: "Running",
      description: "Zapatillas de running con una construcción ligera y flexible para una experiencia de carrera cómoda.",
      brand: "Nike",
      image: "/nike-free-run-5.0.png"
    },
    {
      id: 7,
      name: "Adidas NMD R1",
      price: 160,
      category: "Urbanas",
      description: "Zapatillas urbanas con diseño innovador y amortiguación Boost para un confort todo el día.",
      brand: "Adidas",
      image: "/adidas-ndm-r1.png"
    },
    {
      id: 8,
      name: "Puma Future Rider",
      price: 120,
      category: "Casuales",
      description: "Zapatillas casuales con un estilo retro y una combinación de colores vibrantes.",
      brand: "Puma",
      image: "/puma-future-rider.png"
    },
    // {
    //   id: 9,
    //   name: "New Balance 574",
    //   price: 110,
    //   category: "Casuales",
    //   description: "Zapatillas casuales con una combinación de material de gamuza y malla para un look clásico y cómodo.",
    //   brand: "New Balance",
    //   image: "https://images.unsplash.com/photo-1589301776094-02d5e19a05b8?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 10,
    //   name: "Converse All Star Pro",
    //   price: 75,
    //   category: "Urbanas",
    //   description: "Zapatillas urbanas con un diseño clásico y una construcción resistente para un uso diario.",
    //   brand: "Converse",
    //   image: "https://images.unsplash.com/photo-1598301750180-cc91b2be0932?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 11,
    //   name: "Nike Air Zoom Pegasus 38",
    //   price: 160,
    //   category: "Running",
    //   description: "Zapatillas de running con un ajuste dinámico y una amortiguación responsiva para una carrera cómoda.",
    //   brand: "Nike",
    //   image: "https://images.unsplash.com/photo-1600587698037-d04b58c5f741?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 12,
    //   name: "Adidas Solarboost 19",
    //   price: 170,
    //   category: "Running",
    //   description: "Zapatillas de running con tecnología Boost para una comodidad y energía óptimas durante tus carreras.",
    //   brand: "Adidas",
    //   image: "https://images.unsplash.com/photo-1587766512957-e0350581f464?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 13,
    //   name: "Puma Clyde",
    //   price: 125,
    //   category: "Urbanas",
    //   description: "Zapatillas urbanas con un diseño clásico y un ajuste cómodo para el uso diario.",
    //   brand: "Puma",
    //   image: "https://images.unsplash.com/photo-1565269684-6c2f927d238d?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 14,
    //   name: "New Balance Fresh Foam 1080v11",
    //   price: 190,
    //   category: "Running",
    //   description: "Zapatillas de running con tecnología Fresh Foam para una amortiguación suave y cómoda.",
    //   brand: "New Balance",
    //   image: "https://images.unsplash.com/photo-1582274579492-073e6788b9f5?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 15,
    //   name: "Converse Chuck 70",
    //   price: 85,
    //   category: "Casuales",
    //   description: "Zapatillas casuales con una estética retro y un diseño duradero para el uso diario.",
    //   brand: "Converse",
    //   image: "https://images.unsplash.com/photo-1600567839797-54ad8d1e30a4?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 16,
    //   name: "Nike React Infinity Run",
    //   price: 170,
    //   category: "Running",
    //   description: "Zapatillas de running con tecnología React para una amortiguación suave y una pisada estable.",
    //   brand: "Nike",
    //   image: "https://images.unsplash.com/photo-1607586102718-ff33011b0851?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 17,
    //   name: "Adidas Supernova+",
    //   price: 150,
    //   category: "Running",
    //   description: "Zapatillas de running con soporte y amortiguación mejorada para un confort prolongado.",
    //   brand: "Adidas",
    //   image: "https://images.unsplash.com/photo-1616460211468-5d65e8b233d5?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 18,
    //   name: "Puma X-Ray",
    //   price: 135,
    //   category: "Urbanas",
    //   description: "Zapatillas urbanas con un diseño moderno y una estructura robusta para una comodidad diaria.",
    //   brand: "Puma",
    //   image: "https://images.unsplash.com/photo-1582719982538-daa4ec063373?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 19,
    //   name: "New Balance 1080v10",
    //   price: 180,
    //   category: "Running",
    //   description: "Zapatillas de running con amortiguación Fresh Foam y un diseño cómodo para largas distancias.",
    //   brand: "New Balance",
    //   image: "https://images.unsplash.com/photo-1607328989704-50987d5d2837?fit=crop&w=500&h=500"
    // },
    // {
    //   id: 20,
    //   name: "Converse One Star",
    //   price: 80,
    //   category: "Casuales",
    //   description: "Zapatillas casuales con un diseño simple y elegante, ideal para el uso diario.",
    //   brand: "Converse",
    //   image: "https://images.unsplash.com/photo-1566970487-79dc6828b786?fit=crop&w=500&h=500"
    // }
  ];
  
  export default mockData;
  