# API de Tareas con NestJS Primera Evaluacion

Hola profesor este proyecto implementa una API REST sencilla para gestionar tareas, desarrollada con **NestJS** y **TypeScript**.  
Permite crear, listar, obtener, actualizar y eliminar tareas mediante solicitudes HTTP.

## Características
- Crear tareas con título y descripción.
- Consultar todas las tareas o una en específico por ID.
- Modificar tareas existentes.
- Eliminar tareas.
- Validación de datos en las solicitudes.

## Requisitos previos
Antes de ejecutar el proyecto, asegúrate de tener instalado:
- **Node.js** (v16 o superior recomendado)
- **npm** o **yarn**
- **Nest CLI** (`npm install -g @nestjs/cli`)

## Instalación
1. Clonar el repositorio o descomprimir el proyecto en tu equipo.
2. Abrir una terminal en la carpeta raíz del proyecto.
3. Instalar las dependencias:
   ```bash
   npm install
   ```

## Ejecución del proyecto
Para iniciar el servidor en modo desarrollo:
```bash
npm run start:dev
```
La API estará disponible en:
```
http://localhost:3000
```

## Rutas principales
### Obtener todas las tareas
```
GET /tasks
```

### Obtener una tarea por ID
```
GET /tasks/:id
```

### Crear una nueva tarea
```
POST /tasks
```
Ejemplo de cuerpo (JSON):
```json
{
  "title": "Mi primera tarea",
  "description": "Esto es una prueba"
}
```

### Actualizar una tarea
```
PUT /tasks/:id
```

### Eliminar una tarea
```
DELETE /tasks/:id
```

## Pruebas con la terminal (PowerShell)
Ejemplo para crear una tarea:
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/tasks" `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{"title":"Mi primera tarea","description":"Esto es una prueba"}'
