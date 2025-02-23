# 📝 Ejercicio 1 - Next.js + React + MUI

## 🚀 Objetivo

Demostrar el uso de **Next.js**, React con TypeScript, **fetching de datos**, y **Material UI** para
crear una lista de datos con estilos personalizados.

## 🛠️ Instalación y Ejecución

1. Ingresa a la carpeta del ejercicio:

   ```bash
   cd exercise-1
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm run dev
   ```

## 📌 Enfoque y Desafíos

- Intenté usar `getServerSideProps` para obtener los datos de la API de JSONPlaceholder.
- Tipé correctamente la respuesta con TypeScript usando la herramienta **QuickType**.
- Implementé un **tema personalizado de MUI** para modificar los estilos del `ListItem`.
- Agregué una interacción opcional con `useState` para resaltar un elemento seleccionado.
- **Desafío:** Inicialmente intenté usar `getServerSideProps` en el directorio `app/`, pero Next.js
  solo lo permite en `pages/`. Lo solucioné usando el fetch de users directamente desde
  `app/page.tsx`.
