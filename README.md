# Strudel Trance - Live Coding Environment

Un entorno de live coding musical usando Strudel para crear y reproducir patrones musicales en tiempo real.

## � Uso Online

¡Puedes usar esta aplicación directamente en tu navegador sin instalar nada!

**Opción 1: GitHub Pages (Recomendado)**
1. Ve a GitHub Pages deployment (disponible después de activar GitHub Pages en Settings)
2. Abre [index.html](index.html) directamente en tu navegador
3. ¡Empieza a crear música!

**Opción 2: Archivo Local**
1. Descarga [index.html](index.html)
2. Abre el archivo en tu navegador (Chrome, Firefox, Edge, Safari)
3. No necesitas instalar Node.js ni ningún servidor

## 🎵 Descripción

Este proyecto proporciona una interfaz web interactiva para crear música usando Strudel, un sistema de live coding inspirado en TidalCycles. Puedes escribir código para generar patrones musicales y escucharlos en tiempo real.

## 🚀 Instalación Local (Opcional)

Si quieres ejecutar un servidor local con los archivos de ejemplo:

```bash
# Instalar dependencias
npm install

# Iniciar el servidor
npm start
```

## 💻 Cómo Usar

1. Abre tu navegador en `http://localhost:3000`
2. Escribe tu código en el editor
3. Presiona el botón "▶️ Play" para escuchar tu música
4. Edita el código en vivo para cambiar los patrones
5. Explora los ejemplos en el panel derecho

## 📚 Ejemplos de Código

### Pattern básico
```javascript
note("c4 e4 g4 e4")
  .s("triangle")
  .lpf(1000)
```

### Ritmo de batería
```javascript
stack(
  s("bd ~ bd ~"),
  s("~ sd ~ sd"),
  s("hh hh hh hh").gain(0.3)
)
```

### Línea de bajo
```javascript
note("c2 ~ c2 g2 ~ ab2 ~ f2")
  .s("sawtooth")
  .lpf(200)
  .gain(0.6)
```

### Progresión de acordes
```javascript
note("<[c3,e3,g3] [f3,a3,c4] [g3,b3,d4] [d3,fs3,a3]>")
  .s("triangle")
  .gain(0.4)
  .lpf(1500)
```

### Lead de trance
```javascript
note("c5 e5 g5 b5 c6 b5 g5 e5")
  .s("sawtooth")
  .lpf(sine.range(500, 2000).slow(4))
  .gain(0.5)
  .room(0.3)
```

## 🎹 Funciones Principales de Strudel

- **note()** - Define notas musicales
- **s()** - Selecciona sonidos/instrumentos
- **gain()** - Controla el volumen
- **lpf()** - Filtro paso bajo
- **hpf()** - Filtro paso alto
- **room()** - Añade reverberación
- **delay()** - Añade delay
- **stack()** - Combina múltiples patrones
- **fast()** - Acelera el patrón
- **slow()** - Ralentiza el patrón

## 🛠️ Tecnologías

- **Strudel** - Sistema de live coding
- **Web Audio API** - Síntesis de audio en el navegador
- **Node.js** - Servidor local
- HTML/CSS/JavaScript - Interfaz de usuario

## 📝 Notas

- El servidor debe estar corriendo para usar la aplicación
- Usa auriculares o altavoces para escuchar el audio
- Experimenta con diferentes patrones y combinaciones
- Los cambios en el código se pueden aplicar en vivo mientras suena la música

## 🎶 ¡Diviértete creando música con código!
