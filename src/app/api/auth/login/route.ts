import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const LOGIN_URL = `${process.env.NEXT_PUBLIC_API_URL}auth/login`;

const ACCESS_MAX_AGE = 15 * 60;
const USER_MAX_AGE = 7 * 24 * 60 * 60;

type LoginSuccessBody = {
  status: string;
  message: string;
  data: {
    access_token: string;
    token_type?: string;
    user: Record<string, unknown>;
  };
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ status: 'error', message: 'Invalid JSON body' }, { status: 400 });
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !('email' in body) ||
    !('password' in body) ||
    typeof (body as { email: unknown }).email !== 'string' ||
    typeof (body as { password: unknown }).password !== 'string'
  ) {
    return NextResponse.json(
      { status: 'error', message: 'email and password are required' },
      { status: 400 },
    );
  }

  const { email, password } = body as { email: string; password: string };

  const upstream = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = (await upstream.json()) as LoginSuccessBody | { status: string; message: string };

  if (!upstream.ok) {
    return NextResponse.json(data, { status: upstream.status });
  }

  if (
    data.status !== 'success' ||
    !('data' in data) ||
    typeof data.data !== 'object' ||
    data.data === null ||
    typeof (data.data as { access_token?: unknown }).access_token !== 'string'
  ) {
    return NextResponse.json(data, { status: upstream.status });
  }

  const success = data as LoginSuccessBody;
  const cookieStore = await cookies();

  cookieStore.set('access_token', success.data.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: ACCESS_MAX_AGE,
    path: '/',
  });

  cookieStore.set('user', JSON.stringify(success.data.user), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: USER_MAX_AGE,
    path: '/',
  });

  return NextResponse.json(data);
}
