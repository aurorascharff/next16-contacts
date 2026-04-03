import { getContacts } from '@/data/services/contact';
import ContactButton from './ContactButton';

type Props = {
  q?: string;
};

export default async function ContactList({ q }: Props) {
  const contacts = await getContacts(q);

  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {contacts.length ? (
        <ul>
          {contacts.map(contact => {
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
