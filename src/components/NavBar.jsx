import { NavLink } from 'react-router-dom'

// NavLink añade la clase "active" al enlace de la página actual
export default function NavBar() {
  return (
    <header className="barra">
      <span className="marca">GestiónPro</span>
      <nav aria-label="Navegación principal">
        <NavLink to="/clientes" end>Ver clientes</NavLink>
        <NavLink to="/clientes/nuevo">Añadir clientes</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
