import { getContact } from '@/data/services/contact';
import ContactForm from './_components/ContactForm';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps<'/contacts/[contactId]/edit'>): Promise<Metadata> {
  const { contactId } = await params;
  const contact = await getContact(contactId);

  return contact && contact.first && contact.last
    ? {
        description: `Edit contact details for ${contact.first} ${contact.last}`,
        title: `Edit: ${contact.first} ${contact.last}`,
      }
    : {
        description: 'Edit contact details for an unnamed contact',
        title: 'Edit: Unnamed Contact',
      };
}

export default async function EditContactPage({ params }: PageProps<'/contacts/[contactId]/edit'>) {
  const { contactId } = await params;
  const contact = await getContact(contactId);

  return <ContactForm contact={contact} />;
}
