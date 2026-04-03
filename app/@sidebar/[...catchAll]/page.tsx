import ContactList from '@/components/ContactList';

export default async function SidebarCatchAll({ searchParams }: PageProps<'/[...catchAll]'>) {
  const { q } = await searchParams;
  const query = typeof q === 'string' ? q : undefined;

  return <ContactList q={query} />;
}
