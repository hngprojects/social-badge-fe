import { getUser, clearSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';

async function logout() {
  'use server';
  await clearSession();
  redirect('/login');
}

export default async function Page() {
  const user = await getUser();
  if (!user) redirect('/login');

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-6 text-center">
      <p className="text-lg">Welcome, {user.first_name ?? user.name ?? 'User'}!</p>
      <h1 className="text-2xl font-semibold">Coming Soon</h1>
      <p className="text-muted-foreground max-w-md text-sm">
        We&apos;re working hard to bring you something amazing!
      </p>
      <form action={logout}>
        <button
          type="submit"
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Logout
        </button>
      </form>
    </main>
  );
}
