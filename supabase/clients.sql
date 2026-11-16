-- Tabla de clientes para GestiónPro React
-- Ejecutar en Supabase > SQL Editor. Solo crea la tabla clients; no modifica otras tablas del proyecto.

create table if not exists public.clients (
  id          bigint generated always as identity primary key,
  nombre      text not null check (char_length(nombre) between 2 and 100),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  telefono    text check (telefono is null or char_length(telefono) <= 20),
  empresa     text check (empresa is null or char_length(empresa) <= 100),
  created_at  timestamptz not null default now()
);

-- Seguridad a nivel de fila: sin políticas nadie puede leer ni escribir
alter table public.clients enable row level security;

-- Cualquiera con la clave pública puede LEER los clientes
drop policy if exists "clients_select_publico" on public.clients;
create policy "clients_select_publico"
  on public.clients for select
  to anon, authenticated
  using (true);

-- Cualquiera con la clave pública puede AÑADIR clientes
-- (no hay políticas de UPDATE ni DELETE, así que nadie puede modificar ni borrar)
drop policy if exists "clients_insert_publico" on public.clients;
create policy "clients_insert_publico"
  on public.clients for insert
  to anon, authenticated
  with check (true);

-- Datos de ejemplo
insert into public.clients (nombre, email, telefono, empresa) values
  ('Laura Martín',   'laura.martin@ejemplo.test',  '600111222', 'Distribuciones Norte'),
  ('Carlos Ruiz',    'carlos.ruiz@ejemplo.test',   '600333444', 'Talleres Ruiz'),
  ('Marta Gómez',    'marta.gomez@ejemplo.test',   null,        'Gómez Consultores');
