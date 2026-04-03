import { cva } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/utils/cn';
import type { VariantProps } from 'class-variance-authority';

const shadow = 'shadow-sm active:enabled:shadow-xs disabled:shadow-xs';

const linkButton = cva('button', {
  defaultVariants: {
    theme: 'secondary',
  },
  variants: {
    theme: {
      destroy: ['bg-destroy', 'text-white', 'hover:bg-destroy-dark', shadow],
      ghost: ['bg-transparent', 'text-primary', 'hover:bg-gray-light'],
      primary: ['bg-primary', 'text-white', 'hover:bg-primary-dark', shadow],
      secondary: ['bg-white', 'text-primary', 'hover:bg-gray-light', shadow],
    },
  },
});

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof linkButton>;

export default function LinkButton({ children, href, theme, className, ...otherProps }: Props) {
  return (
    <Link
      {...otherProps}
      href={href}
      className={cn(
        linkButton({ className, theme }),
        'm-0 w-fit rounded-lg border-none px-3 py-2 font-medium no-underline active:shadow-xs',
      )}
    >
      {children}
    </Link>
  );
}
