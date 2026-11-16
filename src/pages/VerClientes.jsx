import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient.js'

export default function VerClientes() {
  const [clientes, setClientes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // useEffect con [] se ejecuta una sola vez, al mostrar la página
  useEffect(() => {
    async function cargar() {
      const { data, error } = await supabase
        .from('clients')
        .select('id, nombre, email, telefono, empresa, created_at')
        .order('created_at', { ascending: false })
      if (error) setError(error.message)
      else setClientes(data)
      setCargando(false)
    }
    cargar()
  }, [])

  return (
    <section>
      <h1>Clientes</h1>
      {cargando && <p>Cargando clientes…</p>}
      {error && <p className="error" role="alert">No se pudieron cargar los clientes: {error}</p>}
      {!cargando && !error && clientes.length === 0 && (
        <p>Todavía no hay clientes. <Link to="/clientes/nuevo">Añade el primero</Link>.</p>
      )}
      {clientes.length > 0 && (
        <div className="tabla-scroll">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Empresa</th>
                <th>Alta</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c) => (
                <tr key={c.id}>
                  <td>{c.nombre}</td>
                  <td>{c.email}</td>
                  <td>{c.telefono ?? '—'}</td>
                  <td>{c.empresa ?? '—'}</td>
                  <td>{new Date(c.created_at).toLocaleDateString('es-ES')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="nota">{clientes.length} cliente(s)</p>
        </div>
      )}
    </section>
  )
}
