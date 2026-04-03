'use client';

import Form from 'next/form';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useTransition } from 'react';
import SearchStatus from './ui/SearchStatus';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const [isPending, startTransition] = useTransition();

  return (
    <Form action="/" role="search">
      <input
        className="w-full pl-8 outline-offset-1"
        onChange={e => {
          startTransition(() => {
            router.push(`?q=${e.target.value}`);
          });
        }}
        defaultValue={q}
        aria-label="Search contacts"
        name="q"
        placeholder="Search"
        type="search"
      />
      <SearchStatus searching={isPending} />
    </Form>
  );
}
