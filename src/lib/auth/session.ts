import { cookies } from 'next/headers';

export type SessionUser = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  name?: string | null;
  email: string;
  is_email_verified?: boolean;
  profile_photo_url?: string | null;
  created_at?: string;
  updated_at?: string;
};

export async function getUser(): Promise<SessionUser | null> {
  const store = await cookies();
  const raw = store.get('user')?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export async function getToken(): Promise<string | null> {
  const store = await cookies();
  return store.get('access_token')?.value ?? null;
}

export async function clearSession(): Promise<void> {
  const store = await cookies();
  store.delete({ name: 'access_token', path: '/' });
  store.delete({ name: 'user', path: '/' });
}
