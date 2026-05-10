import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debounce = <T extends (...args: unknown[]) => void>(func: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const getEmailProviderUrl = (email: string) => {
  const domain = email.split('@')[1];

  switch (domain) {
    case 'gmail.com':
      return 'https://mail.google.com';

    case 'outlook.com':
    case 'hotmail.com':
      return 'https://outlook.live.com/mail';

    case 'yahoo.com':
      return 'https://mail.yahoo.com';

    default:
      return null;
  }
};
