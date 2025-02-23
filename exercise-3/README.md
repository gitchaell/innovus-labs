# ⚛️ Ejercicio 3 - React Hooks & State Management

## 🚀 Objetivo

Crear un sistema de estado compartido usando **React Context y Hooks** para rastrear eventos de
usuario (clicks y hovers).

## 🛠️ Instalación y Ejecución

1. Ingresa a la carpeta del ejercicio:

   ```bash
   cd exercise-3
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

- Implementé un **Contexto global** (`AnalyticsContext`) con `useReducer` para rastrear **clicks y
  hovers**.
- Implementé **tres secciones**:
  1. Lista interactiva que registra eventos `hover`.
  2. Botón que registra eventos `click`.
  3. **Panel de análisis** que muestra los datos en tiempo real.
- **Desafío:** Asegurar que los eventos actualicen el estado sin problemas y que el contexto se
  propague correctamente a todos los componentes.
