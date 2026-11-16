import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient.js'

const VACIO = { nombre: '', email: '', telefono: '', empresa: '' }

export default function AnadirCliente() {
  const [form, setForm] = useState(VACIO)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // Formulario controlado: el estado de React es la única fuente de verdad
  function cambiar(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function enviar(e) {
    e.preventDefault()
    setGuardando(true)
    setError(null)
    const { error } = await supabase.from('clients').insert({
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      telefono: form.telefono.trim() || null,
      empresa: form.empresa.trim() || null,
    })
    setGuardando(false)
    if (error) {
      setError(error.message)
      return
    }
    setForm(VACIO)
    navigate('/clientes') // al guardar, vuelve a la tabla para ver el nuevo cliente
  }

  return (
    <section>
      <h1>Añadir cliente</h1>
      <form className="formulario" onSubmit={enviar}>
        <label>
          Nombre *
          <input name="nombre" value={form.nombre} onChange={cambiar} required minLength={2} maxLength={100} />
        </label>
        <label>
          Email *
          <input name="email" type="email" value={form.email} onChange={cambiar} required />
        </label>
        <label>
          Teléfono
          <input name="telefono" type="tel" value={form.telefono} onChange={cambiar} maxLength={20} />
        </label>
        <label>
          Empresa
          <input name="empresa" value={form.empresa} onChange={cambiar} maxLength={100} />
        </label>
        {error && <p className="error" role="alert">No se pudo guardar: {error}</p>}
        <button type="submit" disabled={guardando}>{guardando ? 'Guardando…' : 'Guardar cliente'}</button>
      </form>
    </section>
  )
}
