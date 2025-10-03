💧 Control de Stock Hídrico (Proyecto Final de Desarrollo Web)
Esta es una aplicación web de página única (SPA) desarrollada con React para la gestión eficiente del inventario de materiales utilizados en la red de agua potable. El proyecto implementa un CRUD completo (Crear, Leer, Actualizar, Eliminar) utilizando Firebase Firestore como base de datos.

Características Principales
CRUD Completo: Permite registrar nuevos materiales, consultar existencias, modificar detalles (precio, nombre) y eliminar ítems.

Gestión de Movimientos: Función dedicada para registrar entradas (ingreso) y salidas (uso) de material, actualizando el stock en tiempo real.

Tecnología: Desarrollado con React JS, Firebase Firestore y React Router DOM.

Diseño Profesional: Interfaz de usuario limpia, intuitiva y con estilos CSS personalizados y uso de íconos de Font Awesome.

Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

/src/pages: Contiene las vistas principales (Home, Inventario, Movimientos, NuevoMaterial, EditarMaterial).

/src/components: Contiene componentes reutilizables (Navbar, Footer).

/src/firebase-config.js: Archivo de conexión y configuración con Firebase.

🚀 Cómo Ejecutar Localmente
Sigue estos pasos para clonar el repositorio y ejecutar la aplicación en tu máquina:

1. Clonar el Repositorio
Abre tu terminal y ejecuta:

Bash

git clone https://github.com/Matiascalazan/control-stock-materiales.git
cd control-stock-materiales
2. Instalar Dependencias
Instala todas las librerías y dependencias necesarias (React Router, Firebase, Font Awesome, etc.):

Bash

npm install
3. Configurar Firebase
Para que la aplicación se conecte a la base de datos, debes crear un archivo de configuración:

Crea un archivo llamado .env.local en la raíz del proyecto (a la misma altura que package.json).

Añade tus credenciales de la consola de Firebase en este archivo. Asegúrate de usar el prefijo REACT_APP_ y de no usar comillas:

REACT_APP_API_KEY=AIzaSyAxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_AUTH_DOMAIN=app-deposito-c241c.firebaseapp.com
REACT_APP_PROJECT_ID=app-deposito-c241c
REACT_APP_STORAGE_BUCKET=app-deposito-c241c.appspot.com
REACT_APP_MESSAGING_SENDER_ID=541685188745
REACT_APP_APP_ID=1:35188745:web:ee61e06790bae813ad9e58
(Reemplaza los valores anteriores con tus credenciales reales.)

4. Iniciar la Aplicación
Una vez configurado Firebase, puedes iniciar la aplicación:

Bash

npm start
El proyecto se abrirá automáticamente en tu navegador en http://localhost:3000.

🌐 URL del Proyecto Desplegado
El proyecto está desplegado en Vercel y accesible en la siguiente URL:

https://control-stock-materiales.vercel.app/