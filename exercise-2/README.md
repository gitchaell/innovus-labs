# 📱 Ejercicio 2 - Capacitor Plugin

## 🚀 Objetivo

Integrar Capacitor en un proyecto Next.js con TypeScript y demostrar el uso de un plugin nativo.

## 🛠️ Instalación y Configuración

1. Ingresa a la carpeta del ejercicio:

   ```bash
   cd exercise-2
   ```

2. Instala las dependencias:
   ```bash
   npm install
   npm install --save @capacitor/core @capacitor/cli
   ```
3. Configura Capacitor:
   ```bash
   npx cap init
   npx cap sync
   ```
4. Inicia el servidor:
   ```bash
   npm run dev
   ```

## 📌 Enfoque y Desafíos

- Implementé el plugin de **Cámara** de Capacitor con un botón para tomar una foto.
- Mostré la imagen capturada usando `Card` y `Typography` de MUI.
- Manejé errores como la falta de permisos o si la cámara no está disponible.
- **Desafío:** Capacitor no funciona directamente en el entorno web sin un fallback. Usé un
  `input file` como alternativa en navegadores.
