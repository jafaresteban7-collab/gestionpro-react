export default function About() {
  return (
    <section className="about">
      <h1>Sobre el proyecto</h1>
      <p>
        <strong>GestiónPro React</strong> es la versión en React de GestiónPro, la aplicación de gestión
        empresarial desarrollada en Angular durante el curso. Esta versión gestiona la cartera de clientes:
        permite consultarlos en una tabla y dar de alta clientes nuevos.
      </p>
      <ul>
        <li><strong>Interfaz:</strong> React + Vite, con React Router para la navegación entre páginas.</li>
        <li><strong>Datos:</strong> Supabase (PostgreSQL + API REST) con seguridad a nivel de fila (RLS).</li>
        <li><strong>Despliegue:</strong> Vercel, con la configuración de Supabase en variables de entorno.</li>
      </ul>
      <img src="/gestionpro.webp" alt="Esquema de GestiónPro React: React, Supabase y Vercel" width="800" height="400" />
      <h2>Vídeo: Supabase en 100 segundos</h2>
      <div className="video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/zBZgdTb-dns"
          title="Supabase en 100 segundos (YouTube)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="nota">Autor: Álvaro Esteban · DAM 2 · Desarrollo de Interfaces</p>
    </section>
  )
}
