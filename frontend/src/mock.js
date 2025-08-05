// Mock data for Confía.pe

export const mockVendedores = [
  {
    id: 1,
    nombre: "María González",
    telefono: "+51 987654321",
    email: "maria.gonzalez@gmail.com",
    negocio: "Ropa Femenina Premium",
    descripcion: "Especializada en ropa femenina importada de alta calidad. Más de 3 años de experiencia vendiendo online.",
    calificacion: 4.8,
    totalReseñas: 156,
    verificado: true,
    ubicacion: "Lima, Perú",
    redesSociales: {
      facebook: "https://facebook.com/ropafemeninapremium",
      instagram: "@ropafemeninapremium",
      whatsapp: "+51987654321"
    },
    fechaRegistro: "2021-03-15",
    productos: [
      "Vestidos casuales",
      "Ropa deportiva",
      "Accesorios",
      "Zapatos"
    ],
    reseñas: [
      {
        cliente: "Ana R.",
        comentario: "Excelente calidad, llegó en tiempo record. Muy recomendada.",
        calificacion: 5,
        fecha: "2024-01-15"
      },
      {
        cliente: "Carlos M.",
        comentario: "Buena atención y productos de calidad.",
        calificacion: 4,
        fecha: "2024-01-10"
      }
    ]
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    telefono: "+51 987123456",
    email: "carlos.tech@gmail.com",
    negocio: "Tecnología y Gadgets",
    descripcion: "Venta de dispositivos tecnológicos, accesorios y gadgets importados con garantía.",
    calificacion: 4.9,
    totalReseñas: 203,
    verificado: true,
    ubicacion: "Arequipa, Perú",
    redesSociales: {
      facebook: "https://facebook.com/techgadgets.peru",
      instagram: "@techgadgets_peru",
      whatsapp: "+51987123456"
    },
    fechaRegistro: "2020-08-20",
    productos: [
      "Smartphones",
      "Audífonos",
      "Cargadores",
      "Fundas y protectores"
    ],
    reseñas: [
      {
        cliente: "Luis P.",
        comentario: "Productos originales y muy buen precio. Confiable 100%.",
        calificacion: 5,
        fecha: "2024-01-20"
      }
    ]
  },
  {
    id: 3,
    nombre: "Ana Rodríguez",
    telefono: "+51 986555777",
    email: "ana.artesanias@gmail.com",
    negocio: "Artesanías Cusqueñas",
    descripcion: "Artesanías auténticas del Cusco, productos hechos a mano por artesanos locales.",
    calificacion: 4.7,
    totalReseñas: 89,
    verificado: false,
    ubicacion: "Cusco, Perú",
    redesSociales: {
      facebook: "https://facebook.com/artesanias.cusco",
      instagram: "@artesanias_cusco",
      whatsapp: "+51986555777"
    },
    fechaRegistro: "2022-01-10",
    productos: [
      "Textiles andinos",
      "Cerámicas",
      "Joyas artesanales",
      "Instrumentos musicales"
    ],
    reseñas: [
      {
        cliente: "Patricia L.",
        comentario: "Hermosas artesanías, muy auténticas. Recomendado.",
        calificacion: 5,
        fecha: "2024-01-18"
      }
    ]
  }
];

export const mockTestimonios = [
  {
    id: 1,
    nombre: "María González",
    ubicacion: "Lima, Perú",
    comentario: "Antes de conocer Confía.pe, tenía miedo de comprar por redes sociales. Ahora puedo verificar la reputación de los vendedores y compro con total confianza.",
    calificacion: 5,
    tipo: "comprador"
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    ubicacion: "Arequipa, Perú",
    comentario: "Como emprendedor, Confía.pe me ha ayudado a generar más confianza con mis clientes. Mis ventas han aumentado desde que tengo mi perfil verificado.",
    calificacion: 5,
    tipo: "vendedor"
  },
  {
    id: 3,
    nombre: "Ana Rodríguez",
    ubicacion: "Cusco, Perú",
    comentario: "Excelente plataforma. Me salvó de una posible estafa. Pude verificar que el vendedor tenía muy malas referencias antes de transferir el dinero.",
    calificacion: 5,
    tipo: "comprador"
  }
];

export const mockCategorias = [
  "Ropa y Moda",
  "Tecnología",
  "Hogar y Decoración",
  "Artesanías",
  "Belleza y Cuidado Personal",
  "Deportes y Fitness",
  "Comida y Bebidas",
  "Servicios"
];

export const mockEstadisticas = {
  vendedoresRegistrados: 2547,
  reseñasPublicadas: 8934,
  comprasSeguras: 15678,
  ciudadesActivas: 25
};