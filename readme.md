Sistema de Gestión de Empleados y Departamentos
Descripción del proyecto

Este proyecto consiste en el desarrollo de una aplicación full stack para la gestión de empleados y departamentos. El sistema permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre ambas entidades, así como visualizar la relación entre empleados y sus respectivos departamentos.

El backend fue desarrollado utilizando Node.js con Express, implementando una API REST que gestiona la lógica del negocio y la conexión a la base de datos MongoDB. Por su parte, el frontend fue construido con Angular, permitiendo una interacción dinámica con los datos mediante formularios y vistas actualizadas en tiempo real.

Además, se implementa la visualización de empleados agrupados por departamento, lo cual simula una relación tipo JOIN en bases de datos relacionales.

Instrucciones de instalación y ejecución
Requisitos previos
Node.js instalado
npm instalado
Cuenta en MongoDB Atlas (o instancia local de MongoDB)
Angular CLI instalado
1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd PT2
2. Configuración del backend
cd backend-empleados
npm install

Crear un archivo .env en la raíz del backend con la siguiente variable:

MONGO_URI=tu_string_de_conexion
PORT=3000

Ejecutar el servidor:

node index.js

El backend estará disponible en:

http://localhost:3000
3. Configuración del frontend
cd frontend-empleados
npm install
ng serve

La aplicación estará disponible en:

http://localhost:4200

Decisiones técnicas
Se utilizó Node.js con Express para el backend debido a su simplicidad y eficiencia en la creación de APIs REST.
MongoDB fue seleccionado como base de datos por su flexibilidad al trabajar con documentos JSON, facilitando la integración con JavaScript.
Angular fue elegido para el frontend por su estructura robusta y capacidad para construir aplicaciones escalables.
La comunicación entre frontend y backend se realiza mediante HTTP utilizando el cliente HttpClient de Angular.
La relación entre empleados y departamentos se implementó a nivel de lógica en el backend, agrupando los empleados según su código de departamento.
Se utilizó arquitectura basada en servicios en Angular para separar la lógica de acceso a datos de los componentes visuales.