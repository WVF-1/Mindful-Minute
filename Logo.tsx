import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-8 w-8', props.className)}
      {...props}
    >
      <path d="M12 2c-3.333 3.333-5 5-5 10s1.667 6.667 5 10c3.333-3.333 5-5 5-10S15.333 5.333 12 2z" />
      <path d="M20 12c-3.333 5 0 10 0 10" />
      <path d="M4 12c3.333 5 0 10 0 10" />
      <path d="M12 2c3.333 5 0 10 0 10" />
      <path d="M12 2c-3.333 5 0 10 0 10" />
    </svg>
  );
}
