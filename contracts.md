# Contratos API - Confía.pe

## Datos Mock Actuales

### mockVendedores (mock.js)
- **Estructura**: Array de objetos vendedor
- **Campos**: id, nombre, telefono, email, negocio, descripcion, calificacion, totalReseñas, verificado, ubicacion, redesSociales, fechaRegistro, productos, reseñas
- **Total**: 3 vendedores de prueba

### mockCategorias (mock.js)
- **Estructura**: Array de strings
- **Contenido**: Categorías de negocios (Ropa y Moda, Tecnología, etc.)

### mockTestimonios (mock.js)
- **Estructura**: Array de objetos testimonio
- **Campos**: id, nombre, ubicacion, comentario, calificacion, tipo

## APIs Backend a Implementar

### 1. Vendedores
```
GET /api/vendedores/buscar
- Query params: search, categoria
- Respuesta: Array de vendedores filtrados

POST /api/vendedores
- Body: Datos del formulario de registro
- Respuesta: Vendedor creado

GET /api/vendedores/:id
- Respuesta: Detalles completos del vendedor
```

### 2. Categorías
```
GET /api/categorias
- Respuesta: Array de categorías disponibles
```

### 3. Contacto
```
POST /api/contacto
- Body: Datos del formulario de contacto
- Respuesta: Confirmación de envío
```

### 4. Reseñas
```
GET /api/vendedores/:id/reseñas
- Respuesta: Reseñas del vendedor

POST /api/vendedores/:id/reseñas
- Body: Nueva reseña
- Respuesta: Reseña creada
```

## Modelos MongoDB

### Vendedor
```javascript
{
  _id: ObjectId,
  nombre: String (required),
  email: String (required, unique),
  telefono: String (required),
  negocio: String (required),
  categoria: String (required),
  descripcion: String (required),
  ubicacion: String,
  verificado: Boolean (default: false),
  calificacion: Number (calculated),
  totalReseñas: Number (calculated),
  redesSociales: {
    facebook: String,
    instagram: String,
    whatsapp: String
  },
  productos: [String],
  experiencia: String,
  fechaRegistro: Date (default: now),
  createdAt: Date,
  updatedAt: Date
}
```

### Reseña
```javascript
{
  _id: ObjectId,
  vendedorId: ObjectId (ref: Vendedor),
  cliente: String (required),
  comentario: String (required),
  calificacion: Number (1-5, required),
  fecha: Date (default: now),
  verificado: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

### Contacto
```javascript
{
  _id: ObjectId,
  nombre: String (required),
  email: String (required),
  telefono: String,
  tipo: String (required),
  asunto: String (required),
  mensaje: String (required),
  estado: String (default: 'pendiente'),
  fechaContacto: Date (default: now),
  createdAt: Date,
  updatedAt: Date
}
```

## Integración Frontend-Backend

### Pasos para Reemplazar Mock
1. **Buscar Vendedores**: Reemplazar mockVendedores con llamada a `/api/vendedores/buscar`
2. **Crear Perfil**: Conectar formulario con `/api/vendedores` POST
3. **Categorías**: Obtener de `/api/categorias` en lugar de mockCategorias
4. **Contacto**: Enviar formulario a `/api/contacto`

### Variables de Entorno
- `REACT_APP_BACKEND_URL`: Ya configurada correctamente
- Backend utilizará `MONGO_URL` existente

### Validaciones
- Frontend: React Hook Form con validaciones básicas
- Backend: Validación con Pydantic models
- Base de datos: Índices únicos en email de vendedores

### Funcionalidades Adicionales para Backend
- Sistema de verificación de vendedores
- Cálculo automático de calificación promedio
- Upload de imágenes de perfil (futuro)
- Sistema de notificaciones por email
- Dashboard para administradores

## Archivos Frontend a Modificar
- `pages/BuscarVendedores.jsx`: Integrar API de búsqueda
- `pages/CrearPerfil.jsx`: Conectar formulario con backend
- `pages/Contacto.jsx`: Enviar mensajes al backend
- `mock.js`: Eliminar una vez implementado backend