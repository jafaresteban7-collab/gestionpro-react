import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import VerClientes from './pages/VerClientes.jsx'
import AnadirCliente from './pages/AnadirCliente.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/clientes" replace />} />
          <Route path="/clientes" element={<VerClientes />} />
          <Route path="/clientes/nuevo" element={<AnadirCliente />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>Página no encontrada.</p>} />
        </Routes>
      </main>
      <footer className="pie">GestiónPro React · Álvaro Esteban · DAM 2 · Desarrollo de Interfaces</footer>
    </>
  )
}
