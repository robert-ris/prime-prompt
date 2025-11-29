-- Users table (extends Supabase auth.users)
create table public.users (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Subscriptions table
create table public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  status text, -- 'active', 'canceled', 'past_due', etc.
  plan_id text, -- 'price_...'
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Prompts table
create table public.prompts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users not null,
  idea text not null,
  role text,
  tone text,
  platform text,
  result text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Templates table
create table public.templates (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.users not null,
  name text not null,
  description text,
  content text not null, -- JSON or structured text of the prompt configuration
  is_public boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies
alter table public.users enable row level security;
alter table public.subscriptions enable row level security;
alter table public.prompts enable row level security;
alter table public.templates enable row level security;

-- Users policies
create policy "Users can view their own data" on public.users
  for select using (auth.uid() = id);

create policy "Users can update their own data" on public.users
  for update using (auth.uid() = id);

-- Subscriptions policies
create policy "Users can view their own subscription" on public.subscriptions
  for select using (auth.uid() = user_id);

-- Prompts policies
create policy "Users can view their own prompts" on public.prompts
  for select using (auth.uid() = user_id);

create policy "Users can insert their own prompts" on public.prompts
  for insert with check (auth.uid() = user_id);

-- Templates policies
create policy "Users can view their own templates" on public.templates
  for select using (auth.uid() = user_id);

create policy "Users can insert their own templates" on public.templates
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own templates" on public.templates
  for update using (auth.uid() = user_id);

create policy "Users can delete their own templates" on public.templates
  for delete using (auth.uid() = user_id);

-- Trigger to create user profile on signup
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
