import { LoaderIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export function MiniSpinner({ className, ...props }: Readonly<React.ComponentProps<'svg'>>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  );
}
