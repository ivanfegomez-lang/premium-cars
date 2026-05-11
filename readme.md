# Premium Cars

Aplicación Full Stack de renta de vehículos premium desarrollada con Angular, Node.js, Express y MongoDB.

El sistema permite autenticación de usuarios, gestión de vehículos, reservas con validación de fechas y un panel administrativo completo.

---

# Características

## Usuarios
- Registro de usuarios
- Inicio de sesión con JWT
- Autenticación segura
- Gestión de reservas personales

## Vehículos
- Catálogo dinámico de vehículos
- Visualización de imágenes y descripciones
- Diseño responsive
- Cálculo automático de precio total

## Reservas
- Selección de fechas
- Validación de disponibilidad
- Restricción de fechas inválidas
- Estados de reserva:
  - Pendiente
  - Confirmada
  - Cancelada

## Panel Administrador
- Crear vehículos
- Editar vehículos
- Eliminar vehículos
- Gestión completa de reservas
- Cambio de estado de reservas
- Visualización de información del cliente

---

# Tecnologías Utilizadas

## Frontend
- Angular
- TypeScript
- HTML5
- CSS3

## Backend
- Node.js
- Express

## Base de Datos
- MongoDB
- Mongoose

## Autenticación
- JWT
- bcryptjs

---

# Estructura del Proyecto

```bash
frontend/
backend/
```

# Instalación y Ejecución

## 1. Clonar repositorio

```bash
git clone https://github.com/ivanfegomez-lang/premium-cars.git
```

## 2. Backend

```bash
cd backend
npm install
npm start
```

Servidor:

```bash
http://localhost:3000
```

## 3. Frontend

```bash
cd frontend
npm install
ng serve
```

Aplicación:

```bash
http://localhost:4200
```

# Variables de Entorno

Crear archivo `.env` dentro de `backend/`

```env
MONGO_URI=tu_uri_mongodb
JWT_SECRET=tu_clave
```

# Responsive Design

La aplicación cuenta con diseño responsive para:
- Desktop
- Tablet
- Mobile

# Funcionalidades Destacadas

- CRUD completo de vehículos
- Login y registro
- Roles administrador/usuario
- JWT Authentication
- Reservas con validación de fechas
- Estados de reservas
- Dashboard administrativo
- Responsive Design
- Landing Page Premium

# Autor

Ivan Felipe Gomez Montaña