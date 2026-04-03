import 'server-only';

import { matchSorter } from 'match-sorter';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { prisma } from '@/db';

export const getContact = cache(async (contactId: string) => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // TODO: remove - testing loading state
  const contact = await prisma.contact.findUnique({
    where: {
      id: contactId,
    },
  });
  if (!contact) {
    notFound();
  }
  return contact;
});

export const getContacts = cache(async (q?: string) => {
  const contacts = await prisma.contact.findMany({
    orderBy: [{ first: 'asc' }, { last: 'asc' }],
  });
  if (q) {
    return matchSorter(contacts, q, { keys: ['first', 'last'] });
  }
  return contacts;
});
