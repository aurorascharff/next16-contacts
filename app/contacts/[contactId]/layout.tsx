import React, { Suspense } from 'react';
import MessageBox from '@/components/message-box/MessageBox';
import { getContact } from '@/data/services/contact';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: LayoutProps<'/contacts/[contactId]'>): Promise<Metadata> {
  const { contactId } = await params;
  const contact = await getContact(contactId);

  return contact && contact.first && contact.last
    ? {
        description: `Contact details for ${contact.first} ${contact.last}`,
        title: `${contact.first} ${contact.last}`,
      }
    : {
        description: 'Contact details for an unnamed contact',
        title: 'Unnamed Contact',
      };
}

async function ContactMessageBox({ params }: { params: Promise<{ contactId: string }> }) {
  const { contactId } = await params;
  return <MessageBox contactId={contactId} />;
}

export default function ContactsLayout({ children, params }: LayoutProps<'/contacts/[contactId]'>) {
  return (
    <>
      {children}
      <div className="fixed bottom-0 right-8 ml-8">
        <Suspense>
          <ContactMessageBox params={params} />
        </Suspense>
      </div>
    </>
  );
}
