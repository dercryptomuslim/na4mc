-- Enable UUID extension if not enabled
create extension if not exists "uuid-ossp";

-- Leads Table
create table if not exists leads (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text,
  name text,
  company text
);

-- Applications Table
create table if not exists applications (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  lead_id uuid references leads(id),
  answers jsonb not null,
  assigned_package text not null, -- FUNDAMENT, WACHSTUM, DOMINANZ, REJECTED
  status text default 'new' -- new, contacted, closed
);

-- Enable RLS (Row Level Security) - optional, for security
alter table leads enable row level security;
alter table applications enable row level security;

-- Policies (Allow insert for public/anon users for the funnel)
create policy "Allow public insert leads" on leads for insert with check (true);
create policy "Allow public insert applications" on applications for insert with check (true);
