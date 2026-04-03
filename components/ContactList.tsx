'use client';

import { matchSorter } from 'match-sorter';
import { useSearchParams } from 'next/navigation';
import React, { use } from 'react';
import ContactButton from './ContactButton';
import type { Contact } from '@prisma/client';

type Props = {
  contactsPromise: Promise<Contact[]>;
};

export default function ContactList({ contactsPromise }: Props) {
  const contacts = use(contactsPromise);
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  const filteredContacts = q
    ? matchSorter(contacts, q, {
        keys: ['first', 'last'],
      })
    : contacts;

  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {filteredContacts.length ? (
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id} className="mx-1">
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
