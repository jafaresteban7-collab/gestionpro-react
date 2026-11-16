import { createClient } from '@supabase/supabase-js'

// Las variables VITE_* se leen del archivo .env (en local) o de Vercel (en producción).
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en el archivo .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Reto 1: comprueba la conexión haciendo una consulta ligera a la tabla clients
 * y muestra el resultado en la consola del navegador.
 */
export async function comprobarConexion() {
  const inicio = performance.now()
  const { count, error, status } = await supabase
    .from('clients')
    .select('*', { count: 'exact', head: true })
  const ms = Math.round(performance.now() - inicio)

  if (error) {
    console.error('Error de conexión con Supabase:', error.message, error)
    return false
  }

  console.log('%cconexión correcta', 'color: #0b4fc4; font-weight: bold; font-size: 14px')
  console.log('Datos de la conexión:', {
    url: supabaseUrl,
    clave: supabaseKey.slice(0, 20) + '…',
    tabla: 'clients',
    registros: count,
    estadoHTTP: status,
    tiempoRespuesta: ms + ' ms',
  })
  return true
}
