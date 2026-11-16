# GestiónPro React

Versión en React de GestiónPro para gestionar clientes, con datos en Supabase y despliegue en Vercel.
Álvaro Esteban · DAM 2 · Desarrollo de Interfaces.

## Páginas

| Ruta              | Página          | Qué hace                                                  |
|-------------------|-----------------|-----------------------------------------------------------|
| `/clientes`       | Ver clientes    | Tabla con los registros de la tabla `clients` de Supabase |
| `/clientes/nuevo` | Añadir clientes | Formulario que inserta un cliente en `clients`            |
| `/about`          | About           | Descripción, imagen `.webp` y vídeo de YouTube incrustado |

## Puesta en marcha

1. Ejecuta `supabase/clients.sql` en Supabase > SQL Editor (crea la tabla `clients` con RLS).
2. Copia `.env.example` como `.env` y rellena la URL y la clave publishable de Supabase.
3. Instala las dependencias y arranca la app:

```bash
npm install
npm run dev
```

Al abrir la app, la consola del navegador muestra **"conexión correcta"** y los datos de la conexión.

## Despliegue en Vercel

En Vercel, añade las variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en Settings > Environment Variables.
`vercel.json` redirige todas las rutas a `index.html` para que funcione React Router al recargar.
