import ContactList from '@/components/ContactList';

export default async function SidebarPage({ searchParams }: PageProps<'/'>) {
  const { q } = await searchParams;
  const query = typeof q === 'string' ? q : undefined;

  return <ContactList q={query} />;
}
