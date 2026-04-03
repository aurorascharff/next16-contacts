import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import NewContactButton from '@/components/NewContactButton';
import Search from '@/components/Search';
import Logo from '@/public/next-js.svg';

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-1/3 w-full flex-col border-r border-gray bg-gray-light sm:h-auto sm:w-[18rem] md:w-[22rem]">
      <div className="flex items-center gap-2 border-b border-gray px-8 py-4">
        <Suspense>
          <Search />
        </Suspense>
        <NewContactButton />
      </div>
      {children}
      <div className="m-0 hidden flex-row items-center gap-2 border-t border-t-gray px-8 py-4 font-medium sm:flex">
        <Link className="flex items-center gap-2 text-black no-underline" href="/">
          <Image priority width={30} height={30} src={Logo} alt="Next.js logo" />
          Contacts
        </Link>
      </div>
      <div className="flex border-t border-t-gray sm:hidden" />
    </div>
  );
}
