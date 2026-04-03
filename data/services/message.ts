import 'server-only';

import { cache } from 'react';
import { prisma } from '@/db';

export const getMessages = cache(async (contactId?: string) => {
  return prisma.message.findMany({
    orderBy: { createdAt: 'asc' },
    where: {
      contactId,
    },
  });
});
